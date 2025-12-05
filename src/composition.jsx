import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, OffthreadVideo, useVideoConfig } from "remotion";
const RecordedClip = ({ videoUrl }) => {
  const { width, height } = useVideoConfig();
  if (!videoUrl) {
    return /* @__PURE__ */ jsxDEV(AbsoluteFill, { className: "bg-slate-900 flex items-center justify-center text-white", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold", children: "No Recording Available" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 13
    });
  }
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#000" }, children: /* @__PURE__ */ jsxDEV(
    OffthreadVideo,
    {
      src: videoUrl,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 13
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 9
  });
};
export {
  RecordedClip
};
