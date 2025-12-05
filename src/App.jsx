import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { RecordedClip } from "./composition.jsx";
import { useRecorder } from "./hooks/useRecorder.js";
import { Controls } from "./components/Controls.jsx";
import { AlertCircle } from "lucide-react";
function App() {
  const {
    status,
    startRecording,
    stopRecording,
    resetRecording,
    mediaBlobUrl,
    duration,
    error
  } = useRecorder();
  const handleDownload = () => {
    if (mediaBlobUrl) {
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = mediaBlobUrl;
      a.download = `recording-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/:/g, "-")}.webm`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 100);
    }
  };
  const durationInFrames = Math.max(1, Math.ceil(duration * 30));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-950 text-white flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg", children: "R" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-xl font-bold tracking-tight", children: "Tab Recorder" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-medium px-3 py-1 bg-slate-800 rounded-full text-slate-400 border border-slate-700", children: "Browser Native Recording" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 flex flex-col items-center justify-center p-6 gap-8", children: [
      error && /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md bg-red-900/20 border border-red-500/50 p-4 rounded-lg flex items-start gap-3 text-red-200", children: [
        /* @__PURE__ */ jsxDEV(AlertCircle, { className: "shrink-0 mt-0.5", size: 18 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: error }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative w-full max-w-4xl aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 ring-1 ring-white/5", children: mediaBlobUrl ? /* @__PURE__ */ jsxDEV(
        Player,
        {
          component: RecordedClip,
          durationInFrames,
          compositionWidth: 1920,
          compositionHeight: 1080,
          fps: 30,
          inputProps: { videoUrl: mediaBlobUrl },
          controls: true,
          style: {
            width: "100%",
            height: "100%"
          },
          className: "bg-black"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 25
        },
        this
      ) : /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 ring-4 ring-slate-800/50", children: /* @__PURE__ */ jsxDEV("div", { className: `w-3 h-3 rounded-full ${status === "recording" ? "bg-red-500 animate-ping" : "bg-slate-600"}` }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 82,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-slate-400", children: status === "recording" ? "Recording in progress..." : "Ready to record" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        Controls,
        {
          status,
          duration,
          onStart: startRecording,
          onStop: stopRecording,
          onReset: resetRecording,
          onDownload: handleDownload
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 54,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 37,
    columnNumber: 9
  }, this);
}
export {
  App as default
};
