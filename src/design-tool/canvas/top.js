import React from "react";
import { useStore } from "../../store";

const Top = (props) => {
  const { overlayImage } = useStore((state) => state);
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 249 420"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        {overlayImage && (
          <defs>
            <pattern
              id="bgimage"
              // patternUnits="userSpaceOnUse"
              patternContentUnits="objectBoundingBox"
              width="100%"
              height="100%"
            >
              <image href={overlayImage} x="0" y="0" width="1" height="1" />
            </pattern>
          </defs>
        )}
        <path
          id="user-color1"
          fillRule="evenodd"
          fill={overlayImage ? "url(#bgimage)" : fillColor}
          d="M189.000,1.000 L39.385,-0.000 C14.371,0.801 0.000,17.693 0.000,39.518 L1.000,257.000 L229.000,372.000 L229.000,41.446 C229.000,11.607 207.233,-0.868 189.000,1.000 Z"
        />
      </svg>
    </>
  );
};

export { Top };
