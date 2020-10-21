import create from "zustand";

const defaultFontColor = "#000";
const useStore = create((set) => ({
  activePanel: "design", // "design", "editing"
  style: true,
  content: "",
  bgImage: "",
  overlayImage: "",
  designUrl: "",
  contentStyles: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: defaultFontColor,
  },
  buttonColor: "transparent",
  bottomColor: "transparent",
  frameColor: "transparent",
  panel1Color: "transparent",
  panel2Color: "transparent",
  panel3Color: "transparent",
  changePanel1Color: (color) => set((state) => ({ panel1Color: color })),
  changePanel2Color: (color) => set((state) => ({ panel2Color: color })),
  changePanel3Color: (color) => set((state) => ({ panel3Color: color })),
  fontColor: defaultFontColor,
  changeStyle: () => set((state) => ({ style: !state.style })),
  changeActivePanel: (panel) => set((state) => ({ activePanel: panel })),
  changeDesignUrl: (imageUrl) => set((state) => ({ designUrl: imageUrl })),
  changeBgImage: (imageUrl) => set((state) => ({ bgImage: imageUrl })),
  changeOverlayImage: (imageUrl) =>
    set((state) => ({ overlayImage: imageUrl })),
  changeContent: (content) => set((state) => ({ content })),
  changeContentStyles: (styles) => set((state) => ({ contentStyles: styles })),
  changeButtonColor: (color) => set((state) => ({ buttonColor: color })),
  changeBottomColor: (color) => set((state) => ({ bottomColor: color })),
  changeFrameColor: (color) => set((state) => ({ frameColor: color })),
  changeFontColor: (color) => set((state) => ({ fontColor: color })),
}));

export { useStore };
