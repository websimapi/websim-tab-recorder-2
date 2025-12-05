import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Mic, StopCircle, RefreshCcw, Download, MonitorPlay } from "lucide-react";
const Controls = ({ status, onStart, onStop, onReset, onDownload, duration }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor(seconds % 1 * 100);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  if (status === "idle") {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onStart,
          className: "flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-red-900/50 hover:scale-105 active:scale-95",
          children: [
            /* @__PURE__ */ jsxDEV(MonitorPlay, { size: 24 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 20,
              columnNumber: 21
            }),
            "Start Recording"
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 16,
          columnNumber: 17
        }
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 text-sm max-w-md text-center", children: [
        "Click to select a tab or screen to record. ",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 24,
          columnNumber: 64
        }),
        /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400", children: "Important:" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 21
        }),
        ' Check "Share tab audio" in the browser popup to capture sound.'
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 13
    });
  }
  if (status === "recording") {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-4 h-4 rounded-full bg-red-500 animate-pulse" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV("span", { className: "text-4xl font-mono font-bold tracking-wider", children: formatTime(duration) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 21
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onStop,
          className: "flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 border-2 border-red-500/50 text-white rounded-full text-xl font-bold transition-all",
          children: [
            /* @__PURE__ */ jsxDEV(StopCircle, { size: 24, className: "fill-red-500 text-red-500" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 44,
              columnNumber: 21
            }),
            "Stop Recording"
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 17
        }
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 text-sm animate-bounce", children: "Recording in progress..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 13
    });
  }
  if (status === "stopped") {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onReset,
          className: "flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all",
          children: [
            /* @__PURE__ */ jsxDEV(RefreshCcw, { size: 18 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 61,
              columnNumber: 21
            }),
            "New Recording"
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 57,
          columnNumber: 17
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onDownload,
          className: "flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20",
          children: [
            /* @__PURE__ */ jsxDEV(Download, { size: 18 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 68,
              columnNumber: 21
            }),
            "Download .webm"
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 64,
          columnNumber: 17
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 13
    });
  }
  return null;
};
export {
  Controls
};
