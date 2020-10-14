import ImageEditor from "@toast-ui/react-image-editor/src";
import { whiteTheme } from "../image-editor-themes";
import React from "react";

const ToastImageEditor = ({ imageUrl }) => (
  <ImageEditor
    includeUI={{
      loadImage: {
        path: imageUrl,
        name: "SampleImage",
      },
      theme: whiteTheme,
      menu: ["crop", "flip", "rotate", "draw", "shape", "icon", "text"],
      initMenu: "draw",
      uiSize: {
        width: "1000px",
        height: "700px",
      },
      menuBarPosition: "top",
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
);

export { ToastImageEditor };
