import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { languageChange } from "../../reduxToolkit/languageSlice/";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(languageChange(lng));
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        disabled={currentLanguage === "ru"}
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
