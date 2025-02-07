import GetStarted from "./GetStarted";
import { LanguageProvider } from "./LanguageContext";
import MultiStepForm from "./UserInformation";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

export default function App() {
  return (
      <>
        <LanguageProvider>
          <Navbar/>
          <GetStarted/>
          <Footer/>
        </LanguageProvider>
      </>
  )
}
