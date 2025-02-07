import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageContext";
import {useNavigate} from 'react-router-dom'

const GetStarted = () => {

    const {translations, language} = useContext(LanguageContext)
    const navigate = useNavigate()

    const onStart = ()=>{
        navigate('/user-information')
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md text-center"
      >
        <h1 className="text-3xl font-bold mb-4">{translations[language].welcome}</h1>
        <p className="text-gray-600 mb-6">{translations[language].tagline}</p>
        <button onClick={onStart} className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            {translations[language].getStarted} 
        </button>
      </motion.div>
    </div>
  );
};

export default GetStarted;