import React, { useState, useEffect } from "react";
import domtoimage from "dom-to-image";
import { ColorPicker } from "./color-picker";
import { FontEditor } from "./font-editor";
import { useStore } from "../../store";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../ui-components";
import { pixie } from "../../pixie/app";
import { ImageUpload } from "./image-upload";

function Controls() {
  const [overlayImageFileName, setOverlayImageFileName] = useState("");
  const [backgroundImageFileName, setBackgroundImageFileName] = useState("");
  const {
    changeBgImage,
    changeOverlayImage,
    buttonColor,
    changeButtonColor,
    bottomColor,
    frameColor,
    changeFrameColor,
    changeBottomColor,
  } = useStore((state) => state);

  const handleImageSelect = (event, updateGlobalState, updateLocalState) => {
    const { files } = event.target;
    if (files && files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        updateGlobalState(event.target.result);
      };
      reader.readAsDataURL(files[0]);
      updateLocalState(files[0].name);
    }
  };

  const handleCreateDesign = async (event) => {
    const designElement = document.getElementById("design");
    try {
      domtoimage.toPng(designElement).then(async (dataUrl) => {
        console.log("pixie", pixie);
        pixie.openEditorWithImage(dataUrl);
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="pl-8">
      <div className="overlay-image mb-8">
        <p className="text-brand-body uppercase font-bold mb-2">Panel</p>

        <ImageUpload
          fileName={overlayImageFileName}
          handleImageSelect={(event) =>
            handleImageSelect(
              event,
              changeOverlayImage,
              setOverlayImageFileName
            )
          }
        />
      </div>

      <div className="flex justify-between mb-8">
        <div>
          <p className="text-brand-body uppercase font-bold mb-2">Bottom</p>
          <ColorPicker color={bottomColor} updateColor={changeBottomColor} />
        </div>

        <div>
          <p className="text-brand-body uppercase font-bold mb-2">Frame</p>
          <ColorPicker color={frameColor} updateColor={changeFrameColor} />
        </div>

        <div>
          <p className="text-brand-body uppercase font-bold mb-2">Button</p>
          <ColorPicker color={buttonColor} updateColor={changeButtonColor} />
        </div>
      </div>

      <div className="flex mb-8">
        <div className="w-full">
          <FontEditor />
        </div>
      </div>

      <div className="design-create">
        <Button
          className="w-full text-xl uppercase"
          onClick={handleCreateDesign}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}

export { Controls };
