import axios from "axios";
import Cookies from "js-cookie";
import qs from "qs";

const pixie = new Pixie({
  crossOrigin: true,
  baseUrl: "http://localhost:8000/static/pixie",
  ui: {
    toolbar: {
      // replaceDefaultLeftItems: true,
      compactModeOnly: true,
    },
    visible: false,
    mode: "overlay",
    compact: true,
    showExportPanel: false,
    allowEditorClose: false,
    nav: {
      position: "top",
      replaceDefault: true,
      items: [
        // { name: "filter", icon: "filter-custom", action: "filter" },
        // { type: "separator" },
        // { name: "resize", icon: "resize-custom", action: "resize" },
        { name: "crop", icon: "crop-custom", action: "crop" },
        // { name: "transform", icon: "transform-custom", action: "transform" },
        // { type: "separator" },
        { name: "draw", icon: "pencil-custom", action: "draw" },
        { type: "separator" },
        { name: "text", icon: "text-box-custom", action: "text" },
        { type: "separator" },
        { name: "shapes", icon: "polygon-custom", action: "shapes" },
        { type: "separator" },
        { name: "stickers", icon: "sticker-custom", action: "stickers" },
        { type: "separator" },
        // { name: "frame", icon: "frame-custom", action: "frame" },
        // { type: "separator" },
        // { name: "corners", icon: "rounded-corner-custom", action: "corners" },
        { name: "background", icon: "background-custom", action: "background" },
        // { name: "merge", icon: "merge-custom", action: "merge" },
      ],
    },
  },

  // saveUrl: "",
  onSave: async (data, name) => {
    console.log("data", data);
    console.log("name", name);
    const response = await axios({
      url: "/design/create-test",
      method: "post",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      data: qs.stringify({ design_image: data }),
    });

    // If the design was created
    if (response.status === 201) {
      const { designId } = await response.data;
      location.href = `/design/${designId}/finish`;
      // location.href = "/design/list";
    } else {
      // TODO: Show a warning
    }
  },
  onLoad: function () {
    console.log("Pixie is ready");
  },
});

export { pixie };
