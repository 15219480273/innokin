import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-components";
import { FaCloudUploadAlt, FaCheck } from "react-icons/fa";

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
        <Button
          as="label"
          variant="secondary"
          htmlFor="overlay-image"
          className="mr-2"
        >
          <FaCloudUploadAlt className="mr-2 text-xl" /> Upload an image
        </Button>
        <div className="flex items-center">
          {fileName ? (
            <>
              {`...${fileName.slice(-15, fileName.length)}`}{" "}
              <FaCheck className="text-green-700 ml-2 text-xl" />
            </>
          ) : (
            "No image selected"
          )}
        </div>
      </div>
    </form>
  );
}

ImageUpload.propTypes = {
  fileName: PropTypes.string.required,
  HandleImageSelect: PropTypes.func.required,
};

export { ImageUpload };
