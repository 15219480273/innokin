import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

function ImageUpload({ fileName, handleImageSelect }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="flex relative">
        <input
          className="absolute border w-100 opacity-0 cursor-pointer"
          id="overlay-image"
          name="overlay-image"
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
        />
        <label
          htmlFor="overlay-image"
          className="flex rounded cursor-pointer justify-center items-center w-full py-4 px-4 border border-brand-body shadow border-dashed"
        >
          {fileName ? (
            <>
              {`...${fileName.slice(-15, fileName.length)}`}{" "}
              <FaCheck className="text-green-700 ml-2 text-xl" />
            </>
          ) : (
            <span className="uppercase text-brand-body">Upload an image</span>
          )}
        </label>
      </div>
    </form>
  );
}

ImageUpload.propTypes = {
  fileName: PropTypes.string.required,
  HandleImageSelect: PropTypes.func.required,
};

export { ImageUpload };
