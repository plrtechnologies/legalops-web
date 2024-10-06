import React from 'react';
import './App.css';
//import Header from './designcomponents/Header';
import Layout from './designcomponents/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import LoanProposerDetails from "./pagecomponents/LoanProposerDetails";
import Home from './pagecomponents/Home';
import About from './pagecomponents/About';
import Login from './pagecomponents/Login';
function App() {
  return (
    <div>
        <Router>
          <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/LoanProposerDetails" element={<LoanProposerDetails/>}/>   
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
