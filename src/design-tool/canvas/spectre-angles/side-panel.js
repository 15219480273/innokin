import React from "react";

const SidePanel = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79.17 219.64"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <path
          fillRule="evenodd"
          fill={fillColor}
          d="M.19,1.94C5.3-1.21,6.72-.74,8.9,5a29.33,29.33,0,0,1,1.87,9.31c.05,1.19,0,2.39,0,3.58q0,86.51,0,173c0,1.28.15,18.69-.19,20-1.77.16-5.91-7.89-6.81-9C2.1,199.2,1.27,194.6.27,191.43-.09,189.28,0,181.23,0,179c0-3.1,0-5.56.08-8.53Q.05,150.32,0,130.19,0,68,0,5.8C0,4.51.13,3.22.19,1.94Z"
        />
      </svg>
    </>
  );
};

export { SidePanel };
