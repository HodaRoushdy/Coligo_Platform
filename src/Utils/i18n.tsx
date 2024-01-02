import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "../globals/en/globals.json";

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
export default i18n;
