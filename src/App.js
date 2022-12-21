import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { Button } from '@mui/material';
import Home from "./components/home/Home";
import Adoptpet from './components/Adoptpet';
import Givepet from './components/Givepet';
import Petswehave from './components/Petswehave';
import Contact from './components/contact';
import { DBConfig } from "./DBConfig";
import { initDB } from "react-indexed-db";

initDB(DBConfig);

function App() {

  useEffect(() => {
    document.title = "Animal Shelter";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Adoptpet" element={<Adoptpet />} />
          <Route path="/Givepet" element={<Givepet />} />
          <Route path="/Petswehave" element={<Petswehave />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
