import React, { useState, useEffect } from "react";
import domtoimage from "dom-to-image";
import { ColorPicker } from "./color-picker";
import { FontEditor } from "./font-editor";
import { useStore } from "../../store";
import { Button } from "../../ui-components";
import { pixie } from "../../pixie/app";
import { ImageUpload } from "./image-upload";

function Controls() {
  const [overlayImageFileName, setOverlayImageFileName] = useState("");
  const {
    panel1Color,
    panel2Color,
    panel3Color,
    changePanel1Color,
    changePanel2Color,
    changePanel3Color,
    style,
    changeOverlayImage,
    buttonColor,
    changeButtonColor,
    bottomColor,
    frameColor,
    changeFrameColor,
    changeBottomColor,
  } = useStore((state) => state);

  useEffect(() => {
    console.log("style", style);
  });

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
        {style && (
          <>
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
          </>
        )}
      </div>

      {!style && (
        <>
          <div className="flex justify-between mb-8">
            <div>
              <p className="text-brand-body uppercase font-bold mb-2">Panel1</p>
              <ColorPicker
                color={panel1Color}
                updateColor={changePanel1Color}
              />
            </div>

            <div>
              <p className="text-brand-body uppercase font-bold mb-2">Panel2</p>
              <ColorPicker
                color={panel2Color}
                updateColor={changePanel2Color}
              />
            </div>

            <div>
              <p className="text-brand-body uppercase font-bold mb-2">Panel3</p>
              <ColorPicker
                color={panel3Color}
                updateColor={changePanel3Color}
              />
            </div>
          </div>
        </>
      )}

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
