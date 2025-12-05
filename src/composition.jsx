import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, Audio } from "remotion";
const RecordedClip = ({ videoUrl, crop, audioTracks = [], originalDimensions }) => {
  const sourceWidth = originalDimensions?.width || 1920;
  const sourceHeight = originalDimensions?.height || 1080;
  const cropX = Number(crop?.x) || 0;
  const cropY = Number(crop?.y) || 0;
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#0f172a" }, children: [
    videoUrl ? /* @__PURE__ */ jsxDEV("div", { style: {
      position: "absolute",
      left: -cropX,
      top: -cropY,
      width: sourceWidth,
      height: sourceHeight
    }, children: /* @__PURE__ */ jsxDEV(
      OffthreadVideo,
      {
        src: videoUrl,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "fill",
          backgroundColor: "#000"
        }
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 21
      }
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 16,
      columnNumber: 17
    }) : /* @__PURE__ */ jsxDEV(AbsoluteFill, { className: "bg-slate-900 flex items-center justify-center text-white", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold", children: "No Recording Available" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 17
    }),
    audioTracks.map((track) => /* @__PURE__ */ jsxDEV(Sequence, { from: track.startFrame || 0, children: /* @__PURE__ */ jsxDEV(
      Audio,
      {
        src: track.src,
        volume: track.volume ?? 1
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 41,
        columnNumber: 21
      }
    ) }, track.id, false, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 17
    }))
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 14,
    columnNumber: 9
  });
};
export {
  RecordedClip
};
