import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 text-white py-6 text-center shadow-lg border-t border-gray-700"
    >
      <p className="text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Margadarshak. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
