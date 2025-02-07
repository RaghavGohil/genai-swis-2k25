import React, { useState } from "react";
import { motion } from "framer-motion";

const Step = ({ question, options, onNext, onBack, onChange, value }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-screen p-8"
    >
      <div className="bg-white p-8 rounded-2xl w-96 text-center border border-black">
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
              Back
            </button>
          )}
          <button
            className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
            onClick={onNext}
            disabled={!value}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const MultiStepForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({});
  const updateData = (key, value) => setFormData({ ...formData, [key]: value });
  
  const steps = Object.keys(translations[language].questions);
  const [currentStep, setCurrentStep] = useState(0);
  
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  
  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="p-4 flex justify-center">
      </div>
      <Step
        question={translations[language].questions[steps[currentStep]]}
        value={formData[steps[currentStep]] || ""}
        onChange={(value) => updateData(steps[currentStep], value)}
        onNext={currentStep < steps.length - 1 ? nextStep : () => alert(translations[language].submit + "\n" + JSON.stringify(formData, null, 2))}
        onBack={currentStep > 0 ? prevStep : null}
      />
    </div>
  );
};


export default MultiStepForm;

