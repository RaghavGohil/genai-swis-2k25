import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Lottie from "lottie-react";
import animationData from "./animation_world.json";
import ReactMarkdown from "react-markdown"; // Markdown support

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Adjust based on your Flask server

const GuidancePage = () => {
  const location = useLocation();
  const userData = location.state || {};
  const [careerData, setCareerData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Career Recommendations
  const fetchCareerRecommendations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/career-recommendations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setCareerData(data.career_guidance);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load career guidance. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      fetchCareerRecommendations();
    } else {
      setError("No user data provided.");
      setLoading(false);
    }
  }, [userData]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-700 overflow-hidden p-6">
      {/* Lottie Background Animation */}
      <Lottie animationData={animationData} loop={true} className="absolute inset-0 w-full h-full object-cover opacity-50" />
      
      {/* Particle Background */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              shape: { type: "circle" },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 0.4 },
              color: { value: "#00aaff" },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
            },
            background: { color: "transparent" },
          }}
          className="h-full"
        />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg text-white relative z-10 max-w-3xl w-full border mt-24 border-gray-700"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Career Guidance</h1>

        {/* Error Handling */}
        {error ? (
          <div className="text-lg text-red-400 text-center">{error}</div>
        ) : loading ? (
          <div className="text-lg text-blue-400 text-center animate-pulse">Generating career guidance...</div>
        ) : (
          <ReactMarkdown className="prose markdown prose-invert">{careerData}</ReactMarkdown>
        )}
      </motion.div>
    </div>
  );
};

export default GuidancePage;
