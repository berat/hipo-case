import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import AppRouter from "./router";
import reportWebVitals from "./reportWebVitals";
import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
