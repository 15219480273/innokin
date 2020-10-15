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
  buttonColor: "#bfbfbf",
  bottomColor: "#0e737e",
  frameColor: "#7cc2c0",
  fontColor: defaultFontColor,
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
