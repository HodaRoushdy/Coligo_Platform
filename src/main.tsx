import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import i18next from 'i18next'
import global_en from "../src/globals/en/globals.json";
// import I18nextProvider from "i18next"
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "./App/store.ts";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: global_en },
  },
  lng: "en",

  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
