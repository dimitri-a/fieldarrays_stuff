import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import FormContainer from "./Forms/FormContainer";
import showResults from "./showResults";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./store";

import FormMain from './Forms/FieldArraysForm'
serviceWorker.unregister();

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>

      {/* <FormContainer onSubmit={showResults} /> */}

      <FormMain onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
