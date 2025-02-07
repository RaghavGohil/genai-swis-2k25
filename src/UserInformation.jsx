import React, { useState, useContext, useCallback } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageContext";
import Lottie from "lottie-react";
import animationData from "./animation_world.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Step = ({ question, options, onNext, onBack, onChange, value }) => {
  const { language } = useContext(LanguageContext);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-700 overflow-hidden">
      {/* Lottie Background Animation */}
      <Lottie 
        animationData={animationData} 
        loop={true} 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Particles Background */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
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

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gray-800 p-10 rounded-lg shadow-lg text-center border border-gray-700 z-10"
      >
        <h2 className="text-xl font-bold text-white mb-4">{question}</h2>
        {options ? (
          <select
            className="border p-3 rounded-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="" className="bg-gray-800 text-white">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option} className="bg-gray-800 text-white">
                {option}
              </option>
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
            <button
              className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition"
              onClick={onBack}
            >
              Back
            </button>
          )}
          <button
            className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition disabled:opacity-50"
            onClick={onNext}
            disabled={!value}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step;
