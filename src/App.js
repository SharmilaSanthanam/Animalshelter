import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { Button } from '@mui/material';
// import Header from "./components/home/Header";
// import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import Adoptpet from './components/Adoptpet';
import Givepet from './components/Givepet';
import Petswehave from './components/Petswehave';
// import { AppBar } from '@mui/material';
import Contact from './components/contact';



function App() {

  useEffect(()=>{
    document.title = "Animal Shelter - Home";
  }, []);

  return (
    <div className="App">
     <BrowserRouter>
     {/* <Header /> */}
     <Routes>
        
       
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Adoptpet" element={<Adoptpet />} />
        <Route path="/Givepet" element={<Givepet />} />
        <Route path="/Petswehave" element={<Petswehave />} />
            
       
        </Routes>
        {/* <Footer /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
