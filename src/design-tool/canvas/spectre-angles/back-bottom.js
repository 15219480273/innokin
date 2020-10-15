import React from "react";

const BackBottom = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128.19 260.26"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <path
          fillRule="evenodd"
          fill={fillColor}
          className="cls-1"
          d="M128.18.41c0,5.78,0,11.55,0,17.32-.12,37.47-.11,74.93-.43,112.4-.31,36.07-.21,72.14-.47,108.21-.08,10.18-6.33,18.5-15.66,20.8a41.22,41.22,0,0,1-9.21.81c-22.63.34-45.26.43-67.88.11-4.78-.07-9.57-.23-14.34-.34-8.7-.2-19.29-7.88-19.43-20.83C.65,228.33.65,217.77.61,207.21q-.1-30.5-.21-61Q.22,105.13,0,64A8.3,8.3,0,0,1,3.47,61.3q60.14-30,120.29-60.08C125.11.54,126.48-.63,128.18.41Z"
        />
      </svg>
    </>
  );
};

export { BackBottom };
