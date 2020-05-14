import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from "./Redux/Reducers";
import reduxThunk from "redux-thunk";

const store = createStore(
  Reducers, // todos los reducers
  {}, //estado inicial
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
