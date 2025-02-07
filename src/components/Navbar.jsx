import {motion} from 'framer-motion'
import { useState, useContext } from 'react';
import {LanguageContext} from '../LanguageContext';

const Navbar = () => {

  const {translations, language, setLanguage} = useContext(LanguageContext);
  
  const t = translations[language];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-600 text-white p-4 fixed top-0 w-full shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <img src='./logo.png' className="w-24"/>
        <ul className="flex space-x-6">
          <li>
            <select 
              className="text-black p-1 rounded"
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
