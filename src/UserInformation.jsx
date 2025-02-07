import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import {LanguageContext} from './LanguageContext';


const Step = ({ question, options, onNext, onBack, onChange, value }) => {

  const {language} = useContext(LanguageContext)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-100 flex flex-col items-center justify-center h-screen p-8"
    >
      <div className="bg-white p-8 shadow-md rounded-2xl w-96 text-center ">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{question}</h2>
        {options ? (
          <select
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
        <div className="flex justify-between mt-6">
          {onBack && (
            <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400 transition" onClick={onBack}>
              back
            </button>
          )}
          <button
            className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
            onClick={onNext}
            disabled={!value}
          >
            next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const UserInformation = () => {

  const {language} = useContext(LanguageContext)
  const [formData, setFormData] = useState({});
  const updateData = (key, value) => setFormData({ ...formData, [key]: value });
  
  const [currentStep, setCurrentStep] = useState(0);
  
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const steps = [] 
  
  return (
    <div>
      <Step
        value={formData[steps[currentStep]] || ""}
        onChange={(value) => updateData(steps[currentStep], value)}
        onNext={currentStep < steps.length - 1 ? nextStep : () => alert('monke')}
        onBack={currentStep > 0 ? prevStep : null}
      />
    </div>
  );
};


export default UserInformation;

