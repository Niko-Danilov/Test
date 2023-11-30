import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App.tsx";
import { store } from "./store/store.ts";
import "./styles/fonts.scss";
import "./styles/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <div id="myModal"></div>
  </React.StrictMode>
);
