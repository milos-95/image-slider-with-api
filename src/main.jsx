import React from "react";
import ReactDOM from "react-dom/client";
import ImageSlider from "./ImageSlider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={"10"} />
  </React.StrictMode>
);
