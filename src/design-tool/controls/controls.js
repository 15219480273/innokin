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
    topColor,
    changeTopColor,
    bottomColor,
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
        // console.log("data", dataUrl);
        // const response = await axios({
        //   url: "/design/create-test",
        //   method: "post",
        //   headers: {
        //     "X-CSRFToken": Cookies.get("csrftoken"),
        //   },
        //   data: qs.stringify({ design_image: dataUrl }),
        // });
        //
        // // If the design was created
        // if (response.status === 201) {
        //   console.log(await response.data);
        // } else {
        //   // TODO: Show a warning
        // }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>Design</h1>

      <hr className="my-6" />
      <h2 className="mb-8">Colors &amp; Text</h2>

      <div className="flex">
        <div className="flex flex-col justify-center">
          <ColorPicker color={topColor} updateColor={changeTopColor} />
          <hr className="my-3" />
          <ColorPicker color={bottomColor} updateColor={changeBottomColor} />
        </div>
        <div className="w-24" />
        <div className="w-full">
          <FontEditor />
        </div>
      </div>

      <hr className="my-6" />

      <div className="overlay-image">
        <h2 className="mb-8">Overlay Image</h2>
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
      <hr className="my-6" />
      <div className="background-image">
        <h2 className="mb-8">Background Image</h2>
        <ImageUpload
          fileName={backgroundImageFileName}
          handleImageSelect={(event) =>
            handleImageSelect(event, changeBgImage, setBackgroundImageFileName)
          }
        />
      </div>
      <hr className="my-6" />
      <div className="design-create">
        <Button onClick={handleCreateDesign}>
          <FaArrowRight className="text-xl mr-3" /> Next Step
        </Button>
      </div>
    </div>
  );
}

export { Controls };
