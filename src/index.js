import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

import "./assets/css/theme.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";

import Layout from "./components/Leyaout/Layout";

// store
const store = createStore(rootReducer);

document.title = "CRM";
ReactDOM.render(
  <Provider store={store} >
    <Layout />
  </Provider>,
  document.getElementById("root")
);
