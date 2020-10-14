import React, { useEffect } from "react";
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
  return (
    <div className="App mx-auto py-8">
      <div className="app-container flex flex-col lg:flex-row">
        <div className="w-full xl:w-1/2 pr-4">
          <Canvas />
        </div>
        <div className="w-full prose xl:w-1/2 pl-4">
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;
