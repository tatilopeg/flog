import React from 'react'
import { Header } from './components/Header'
//import { Home } from './components/Home' <Route path="/" element={<Home />} />
//import { SearchPage } from './components/SearchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Login } from './components/login';
import {Registro} from './components/Registro';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/Registro" element={<Registro/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

