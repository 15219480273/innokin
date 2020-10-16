import React from "react";
import {
  BackBottom,
  BackFramework,
  BackButton,
  SideFramework,
  SideButton,
  SidePanel,
  FrontBottom,
  Top,
  Bottom,
  StyleTwo1,
  StyleTwo2,
  StyleTwo3,
} from "./spectre-angles/";
import { useStore } from "../../store";

function Canvas() {
  const {
    style,
    content,
    contentStyles,
    bgImage,
    buttonColor,
    bottomColor,
    frameColor,
    fontColor,
    panel1Color,
    panel2Color,
    panel3Color,
  } = useStore((state) => state);
  return (
    <div id="design" className="relative">
      <div className="text-center flex justify-center">
        {bgImage && (
          <img
            className="absolute w-full max-h-full"
            src={bgImage}
            alt="Design background"
          />
        )}
        <div className="relative py-8">
          {style ? (
            <>
              <Top
                // fillColor={buttonColor}
                style={{
                  position: "absolute",
                  top: "126px",
                  left: "43px",
                  width: "120px",
                }}
              />
            </>
          ) : (
            <>
              <StyleTwo1
                fillColor={panel1Color}
                style={{
                  position: "absolute",
                  top: "126px",
                  left: "43px",
                  width: "120px",
                }}
              />
              <StyleTwo2
                fillColor={panel2Color}
                style={{
                  position: "absolute",
                  top: "157px",
                  left: "45px",
                  width: "125px",
                }}
              />
              <StyleTwo3
                fillColor={panel3Color}
                style={{
                  position: "absolute",
                  top: "208px",
                  left: "110px",
                  width: "121px",
                }}
              />
            </>
          )}

          <Bottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              top: "265px",
              left: "44px",
              width: "115px",
            }}
          />
          <FrontBottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              top: "299px",
              left: "206px",
              width: "70px",
            }}
          />
          <SidePanel
            fillColor={frameColor}
            style={{
              position: "absolute",
              top: "129px",
              left: "206px",
              width: "9px",
            }}
          />

          <SideButton
            fillColor={buttonColor}
            style={{
              position: "absolute",
              top: "259px",
              left: "224px",
              width: "33px",
            }}
          />
          <SideFramework
            fillColor={frameColor}
            style={{
              position: "absolute",
              top: "130px",
              left: "207px",
              width: "68px",
            }}
          />
          <BackButton
            fillColor={bottomColor}
            style={{
              position: "absolute",
              top: "260px",
              right: "156px",
              width: "3px",
            }}
          />
          <BackFramework
            fillColor={frameColor}
            style={{
              position: "absolute",
              right: "41px",
              top: "124px",
              width: "116px",
            }}
          />
          <BackBottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              right: "41px",
              bottom: "72px",
              width: "116px",
            }}
          />
          <div
            style={{
              ...contentStyles,
              color: fontColor,
              position: "absolute",
              transform: "translateX(-50%) rotate(90deg)",
              left: "20%",
              top: "380px",
              whiteSpace: "nowrap",
              maxWidth: "187px",
              overflow: "hidden",
            }}
          >
            {content}
          </div>
          <img
            className="w-full"
            src="/static/images/spectre-angles.jpeg"
            alt="Spectre"
          />
        </div>
      </div>
    </div>
  );
}

export { Canvas };
