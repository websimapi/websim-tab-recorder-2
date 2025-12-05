import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useRef } from "react";
import { Player } from "@websim/remotion/player";
import { RecordedClip } from "../composition.jsx";
import {
  Crop,
  Music,
  Layers,
  Save,
  Download,
  ArrowLeft,
  Plus,
  Trash2,
  Settings,
  Play,
  Pause,
  RotateCcw,
  FileAudio,
  Monitor
} from "lucide-react";
const Editor = ({ mediaBlobUrl, duration, onBack }) => {
  const [originalDimensions, setOriginalDimensions] = useState({ width: 1920, height: 1080 });
  const [versions, setVersions] = useState([]);
  const [activeVersionId, setActiveVersionId] = useState(null);
  const playerRef = useRef(null);
  useEffect(() => {
    if (!activeVersionId) {
      const initialVersion = {
        id: "original",
        name: "Original Recording",
        crop: { x: 0, y: 0, width: 1920, height: 1080 },
        audioTracks: [],
        createdAt: Date.now()
      };
      setVersions([initialVersion]);
      setActiveVersionId("original");
    }
  }, []);
  useEffect(() => {
    if (mediaBlobUrl) {
      const vid = document.createElement("video");
      vid.src = mediaBlobUrl;
      vid.onloadedmetadata = () => {
        if (vid.videoWidth === 0 || vid.videoHeight === 0) return;
        const dims = { width: vid.videoWidth, height: vid.videoHeight };
        setOriginalDimensions(dims);
        setVersions((prev) => prev.map(
          (v) => v.id === "original" && v.crop.width === 1920 ? { ...v, crop: { ...v.crop, width: dims.width, height: dims.height } } : v
        ));
      };
      vid.load();
    }
  }, [mediaBlobUrl]);
  const activeVersion = versions.find((v) => v.id === activeVersionId) || versions[0];
  const updateVersion = (updates) => {
    setVersions((prev) => prev.map(
      (v) => v.id === activeVersionId ? { ...v, ...updates } : v
    ));
  };
  const handleCreateVersion = () => {
    const newVersion = {
      ...activeVersion,
      id: `v-${Date.now()}`,
      name: `${activeVersion.name} (Copy)`,
      createdAt: Date.now()
    };
    setVersions([...versions, newVersion]);
    setActiveVersionId(newVersion.id);
  };
  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newTrack = {
        id: `audio-${Date.now()}`,
        name: file.name,
        src: url,
        startFrame: 0,
        volume: 1
      };
      updateVersion({ audioTracks: [...activeVersion.audioTracks || [], newTrack] });
    }
  };
  const deleteAudioTrack = (trackId) => {
    updateVersion({
      audioTracks: activeVersion.audioTracks.filter((t) => t.id !== trackId)
    });
  };
  if (!activeVersion) return /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center h-full text-slate-400", children: "Loading Editor..." }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 92,
    columnNumber: 9
  });
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col h-screen bg-slate-950 text-slate-200", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "h-14 shrink-0 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-4 z-10", children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: onBack, className: "flex items-center gap-2 text-slate-400 hover:text-white transition-colors", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { size: 18 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 102,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Back to Recorder" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 103,
          columnNumber: 21
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center bg-slate-800 rounded-lg p-1", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-slate-400 px-2", children: "Version:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 108,
            columnNumber: 25
          }),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              value: activeVersionId,
              onChange: (e) => setActiveVersionId(e.target.value),
              className: "bg-transparent border-none text-sm py-0.5 pl-1 pr-6 focus:ring-0 text-white font-medium",
              children: versions.map((v) => /* @__PURE__ */ jsxDEV("option", { value: v.id, children: v.name }, v.id, false, {
                fileName: "<stdin>",
                lineNumber: 115,
                columnNumber: 33
              }))
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 109,
              columnNumber: 25
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 107,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleCreateVersion, className: "p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors", title: "Duplicate Version", children: /* @__PURE__ */ jsxDEV(Layers, { size: 16 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 120,
          columnNumber: 25
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 119,
          columnNumber: 21
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 106,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => {
            const a = document.createElement("a");
            a.href = mediaBlobUrl;
            a.download = `recording-source.webm`;
            a.click();
          },
          className: "flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold rounded-lg transition-all border border-slate-700",
          children: [
            /* @__PURE__ */ jsxDEV(Download, { size: 14 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 133,
              columnNumber: 21
            }),
            "Download Source"
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 124,
          columnNumber: 17
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 100,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 bg-black/40 flex items-center justify-center relative overflow-hidden p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-5 pointer-events-none", style: {
          backgroundImage: "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        } }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 142,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "relative shadow-2xl shadow-black ring-1 ring-slate-800 max-h-full max-w-full", style: { aspectRatio: `${activeVersion.crop.width}/${activeVersion.crop.height}` }, children: /* @__PURE__ */ jsxDEV(
          Player,
          {
            ref: playerRef,
            component: RecordedClip,
            durationInFrames: Math.max(1, Math.ceil(duration * 30)) || 300,
            compositionWidth: Math.max(1, Math.round(activeVersion.crop.width)),
            compositionHeight: Math.max(1, Math.round(activeVersion.crop.height)),
            fps: 30,
            inputProps: {
              videoUrl: mediaBlobUrl,
              crop: activeVersion.crop,
              originalDimensions,
              audioTracks: activeVersion.audioTracks
            },
            controls: true,
            style: { width: "100%", height: "100%" },
            className: "w-full h-full"
          },
          `${mediaBlobUrl}-${activeVersion.id}`,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 148,
            columnNumber: 25
          }
        ) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 147,
          columnNumber: 21
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 140,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "w-80 shrink-0 border-l border-slate-800 bg-slate-900 overflow-y-auto custom-scrollbar", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-b border-slate-800/50", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2 text-slate-400", children: [
            /* @__PURE__ */ jsxDEV(Settings, { size: 14 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 175,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Project Settings" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 176,
              columnNumber: 29
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 174,
            columnNumber: 25
          }),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: activeVersion.name,
              onChange: (e) => updateVersion({ name: e.target.value }),
              className: "w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none transition-colors",
              placeholder: "Version Name"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 178,
              columnNumber: 25
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 173,
          columnNumber: 22
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-b border-slate-800/50", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-4 text-blue-400", children: [
            /* @__PURE__ */ jsxDEV(Crop, { size: 18 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 190,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-sm uppercase tracking-wider", children: "Crop / Resize" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 191,
              columnNumber: 29
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 189,
            columnNumber: 25
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] uppercase font-bold text-slate-500", children: "Width (px)" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 196,
                  columnNumber: 37
                }),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "number",
                    value: activeVersion.crop.width,
                    onChange: (e) => updateVersion({ crop: { ...activeVersion.crop, width: Number(e.target.value) } }),
                    className: "w-full bg-slate-950 border border-slate-800 rounded px-2 py-1.5 text-sm text-center font-mono"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 197,
                    columnNumber: 37
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 195,
                columnNumber: 33
              }),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] uppercase font-bold text-slate-500", children: "Height (px)" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 205,
                  columnNumber: 37
                }),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "number",
                    value: activeVersion.crop.height,
                    onChange: (e) => updateVersion({ crop: { ...activeVersion.crop, height: Number(e.target.value) } }),
                    className: "w-full bg-slate-950 border border-slate-800 rounded px-2 py-1.5 text-sm text-center font-mono"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 206,
                    columnNumber: 37
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 204,
                columnNumber: 33
              }),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] uppercase font-bold text-slate-500", children: "X Offset" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 214,
                  columnNumber: 37
                }),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "number",
                    value: activeVersion.crop.x,
                    onChange: (e) => updateVersion({ crop: { ...activeVersion.crop, x: Number(e.target.value) } }),
                    className: "w-full bg-slate-950 border border-slate-800 rounded px-2 py-1.5 text-sm text-center font-mono"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 215,
                    columnNumber: 37
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 213,
                columnNumber: 33
              }),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] uppercase font-bold text-slate-500", children: "Y Offset" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 223,
                  columnNumber: 37
                }),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "number",
                    value: activeVersion.crop.y,
                    onChange: (e) => updateVersion({ crop: { ...activeVersion.crop, y: Number(e.target.value) } }),
                    className: "w-full bg-slate-950 border border-slate-800 rounded px-2 py-1.5 text-sm text-center font-mono"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 224,
                    columnNumber: 37
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 222,
                columnNumber: 33
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 194,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => updateVersion({ crop: { ...activeVersion.crop, x: 0, y: 0 } }),
                  className: "px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors",
                  children: "Reset Position"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 234,
                  columnNumber: 33
                }
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => updateVersion({ crop: { x: 0, y: 0, width: originalDimensions.width, height: originalDimensions.height } }),
                  className: "px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors",
                  children: "Reset All"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 240,
                  columnNumber: 33
                }
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 233,
              columnNumber: 29
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 193,
            columnNumber: 25
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 188,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4 text-purple-400", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Music, { size: 18 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 254,
                columnNumber: 33
              }),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-sm uppercase tracking-wider", children: "Audio Tracks" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 255,
                columnNumber: 33
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 253,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("label", { className: "cursor-pointer p-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-md transition-colors", title: "Add Audio File", children: [
              /* @__PURE__ */ jsxDEV(Plus, { size: 16 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 258,
                columnNumber: 33
              }),
              /* @__PURE__ */ jsxDEV("input", { type: "file", accept: "audio/*", className: "hidden", onChange: handleAudioUpload }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 259,
                columnNumber: 33
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 257,
              columnNumber: 29
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 252,
            columnNumber: 26
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: activeVersion.audioTracks && activeVersion.audioTracks.length > 0 ? activeVersion.audioTracks.map((track) => /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-950/50 rounded-lg p-3 border border-slate-800 hover:border-slate-700 transition-colors group", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 overflow-hidden", children: [
                /* @__PURE__ */ jsxDEV(FileAudio, { size: 12, className: "text-slate-500 shrink-0" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 269,
                  columnNumber: 49
                }),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium truncate text-slate-300", title: track.name, children: track.name }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 270,
                  columnNumber: 49
                })
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 268,
                columnNumber: 45
              }),
              /* @__PURE__ */ jsxDEV("button", { onClick: () => deleteAudioTrack(track.id), className: "text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxDEV(Trash2, { size: 12 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 273,
                columnNumber: 49
              }) }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 272,
                columnNumber: 45
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 267,
              columnNumber: 41
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between mb-1", children: [
                  /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-slate-500", children: "Start Time" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 279,
                    columnNumber: 53
                  }),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-slate-400 font-mono", children: [
                    (track.startFrame / 30).toFixed(1),
                    "s"
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 280,
                    columnNumber: 53
                  })
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 278,
                  columnNumber: 49
                }),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "range",
                    min: "0",
                    max: Math.ceil(duration * 30),
                    value: track.startFrame,
                    onChange: (e) => {
                      const newTracks = activeVersion.audioTracks.map(
                        (t) => t.id === track.id ? { ...t, startFrame: Number(e.target.value) } : t
                      );
                      updateVersion({ audioTracks: newTracks });
                    },
                    className: "w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:rounded-full"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 282,
                    columnNumber: 49
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 277,
                columnNumber: 45
              }),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between mb-1", children: [
                  /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-slate-500", children: "Volume" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 298,
                    columnNumber: 53
                  }),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-slate-400 font-mono", children: [
                    Math.round(track.volume * 100),
                    "%"
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 299,
                    columnNumber: 53
                  })
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 297,
                  columnNumber: 49
                }),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "range",
                    step: "0.1",
                    max: "2",
                    min: "0",
                    value: track.volume,
                    onChange: (e) => {
                      const newTracks = activeVersion.audioTracks.map(
                        (t) => t.id === track.id ? { ...t, volume: Number(e.target.value) } : t
                      );
                      updateVersion({ audioTracks: newTracks });
                    },
                    className: "w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-slate-400 [&::-webkit-slider-thumb]:rounded-full"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 301,
                    columnNumber: 50
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 296,
                columnNumber: 45
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 276,
              columnNumber: 41
            })
          ] }, track.id, true, {
            fileName: "<stdin>",
            lineNumber: 266,
            columnNumber: 37
          })) : /* @__PURE__ */ jsxDEV("div", { className: "text-center py-6 border border-dashed border-slate-800 rounded-lg text-slate-600", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs mb-1", children: "No audio added" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 321,
              columnNumber: 37
            }),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-slate-700", children: "Click + to add tracks" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 322,
              columnNumber: 37
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 320,
            columnNumber: 33
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 263,
            columnNumber: 25
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 251,
          columnNumber: 21
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 170,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 138,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 98,
    columnNumber: 9
  });
};
export {
  Editor
};
