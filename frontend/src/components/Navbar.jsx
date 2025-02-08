import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 text-white px-6 py-4 fixed top-0 w-full shadow-lg z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.img
          src="./logo.png"
          alt="Logo"
          className="w-28 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />

        {/* Navigation Options */}
        <ul className="flex items-center space-x-6 notranslate">
          <li>
            <motion.select
              className="text-white bg-gray-800 border border-gray-600 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 cursor-pointer"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              whileHover={{ scale: 1.05 }}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="te">తెలుగు</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
              <option value="gu">ગુજરાતી</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
              <option value="or">ଓଡ଼ିଆ</option>
              <option value="as">অসমীয়া</option>
              <option value="ma">मैथिली</option>
              <option value="sa">संस्कृतम्</option>
              <option value="ne">नेपाली</option>
              <option value="si">සිංහල</option>
            </motion.select>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
