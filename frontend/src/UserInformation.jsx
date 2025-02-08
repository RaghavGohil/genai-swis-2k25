import React, { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageContext";
import Lottie from "lottie-react";
import animationData from "./animation_world.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Step = ({ question, options, value, onChange, onNext, onBack, isLastStep }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gray-800 p-10 rounded-lg shadow-lg text-center border border-gray-700 z-10 max-w-lg w-full"
    >
      <h2 className="text-xl font-bold text-white mb-4">{question}</h2>
      {options ? (
        <select
          className="border p-3 rounded-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
          className="border p-3 rounded-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <div className="flex justify-between mt-6">
        {onBack && (
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600" onClick={onBack}>Back</button>
        )}
        <button
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-400"
          onClick={onNext}
          disabled={!value}
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </motion.div>
  );
};

const MultiStepForm = () => {

  const particlesInit = useCallback(async (engine) => {
     await loadSlim(engine);
  }, []);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", age: "", education: "", interests: "" });
  const navigate = useNavigate();
  const steps = [
    { key: "name", question: "What's your name?", type: "text" },
    { key: "age", question: "How old are you?", type: "text" },
    { key: "education", question: "What is your highest education level?", type: "select", options: ["High School", "Bachelor's", "Master's", "PhD"] },
    { key: "interests", question: "What are your main interests?", type: "text" }
  ];
  
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/guidance", { state: formData });
    }
  };
  
  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-slate-700 overflow-hidden">
      <Lottie animationData={animationData} loop className="absolute inset-0 w-full h-full object-cover opacity-50" />
      {/* Ensure particles are constrained to h-screen */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false }, // Prevents fullscreen rendering
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              shape: { type: "circle" },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 0.3 },
              color: { value: "#aaaaff" },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
            },
            background: { color: "transparent" },
          }}
          className="h-full"
        />
      </div>
      <Step
        question={steps[step].question}
        options={steps[step].options}
        value={formData[steps[step].key]}
        onChange={(value) => setFormData({ ...formData, [steps[step].key]: value })}
        onNext={handleNext}
        onBack={step > 0 ? handleBack : null}
        isLastStep={step === steps.length - 1}
      />
    </div>
  );
};

export default MultiStepForm;
