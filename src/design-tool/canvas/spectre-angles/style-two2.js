import React from "react";

const StyleTwo2 = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 145 170.33"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <path
          fillRule="evenodd"
          fill={fillColor}
          d="M.56,0l125,170.33a8.74,8.74,0,0,1-4.46-1.51L3.38,110c-.9-.45-1.84-.82-2.76-1.23-.82-1.26-.57-2.68-.57-4q0-50.52,0-101C.06,2.44-.25,1.14.56,0Z"
        />
      </svg>
    </>
  );
};

export { StyleTwo2 };
