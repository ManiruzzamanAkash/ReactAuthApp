import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";

// Styles [Global.css]
import "./assets/css/global.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
