import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resource } from "./resource";

i18n.use(initReactI18next).init({
    resources: resource,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
