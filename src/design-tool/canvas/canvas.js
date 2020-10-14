import React from "react";
import { Top } from "./top";
import { Bottom } from "./bottom";
import { useStore } from "../../store";

function Canvas() {
  const {
    content,
    contentStyles,
    bgImage,
    topColor,
    bottomColor,
    fontColor,
  } = useStore((state) => state);
  return (
    <div id="design" className="relative">
      <div className="bg-gray-100 text-center flex justify-center">
        {bgImage && (
          <img
            className="absolute w-full max-h-full"
            src={bgImage}
            alt="Design background"
          />
        )}
        <div className="relative w-32 py-8">
          <Top
            fillColor={topColor}
            style={{
              position: "absolute",
              left: "4px",
              top: "92px",
              width: "100%",
            }}
          />
          <Bottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              left: "0",
              top: "238px",
              width: "100%",
            }}
          />
          <div
            style={{
              ...contentStyles,
              color: fontColor,
              position: "absolute",
              transform: "translateX(-50%) rotate(90deg)",
              left: "50%",
              top: "368px",
              whiteSpace: "nowrap",
              maxWidth: "206px",
              overflow: "hidden",
            }}
          >
            {content}
          </div>
          <img src="/static/images/spectre.png" alt="Spectre" />
        </div>
      </div>
    </div>
  );
}

export { Canvas };
