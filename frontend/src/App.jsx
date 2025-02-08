import { useEffect } from "react";
import GetStarted from "./GetStarted";
import GuidancePage from "./Guidance";
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
              <Route path='/guidance' element={<GuidancePage/>}/>
              </Routes>
            </BrowserRouter>
          <Footer/>
        </LanguageProvider>
      </>
  )
}
