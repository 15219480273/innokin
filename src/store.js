import create from "zustand";

const defaultFontColor = "#000";
const useStore = create((set) => ({
  activePanel: "design", // "design", "editing"
  content: "",
  bgImage: "",
  overlayImage: "",
  designUrl: "",
  contentStyles: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: defaultFontColor,
  },
  topColor: "#f17013",
  bottomColor: "#90adc6",
  fontColor: defaultFontColor,
  changeActivePanel: (panel) => set((state) => ({ activePanel: panel })),
  changeDesignUrl: (imageUrl) => set((state) => ({ designUrl: imageUrl })),
  changeBgImage: (imageUrl) => set((state) => ({ bgImage: imageUrl })),
  changeOverlayImage: (imageUrl) =>
    set((state) => ({ overlayImage: imageUrl })),
  changeContent: (content) => set((state) => ({ content })),
  changeContentStyles: (styles) => set((state) => ({ contentStyles: styles })),
  changeTopColor: (color) => set((state) => ({ topColor: color })),
  changeBottomColor: (color) => set((state) => ({ bottomColor: color })),
  changeFontColor: (color) => set((state) => ({ fontColor: color })),
}));

export { useStore };
