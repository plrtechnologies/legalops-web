import React from 'react';
import './App.css';
//import Header from './designcomponents/Header';
import Layout from './designcomponents/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
//import LoanProposerDetails from "./pagecomponents/LoanProposerDetails";
import Home from './pagecomponents/Home';
import About from './pagecomponents/About';
import Login from './pagecomponents/Login';
import CreateDocument from './pagecomponents/CreateDocument';
import PropertyBoundaries from './pagecomponents/PropertyBoundaries';
function App() {
  return (
    <div>
        <Router>
          <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Login" element={<Login/>} />
                {/* <Route path="/LoanProposerDetails" element={<LoanProposerDetails/>}/>  */}
                <Route path="/CreateDocument"  element={<CreateDocument/>} />
                <Route path='/PropertyBoundaries' element={<PropertyBoundaries/>}/>
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;