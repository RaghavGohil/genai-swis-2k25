import { useState, createContext } from 'react';
import { translations } from './translations.js';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ translations, setLanguage, language }}>
            {children}
        </LanguageContext.Provider>
    );
};
