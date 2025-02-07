import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-600 text-white p-4 text-center"
    >
      <p>&copy; {new Date().getFullYear()} Margadarshak. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
