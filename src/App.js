import React, { useEffect } from "react";
import classnames from "classnames";
import WebFont from "webfontloader";
import { Canvas, Controls } from "./design-tool";
import { useStore } from "./store";

export const fontFamilies = ["Roboto", "Anton", "Arvo", "Allan"];
WebFont.load({
  custom: {
    families: fontFamilies,
    urls: ["/static/fonts/index.css"],
  },
});

function App() {
  const { style, changeStyle } = useStore((state) => state);

  return (
    <div className="App mx-auto rounded shadow-lg p-8 bg-white relative">
      <div className="app-container flex flex-col lg:flex-row">
        <div className="w-full xl:w-1/2 pr-4">
          <Canvas />
        </div>
        <div className="w-full xl:w-1/2">
          <div className="flex absolute top-0 right-0">
            <button
              className={classnames(
                "py-4",
                "px-16",
                "uppercase",
                "font-bold",
                { "bg-gray-100": !style },
                { "text-brand-blue1": style },
                { "text-brand-body": !style }
              )}
              onClick={changeStyle}
            >
              Style 1
            </button>
            <button
              className={classnames(
                "py-4",
                "px-16",
                "uppercase",
                "font-bold",
                { "bg-gray-100": style },
                { "text-brand-blue1": !style },
                { "text-brand-body": style }
              )}
              onClick={changeStyle}
            >
              Style 2
            </button>
          </div>
          <div className="pl-4 mt-8 flex flex-col justify-center">
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
