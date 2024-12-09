import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import Register from "./Components/Register";
import Home from "./Components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* put a <Provider> around your <App>, and pass the store as a prop:*/

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
