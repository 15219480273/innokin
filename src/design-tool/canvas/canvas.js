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
  FrontFrame,
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
        <img
          className="absolute w-full max-h-full"
          src="/static/images/spectre-bg.png"
          alt="Design background"
        />
        <div className="relative w-full py-8">
          <FrontFrame
            fillColor={frameColor}
            style={{
              position: "absolute",
              top: "166px",
              left: "73px",
              width: "119px",
            }}
          />
          {style ? (
            <>
              <Top
                // fillColor={buttonColor}
                style={{
                  position: "absolute",
                  top: "168px",
                  left: "75px",
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
                  top: "170px",
                  left: "77px",
                  width: "120px",
                }}
              />
              <StyleTwo2
                fillColor={panel2Color}
                style={{
                  position: "absolute",
                  top: "206px",
                  left: "78px",
                  width: "117px",
                }}
              />
              <StyleTwo3
                fillColor={panel3Color}
                style={{
                  position: "absolute",
                  top: "255px",
                  left: "146px",
                  width: "121px",
                }}
              />
            </>
          )}
          <Bottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              top: "305px",
              left: "73px",
              width: "120px",
            }}
          />
          <FrontBottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              top: "342px",
              left: "256px",
              width: "70px",
            }}
          />
          <SidePanel
            fillColor={frameColor}
            style={{
              position: "absolute",
              top: "177px",
              left: "256px",
              width: "69px",
            }}
          />
          <SideButton
            fillColor={buttonColor}
            style={{
              position: "absolute",
              top: "304px",
              left: "275px",
              width: "33px",
            }}
          />
          <SideFramework
            fillColor={frameColor}
            style={{
              position: "absolute",
              top: "172px",
              left: "257px",
              width: "69px",
            }}
          />
          <BackButton
            fillColor={buttonColor}
            style={{
              position: "absolute",
              top: "304px",
              right: "190px",
              width: "3px",
            }}
          />
          <BackFramework
            fillColor={frameColor}
            style={{
              position: "absolute",
              right: "70px",
              top: "166px",
              width: "120px",
            }}
          />
          <BackBottom
            fillColor={bottomColor}
            style={{
              position: "absolute",
              right: "74px",
              bottom: "32px",
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
          <div className="flex w-3/4 mt-20 mx-auto justify-between items-center">
            <img
              className="spectre-front"
              src={
                style
                  ? "/static/images/spectre-front.png"
                  : "/static/images/spectre-style2-front.png"
              }
              alt="Spectre front"
              style={{
                maxWidth: "120px",
              }}
            />

            <img
              className="spectre-button"
              src="/static/images/spectre-button.png"
              alt="Spectre button"
              style={{
                maxWidth: "70px",
              }}
            />

            <img
              className="spectre-back"
              src="/static/images/spectre-back.png"
              alt="Spectre back"
              style={{
                maxWidth: "120px",
              }}
            />
          </div>
          {/*<img*/}
          {/*  className="w-full"*/}
          {/*  src="/static/images/spectre-angles.jpeg"*/}
          {/*  alt="Spectre"*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
}

export { Canvas };
