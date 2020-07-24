import React from "react";
import ReactDOM from "react-dom";

import FileUploader from "./FileUploader";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <FileUploader />
  </React.StrictMode>,
  rootElement
);
