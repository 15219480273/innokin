import React from "react";

const Bottom = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 500"
      {...props}
      style={{
        ...props.style,
        zIndex: 10,
        position: "absolute",
        mixBlendMode: "multiply",
      }}
    >
      <path
        id="user-color2"
        fillRule="evenodd"
        fill={fillColor}
        d="M0.000,0.000 L244.000,122.000 L243.000,453.000 C243.000,475.091 225.091,493.000 203.000,493.000 L40.000,493.000 C17.909,493.000 0.000,475.091 0.000,453.000 L0.000,0.000 Z"
      />
    </svg>
  );
};

export { Bottom };
