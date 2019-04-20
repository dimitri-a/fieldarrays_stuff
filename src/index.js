import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FormContainer from "./Forms/FormContainer";
import showResults from "./showResults";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./store";
serviceWorker.unregister();

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Selecting Form Values Example</h2>
      <FormContainer onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
