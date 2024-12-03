import React from 'react';
import './App.css';
//import Header from './designcomponents/Header';
import Layout from './designcomponents/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MostRecentDocuments from './pagecomponents/MostRecentDocuments';

 
//import LoanProposerDetails from "./pagecomponents/LoanProposerDetails";
import Home from './pagecomponents/Home';
import About from './pagecomponents/About';
import Login from './pagecomponents/Login';
import CreateDocument from './pagecomponents/CreateDocument';
import TitleHolderDetails from './pagecomponents/TitleHolderDetails';
function App() {
  return (
    <div>
      {/* <MostRecentDocuments /> */}
        <Router>
          <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Login" element={<Login/>} />
                {/* <Route path="/LoanProposerDetails" element={<LoanProposerDetails/>}/>  */}
                <Route path="/CreateDocument"  element={<CreateDocument/>} />
                <Route path="/TitleHolderDetails"  element={<TitleHolderDetails/>} />
                {/*  */}
                <Route path="/MostRecentDocuments" element={<MostRecentDocuments/>} />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
