import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "App";

import { SoftUIControllerProvider } from "context";

ReactDOM.render(
  <HashRouter>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  </HashRouter>,
  document.getElementById("root")
);
