import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { RecordedClip } from "./composition.jsx";
import { useRecorder } from "./hooks/useRecorder.js";
import { Controls } from "./components/Controls.jsx";
import { Editor } from "./components/Editor.jsx";
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
  if (status === "stopped" && mediaBlobUrl) {
    return /* @__PURE__ */ jsxDEV(
      Editor,
      {
        mediaBlobUrl,
        duration,
        onBack: resetRecording
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-slate-950 text-white flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg", children: "R" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-xl font-bold tracking-tight", children: "Tab Recorder" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-medium px-3 py-1 bg-slate-800 rounded-full text-slate-400 border border-slate-700", children: "Recorder Mode" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 flex flex-col items-center justify-center p-6 gap-8", children: [
      error && /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md bg-red-900/20 border border-red-500/50 p-4 rounded-lg flex items-start gap-3 text-red-200", children: [
        /* @__PURE__ */ jsxDEV(AlertCircle, { className: "shrink-0 mt-0.5", size: 18 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: error }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 54,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative w-full max-w-4xl aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 ring-1 ring-white/5 flex items-center justify-center", children: status === "recording" ? /* @__PURE__ */ jsxDEV("div", { className: "text-center space-y-6 animate-pulse", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto ring-4 ring-red-500/10", children: /* @__PURE__ */ jsxDEV("div", { className: "w-4 h-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-white mb-2", children: "Recording in Progress" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 65,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400", children: "Capture is active in another tab or window." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 66,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 64,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 25
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 ring-4 ring-slate-800/50 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-slate-600" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 71,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-slate-400", children: "Ready to record" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        Controls,
        {
          status,
          duration,
          onStart: startRecording,
          onStop: stopRecording,
          onReset: resetRecording
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 81,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}
export {
  App as default
};
