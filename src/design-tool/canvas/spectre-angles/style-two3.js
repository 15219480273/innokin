import React from "react";

const StyleTwo3 = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 148 148"
        {...props}
        style={{
          ...props.style,
          mixBlendMode: "multiply",
        }}
      >
        <path
          fillRule="evenodd"
          fill={fillColor}
          d="M49.16,112.87Q37.52,97.06,25.89,81.26q-11.75-16-23.46-32c-.59-.81-1.14-1.66-1.79-2.43A1.79,1.79,0,0,1,.86,44c1-.8,1.85-1.71,2.78-2.55Q25.92,21.27,48.21,1.16c.46-.42,1-.78,1.48-1.16q0,54.8,0,109.6C49.73,110.71,49.94,111.88,49.16,112.87Z"
        />
      </svg>
    </>
  );
};

export { StyleTwo3 };
