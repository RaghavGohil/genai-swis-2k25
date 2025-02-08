import { useEffect, useState, createContext } from 'react';
import { translations } from './translations.js';

export const LanguageContext = createContext();

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);
  return <div id="google_translate_element" className="hidden"></div>;
};

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('en');

    useEffect(()=>{
        const select = document.querySelector(".goog-te-combo");
        if (select) {
          select.value = language;
          select.dispatchEvent(new Event("change"));
        }
    },[language])

    return (
        <>
            <GoogleTranslate/>
            <LanguageContext.Provider value={{ setLanguage, language }}>
                {children}
            </LanguageContext.Provider>
        </>
    );
};
