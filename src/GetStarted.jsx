import React, { useContext, useCallback } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageContext";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import animationData from "./animation_world.json"; // Background Lottie animation

const GetStarted = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/user-information");
  };

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

      {/* Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-10 rounded-lg shadow-lg text-center border border-gray-700 relative z-10"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Margadarshak AI Saathi</h1>
        <p className="text-gray-400 mb-6">We provide the right career path to the needy 😀</p>
        <p className="text-gray-400 mb-6">After a questionnaire, we'll provide a detailed result.</p>
        <button 
          onClick={onStart} 
          className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition"
        >
          Click to get started 
        </button>
      </motion.div>
    </div>
  );
};

export default GetStarted;
