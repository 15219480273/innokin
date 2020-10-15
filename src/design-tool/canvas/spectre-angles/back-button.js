import React from "react";

const BackButton = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3.31 20.34"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <path
          fillRule="evenodd"
          fill={fillColor}
          d="M1.73,0H1.37V0A1.58,1.58,0,0,0,0,1.58V18.76a1.58,1.58,0,0,0,1.37,1.56v0H3.31V0Z"
        />
      </svg>
    </>
  );
};

export { BackButton };
