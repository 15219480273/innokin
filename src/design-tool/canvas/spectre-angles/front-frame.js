import React from "react";

const FrontFrame = (props) => {
  const { fillColor = "#fff" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 420"
      {...props}
      style={{
        ...props.style,
        mixBlendMode: "multiply",
      }}
    >
      <path
        fillRule="evenodd"
        fill={fillColor}
        d="M8.000,296.000 L7.967,39.903 C7.967,39.903 12.431,10.801 43.000,8.000 L203.167,7.981 C203.167,7.981 228.843,8.919 235.037,35.913 L236.033,47.884 L236.000,410.000 L244.000,415.000 L244.000,35.913 C244.000,35.913 236.920,2.978 205.159,0.998 L172.294,0.000 L47.000,1.000 L34.000,2.000 C34.000,2.000 2.756,9.645 0.000,41.000 L0.000,60.000 L0.000,292.000 L8.000,296.000 Z"
      />
    </svg>
  );
};

export { FrontFrame };
