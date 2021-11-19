import "./vendor/materialize/sass/materialize.scss";

import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import Store from "./redux/store";
import { render } from "react-dom";

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
