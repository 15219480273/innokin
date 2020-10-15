import React from "react";

const SideButton = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36.78 21.47"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <rect
          fillRule="evenodd"
          fill={fillColor}
          className="cls-1"
          width="36.78"
          height="21.47"
          rx="5.05"
        />
      </svg>
    </>
  );
};

export { SideButton };
