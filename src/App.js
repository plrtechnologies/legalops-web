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

import React , {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pagecomponents/Home";
import CreateDocument from "./pagecomponents/CreateDocument";
import Header from "./designcomponents/Header";
import Footer from "./designcomponents/Footer";
import About from "./pagecomponents/About";
import Login from "./pagecomponents/Login";
import Signup from "./pagecomponents/Signup";
import SessionDocument from "./pagecomponents/SessionDocument";
//import LoanProposerDetails from "./pagecomponents/LoanProposerDetails";
function App() {

  useEffect(() => {
    console.log("✅ Base URL:", process.env.REACT_APP_API_BASE_URL);
    console.log("✅ Session Endpoint:", process.env.REACT_APP_API_SESSION);

    const fullApiUrl = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_SESSION}`;
    console.log("✅ Full API URL:", fullApiUrl);
  }, []);
  return (

    //testing of .env file 
    // useEffect(() => {
    //   alert(`Base URL: ${process.env.REACT_APP_API_BASE_URL}`);
    // }, []),
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/CreateDocument/*" element={<CreateDocument />} />
        <Route path="/SessionDocument" element={<SessionDocument />} />

         
      </Routes>

      <Footer/>
           
      
    </Router>
  );
}

export default App;

 