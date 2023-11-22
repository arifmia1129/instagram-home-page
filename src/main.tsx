import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
