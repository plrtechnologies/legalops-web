// import React from 'react';
// import './App.css';
// //import Header from './designcomponents/Header';
// import Layout from './designcomponents/Layout';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MostRecentDocuments from './pagecomponents/MostRecentDocuments';
// //import LoanProposerDetails from "./pagecomponents/LoanProposerDetails";
// import Home from './pagecomponents/Home';
// import About from './pagecomponents/About';
// import Login from './pagecomponents/Login';
// import CreateDocument from './pagecomponents/CreateDocument';
// import SessionDocument from './pagecomponents/SessionDocument';
// import LoanProposerAndTitleHolder from './pagecomponents/LoanProposerAndTitleHolder';
// import TitleHolderDetails from './pagecomponents/TitleHolderDetails';
// import Signup from './pagecomponents/Signup';
// function App() {
//   return (
//     <div>
//       {/* <MostRecentDocuments /> */}
//         <Router>
//           <Layout>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/About" element={<About/>} />
//                 <Route path="/Login" element={<Login/>} />
//                 <Route path="/Signup" element={<Signup/>} />

//                 <Route path="/SessionDocument" element={<SessionDocument/>} />
//                 {/* <Route path="/LoanProposerDetails" element={<LoanProposerDetails/>}/>  */}
//                 <Route path="/CreateDocument"  element={<CreateDocument/>} />
//                 <Route path="/LoanProposerAndTitleHolder"  element={<LoanProposerAndTitleHolder />} />
//                 <Route path="/TitleHolderDetails"  element={<TitleHolderDetails/>} />
//                 <Route path="/MostRecentDocuments" element={<MostRecentDocuments/>} />
//             </Routes>
//           </Layout>
//         </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pagecomponents/Home";
import CreateDocument from "./pagecomponents/CreateDocument";
import Header from "./designcomponents/Header";
import Footer from "./designcomponents/Footer";
import About from "./pagecomponents/About";
import Login from "./pagecomponents/Login";
import Signup from "./pagecomponents/Signup";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Header/>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path="/About" element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            } />
            <Route path="/CreateDocument/*" element={
              <PrivateRoute>
                <CreateDocument />
              </PrivateRoute>
            } />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

 