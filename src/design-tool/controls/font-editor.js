import React from "react";
import Select from "react-select";
import { ColorPicker } from "./color-picker";
import { useStore } from "../../store";
import { fontFamilies } from "../../App";

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    // border: "1px solid gray",
    border: 0,
    borderRight: 0,
    backgroundColor: "transparent",
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: "1px",
    border: "2px solid black",
    borderRadius: 0,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#969799",
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};

function FontEditor() {
  const {
    content,
    contentStyles,
    changeContent,
    changeContentStyles,
    fontColor,
    changeFontColor,
  } = useStore((state) => state);
  const fontFamilyOptions = fontFamilies.map((family) => ({
    value: family,
    label: family,
  }));

  const fontSizeOptions = [
    { value: 14, label: 14 },
    { value: 16, label: 16 },
    { value: 20, label: 20 },
    { value: 26, label: 26 },
    { value: 32, label: 32 },
  ];

  const handleSubmit = (event) => event.preventDefault();
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-stretch">
        <div
          className="w-2/5 border border-brand-body"
          style={{ borderTopLeftRadius: "0.25rem" }}
        >
          <Select
            styles={selectStyles}
            options={fontFamilyOptions}
            defaultValue={fontFamilyOptions[0]}
            onChange={({ value }) => {
              changeContentStyles({ ...contentStyles, fontFamily: value });
            }}
          />
        </div>
        <div className="w-2/5 border border-brand-body border-l-0">
          <Select
            styles={selectStyles}
            options={fontSizeOptions}
            defaultValue={fontSizeOptions[0]}
            onChange={({ value }) => {
              changeContentStyles({ ...contentStyles, fontSize: value });
            }}
          />
        </div>
        <div
          className="w-1/5 border border-brand-body border-l-0 justify-center items-stretch"
          style={{
            borderTopRightRadius: "0.25rem",
          }}
        >
          <ColorPicker
            simple={true}
            color={fontColor}
            updateColor={changeFontColor}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <label htmlFor="content" className="sr-only">
            Content:
          </label>
          <textarea
            name="content"
            id="content"
            className="border border-brand-body shadow border-t-0 resize-none w-full h-32 p-4 placeholder-gray-900"
            placeholder={"Write something"}
            value={content}
            style={{
              borderBottomLeftRadius: "0.25rem",
              borderBottomRightRadius: "0.25rem",
            }}
            onChange={(event) => changeContent(event.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export { FontEditor };
