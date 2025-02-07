import GetStarted from "./GetStarted";
import { LanguageProvider } from "./LanguageContext";
import UserInformation from "./UserInformation";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
      <>
        <LanguageProvider>
          <Navbar/>
            <BrowserRouter>
              <Routes>
              <Route path='/' element={<GetStarted/>}/>
              <Route path='/user-information' element={<UserInformation/>}/>
              </Routes>
            </BrowserRouter>
          <Footer/>
        </LanguageProvider>
      </>
  )
}
