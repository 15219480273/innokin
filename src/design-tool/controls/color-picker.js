import React, { useState, useEffect, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, simple = false, updateColor }) => {
  const node = useRef();
  const [display, setDisplay] = useState(false);
  const hex = color;

  const handleChange = (color) => {
    updateColor(color.hex);
  };

  const handleClickOutside = (event) => {
    if (node.current.contains(event.target)) {
      // click inside
      return;
    }

    setDisplay(false);
  };

  useEffect(() => {
    if (display) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [display]);

  return (
    <>
      <button
        className={`flex items-center relative ${simple && "w-full h-full"}`}
        onClick={() => setDisplay(!display)}
      >
        <div
          className={`p-1 flex items-center ${simple && "mx-auto"} ${
            !simple && "rounded shadow p-1"
          }`}
        >
          <div
            className="w-10 h-6 z-10"
            style={{
              backgroundColor: hex,
            }}
          />
          <HiChevronDown className="text-brand-body font-normal text-2xl" />
        </div>
      </button>
      {display && (
        <div ref={node} className="absolute z-20 mt-2">
          <SketchPicker color={{ hex: color }} onChange={handleChange} />
        </div>
      )}
    </>
  );
};

export { ColorPicker };
