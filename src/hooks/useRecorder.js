import { useState, useRef, useCallback } from 'react';

export function useRecorder() {
    const [status, setStatus] = useState('idle'); // idle, recording, stopped
    const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
    const [duration, setDuration] = useState(0); // in seconds
    const [error, setError] = useState(null);

    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);
    const startTimeRef = useRef(null);
    const streamRef = useRef(null);
    const timerIntervalRef = useRef(null);

    const startRecording = useCallback(async () => {
        try {
            setError(null);

            // Request screen capture with audio
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    cursor: "always"
                },
                audio: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false,
                    sampleRate: 44100
                }
            });

            // Check if user provided audio
            const audioTracks = stream.getAudioTracks();
            if (audioTracks.length === 0) {
                console.warn("No audio track detected. Ensure 'Share tab audio' was checked.");
            }

            streamRef.current = stream;

            // Handle stream ending (user clicks "Stop sharing" in browser UI)
            stream.getVideoTracks()[0].onended = () => {
                stopRecording();
            };

            const mimeType = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
                ? "video/webm; codecs=vp9" 
                : "video/webm";

            const mediaRecorder = new MediaRecorder(stream, { mimeType });
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                setMediaBlobUrl(url);

                // Calculate final duration
                if (startTimeRef.current) {
                    const end = Date.now();
                    const seconds = (end - startTimeRef.current) / 1000;
                    setDuration(seconds);
                }

                setStatus('stopped');

                // Cleanup stream tracks
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach(track => track.stop());
                    streamRef.current = null;
                }

                clearInterval(timerIntervalRef.current);
            };

            mediaRecorder.start(200); // Collect chunks every 200ms
            startTimeRef.current = Date.now();
            setStatus('recording');

            // Start local timer for UI
            setDuration(0);
            timerIntervalRef.current = setInterval(() => {
                setDuration((Date.now() - startTimeRef.current) / 1000);
            }, 100);

        } catch (err) {
            console.error("Error starting recording:", err);
            setError(err.message || "Failed to start recording");
            setStatus('idle');
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
    }, []);

    const resetRecording = useCallback(() => {
        if (mediaBlobUrl) {
            URL.revokeObjectURL(mediaBlobUrl);
        }
        setMediaBlobUrl(null);
        setStatus('idle');
        setDuration(0);
        setError(null);
    }, [mediaBlobUrl]);

    return {
        status,
        startRecording,
        stopRecording,
        resetRecording,
        mediaBlobUrl,
        duration,
        error
    };
}