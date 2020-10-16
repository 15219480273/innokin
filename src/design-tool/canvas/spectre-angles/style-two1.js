import React from "react";

const StyleTwo1 = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 150"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <path
          fillRule="evenodd"
          fill={fillColor}
          d="M135.77,102.23q-15.62,14-31.21,28c-6.27,5.65-12.5,11.34-18.78,17a7,7,0,0,1-2.92,2.09c-2.49-3.36-5-6.78-7.55-10.2Q39.1,90,2.9,40.89c-.75-1-1.57-2-2.36-3A6.61,6.61,0,0,1,0,35c0-4.54-.07-9.08,0-13.62C.35,7.33,11.72.34,21.24.24q46.94-.48,93.86,0c10.37.12,21.16,8,21.19,21.08q.06,38.79,0,77.59A6,6,0,0,1,135.77,102.23Z"
        />
      </svg>
    </>
  );
};

export { StyleTwo1 };
