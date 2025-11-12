// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";
// //import { setToken } from "../auth";//
// //import { useNavigate } from 'react-router-dom'; // Import useNavigate
// //import React, { useState } from "react";
// //import { LoanProposerDetails_api, USER_DETAILS } from '../apiUrls';

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);
//   //const navigate = useNavigate(); // Initialize the navigate function

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       // Step 1: Get session ID from sessionStorage
//       //const sessionID = sessionStorage.getItem("sessionID");
//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");
//       // Step 2: Merge form values with session ID
//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId, // backend expect snake case
//         // user_id: userId,
//       };

//       // Step 3: Get API URL from .env
//       //const BASE_URL = process.env.REACT_APP_API_BASE_URL;

//       // after testing we can use this real api calls
//       // const SESSION_ENDPOINT = process.env.REACT_APP_API_SESSION;
//       // const apiUrl = `${BASE_URL}${SESSION_ENDPOINT}`;
//       const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//       const SESSION_ENDPOINT = process.env.REACT_APP_API_SESSION;
//       //  const apiUrl = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_SESSION}`;
//       //  console.log("API URL:", apiUrl); // Optional: to debug the final URL
//       console.log("Payload:", dataToSend);

//       // Step 4: Make API call
//       setLoading(true);
//       const apiUrl = LoanProposerDetails_api;
//       // Get sessiontoken from cookies
//       const token = getToken();

//       console.log("About to call fetch"); 

//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });
         
//          console.log("Status:", response.status);        // e.g. 200
//          console.log("Status text:", response.statusText); // e.g. "OK


//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // Go to next page
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//       //};----------------------
//     },
//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) {
//         errors.loanProposerName = "*required*";
//       }

//       if (!values.loanProposerRelationType) {
//         errors.loanProposerRelationType = "*required*";
//       }
//       if (!values.loanProposerRelativeName) {
//         errors.loanProposerRelativeName = "*required*";
//       }
//       if (!values.loanProposerResidenceType) {
//         errors.loanProposerResidenceType = "*required*";
//       }
//       if (!values.loanProposerDoorNumber) {
//         errors.loanProposerDoorNumber = "*required*";
//       }
//       if (!values.loanProposerStreetName) {
//         errors.loanProposerStreetName = "*required*";
//       }

//       //    if (values.loanProposerStreetName && values.loanProposerStreetName.trim() === "") {
//       //       errors.loanProposerStreetName = "*required*";
//       //   }
//       if (!values.loanProposerCityName) {
//         errors.loanProposerCityName = "*required*";
//       }
//       if (!values.loanProposerMandalName) {
//         errors.loanProposerMandalName = "*required*";
//       }
//       if (!values.loanProposerDistrictName) {
//         errors.loanProposerDistrictName = "*required*";
//       }
//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }
//       return errors;
//     },
//   });

//   // Save form data to sessionStorage on change
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   //Retrieve form data from sessionStorage on component mount
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("loanProposerData"));

//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       //fetch(`https://687129ef7ca4d06b34b991a7.mockapi.io/sessions/${sessionId}`)
//       //  real api written  //
//       //fetch(`http://localhost:3000/api/session/create-session/${sessionId}`)
//       fetch(`http://localhost:3000/api/session/create-session`)
//         .then((res) => res.json())
//         .then((data) => {
//           // Prefill form values from backend
//           Object.keys(data).forEach((key) => {
//             if (formik.values.hasOwnProperty(key)) {
//               formik.setFieldValue(key, data[key] || "");
//             }
//           });
//         })
//         .catch((err) => {
//           console.error("Failed to fetch previous session data", err);
//         });
//     }
//   }, []);

//   // this function for navigate to home page when click the back button

//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>

//       <div
//         style={{
//           minheight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12 " style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//               </div>
//               <div className="col-12  ">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* this shows an error message  */}
//                 {/* {formik.errors.loanProposerName?<div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>:null} */}
//                 {/* code for adustment    */}
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposeRelationType">
//             <div className="d-flex  flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12  " style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type{" "}
//                 </Form.Label>
//               </div>
//               <div className="col-12  ">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                   //required
//                 >
//                   <option value="">Select </option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O </option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposeRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div className="col-12  ">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                   //required
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   as="select"
//                   aria-label="Default select example"
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                   //required
//                 >
//                   <option value="">Select </option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {/* {formik.errors.loanProposerResidenceType ? <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>:null} */}

//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.loanProposerDoorNumber  ? <div className="text-danger fw-bold">{formik.errors.loanProposerDoorNumber}</div>:null} */}
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposeStreetName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.loanProposerStreetName?<div className="text-danger fw-bold">{formik.errors.loanProposerStreetName}</div>:null}*/}

//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposeCityName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.loanProposerCityName ? <div className="text-danger fw-bold">{formik.errors.loanProposerCityName}</div>:null} */}

//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.loanProposerMandalName  ? <div className="text-danger fw-bold">{formik.errors.loanProposerMandalName}</div>:null} */}

//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposeDistrictName">
//             <div className="d-flex  flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.loanProposerDistrictName  ? <div className="text-danger fw-bold">{formik.errors.loanProposerDistrictName}</div>:null} */}

//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <Form.Group controlId="LoanProposePincode">
//             <div className="d-flex  flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Pincode</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.loanProposerPincode  ? <div className="text-danger fw-bold">{formik.errors.loanProposerPincode}</div>:null} */}

//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           <div className="text-center ">
//             {/* here is back button  */}

//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               // disabled={loading}
//             >
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default LoanProposerDetails;

//above running code
//--------------------------------------------------------

// import { useFormik } from 'formik';
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/esm/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const LoanProposerDetails = ({ onNext, sessionId }) => {
//    const [loading, setLoading] = useState(false);
//    const navigate = useNavigate(); // Initialize the navigate function

//     // Clear session storage when the session ID changes
//     useEffect(() => {
//       sessionStorage.clear();
//   }, [sessionId]);
//     // Fetch stored data from session storage
//     const storedFormData = sessionStorage.getItem('loanProposerData');

//     const initialValues = storedFormData
//         ? JSON.parse(storedFormData) // Parse stored JSON data
//         : {
//               loanProposerName: "",
//               loanProposerRelationType: "",
//               loanProposerRelativeName: "",
//               loanProposerResidenceType: "",
//               loanProposerDoorNumber: "",
//               loanProposerStreetName: "",
//               loanProposerCityName: "",
//               loanProposerMandalName: "",
//               loanProposerDistrictName: "",
//               loanProposerPincode: ""
//           };

//     const formik = useFormik({
//         initialValues,
//         onSubmit: async (values) => {
//             console.log('Form Submitted:', values);
//             onNext();
//         },
//         validate: (values) => {
//             let errors = {};
//             if (!values.loanProposerName) {
//                 errors.loanProposerName = "*required*";
//             }
//             // Add your other validations here...

//             if (!values.loanProposerPincode) {
//                 errors.loanProposerPincode = "*required*";
//             } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//                 errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//             }
//             return errors;
//         }
//     });

//     // Save form data to session storage on change
//     useEffect(() => {
//         sessionStorage.setItem('loanProposerData', JSON.stringify(formik.values));
//     }, [formik.values]);
//  // Clear session storage when the session ID changes

//     return (
//         <div>
//             <h3 className="text-center"> Loan Proposer Details </h3>

//             <div
//                 style={{
//                     minHeight: "100vh",
//                     paddingLeft: "50px",
//                     paddingTop: "10px",
//                     overflowX: "hidden"
//                 }}
//             >
//                 <Form onSubmit={formik.handleSubmit}>
//                     {/* Example Field */}
//                     <Form.Group controlId="LoanProposeName">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//                             <div className="col-12 " style={{ width: "420px" }}>
//                                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//                             </div>
//                             <div className="col-12  ">
//                                 <Form.Control
//                                     type="text"
//                                     name="loanProposerName"
//                                     value={formik.values.loanProposerName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{
//                                         width: "300px",
//                                         height: "40px",
//                                         borderColor: "black",
//                                         fontSize: "20px"
//                                     }}
//                                 />
//                                 {formik.touched.loanProposerName && formik.errors.loanProposerName && (
//                                     <div className="text-danger fw-bold">
//                                         {formik.errors.loanProposerName}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId="LoanProposerRelationType">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer Relation Type</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerRelationType"
//                 value={formik.values.loanProposerRelationType}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerRelationType && formik.errors.loanProposerRelationType && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerRelationType}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerRelativeName">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer Relative Name</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerRelativeName"
//                 value={formik.values.loanProposerRelativeName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerRelativeName && formik.errors.loanProposerRelativeName && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerRelativeName}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerResidenceType">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer Residence Type</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerResidenceType"
//                 value={formik.values.loanProposerResidenceType}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerResidenceType && formik.errors.loanProposerResidenceType && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerResidenceType}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerDoorNumber">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer Door Number</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerDoorNumber"
//                 value={formik.values.loanProposerDoorNumber}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerDoorNumber && formik.errors.loanProposerDoorNumber && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerDoorNumber}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerStreetName">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer Street Name</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerStreetName"
//                 value={formik.values.loanProposerStreetName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerStreetName && formik.errors.loanProposerStreetName && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerStreetName}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerCityName">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer City Name</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerCityName"
//                 value={formik.values.loanProposerCityName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerCityName && formik.errors.loanProposerCityName && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerCityName}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerMandalName">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer Mandal Name</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerMandalName"
//                 value={formik.values.loanProposerMandalName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerMandalName && formik.errors.loanProposerMandalName && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerMandalName}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

// <Form.Group controlId="LoanProposerDistrictName">
//     <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//         <div className="col-12" style={{ width: "420px" }}>
//             <Form.Label className="fs-3">Loan Proposer District Name</Form.Label>
//         </div>
//         <div className="col-12">
//             <Form.Control
//                 type="text"
//                 name="loanProposerDistrictName"
//                 value={formik.values.loanProposerDistrictName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                 }}
//             />
//             {formik.touched.loanProposerDistrictName && formik.errors.loanProposerDistrictName && (
//                 <div className="text-danger fw-bold">
//                     {formik.errors.loanProposerDistrictName}
//                 </div>
//             )}
//         </div>
//     </div>
// </Form.Group>

//                     {/* Add more fields here */}
//                     <div className="text-center ">
//                         <Button
//                             type="submit"
//                             variant="primary"
//                             className="mt-3"
//                             disabled={loading}
//                         >
//                             {loading ? "Loading..." : "Next"}
//                         </Button>
//                     </div>
//                 </Form>
//             </div>
//         </div>
//     );
// };
//  export default LoanProposerDetails;
//---------------------------------------------------

// below modified code

// import { useFormik } from 'formik';
// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';
// import Form from 'react-bootstrap/Form';

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType) errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName) errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType) errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber) errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName) errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName) errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName) errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName) errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }
//       return errors;
//     },

//     onSubmit: async (values) => {
//       const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//       const SESSION_ENDPOINT = process.env.REACT_APP_API_SESSION;

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = localStorage.getItem("user_id") || "123"; // default user_id
//       const token = localStorage.getItem("authToken"); // JWT token from login

//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//       };

//       setLoading(true);
//       try {
//         const response = await fetch(`${BASE_URL}${SESSION_ENDPOINT}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // ✅ send JWT
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // Go to next page
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // Save form data to sessionStorage on change
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Prefill form data from backend using JWT
//   useEffect(() => {
//     const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//     const SESSION_ENDPOINT = process.env.REACT_APP_API_SESSION;
//     const token = localStorage.getItem("authToken");
//     const sessionId = sessionStorage.getItem("sessionId");

//     if (sessionId && token) {
//       fetch(`${BASE_URL}${SESSION_ENDPOINT}`, {
//         method: "POST",
//         headers: {

//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       })
//         .then(res => res.json())
//         .then(data => {
//           Object.keys(data).forEach((key) => {
//             if (formik.values.hasOwnProperty(key)) {
//               formik.setFieldValue(key, data[key] || "");
//             }
//           });
//         })
//         .catch(err => console.error("Failed to fetch previous session data:", err));
//     }
//   }, []);

//   return (
//     <div>
//       <h3 className='text-center'>Loan Proposer Details</h3>
//       <div style={{ minHeight: "100vh", paddingLeft: "50px", paddingTop: "10px", overflowX: "hidden" }}>
//         <Form onSubmit={formik.handleSubmit}>
//           {/* Example field */}
//           <Form.Group controlId="LoanProposeName">
//             <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center'>
//               <div className='col-12 ' style={{ width:"420px"}}>
//                 <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
//               </div>
//               <div className='col-12'>
//                 <Form.Control
//                   type='text'
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width:"300px", height: "40px", borderColor: "black", fontSize:"20px" }}
//                 />
//                 {formik.touched.loanProposerName && formik.errors.loanProposerName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Repeat other fields like your original code */}

//           <div className="text-center">
//             <Button type="submit" variant="primary" className="mt-3" disabled={loading}>
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;




// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");

//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//       };

//       const apiUrl = LoanProposerDetails_api;
//       const token = getToken();

//       setLoading(true);

//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         console.log("Status:", response.status);
//         console.log("Status text:", response.statusText);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // Navigate to next page
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType) errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName) errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType) errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber) errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName) errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName) errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName) errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName) errors.loanProposerDistrictName = "*required*";

//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }

//       return errors;
//     },
//   });

//   // Auto-save form data to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Prefill form from sessionStorage on mount
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("loanProposerData"));
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   // Prefill form from backend session data
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/create-session`)    
//         .then((res) => res.json())
//         .then((data) => {
//           Object.keys(data).forEach((key) => {
//             if (formik.values.hasOwnProperty(key)) {
//               formik.setFieldValue(key, data[key] || "");
//             }
//           });
//         })
//         .catch((err) => {
//           console.error("Failed to fetch previous session data", err);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>

//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* Loan Proposer Name */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerName && formik.errors.loanProposerName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relation Type */}
//           <Form.Group controlId="LoanProposeRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relation Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType && formik.errors.loanProposerRelationType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelationType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relative Name */}
//           <Form.Group controlId="LoanProposeRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relative Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerRelativeName && formik.errors.loanProposerRelativeName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelativeName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Residence Type */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Residence Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType && formik.errors.loanProposerResidenceType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Remaining fields (Door Number, Street, City, Mandal, District, Pincode) */}
//           {["DoorNumber","StreetName","CityName","MandalName","DistrictName","Pincode"].map((field) => (
//             <Form.Group key={field} controlId={`LoanPropose${field}`}>
//               <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//                 <div className="col-12" style={{ width: "420px" }}>
//                   <Form.Label className="fs-3">{`Loan Proposer ${field.replace(/([A-Z])/g, ' $1')}`}</Form.Label>
//                 </div>
//                 <div className="col-12">
//                   <Form.Control
//                     type="text"
//                     name={`loanProposer${field}`}
//                     value={formik.values[`loanProposer${field}`]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                   />
//                   {formik.touched[`loanProposer${field}`] && formik.errors[`loanProposer${field}`] && (
//                     <div className="text-danger fw-bold">{formik.errors[`loanProposer${field}`]}</div>
//                   )}
//                 </div>
//               </div>
//             </Form.Group>
//           ))}

//           {/* Submit Button */}
//           <div className="text-center">
//             <Button type="submit" variant="primary" className="mt-3">
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;


// above code is working code perfectly
 

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionid");
//   const proposerNameFromUrl = searchParams.get("name");

//   // ✅ Save sessionId and proposer name in sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) sessionStorage.setItem("sessionId", sessionIdFromUrl);
//     if (proposerNameFromUrl) sessionStorage.setItem("loanProposerNameFromSession", proposerNameFromUrl);
//   }, [sessionIdFromUrl, proposerNameFromUrl]);

//   const sessionId = sessionIdFromUrl || sessionStorage.getItem("sessionId");
//   const storageKey = `loanProposerData_${sessionId}`; // unique key per session

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem(storageKey)) || {
//       loanProposerName: proposerNameFromUrl || sessionStorage.getItem("loanProposerNameFromSession") || "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       const userId = sessionStorage.getItem("user_id");
//       const token = getToken();

//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//       };

//       setLoading(true);
//       try {
//         const response = await fetch(LoanProposerDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext();
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType) errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName) errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType) errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber) errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName) errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName) errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName) errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName) errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }
//       return errors;
//     },
//   });

//   // ✅ Auto-save to sessionStorage per session
//   useEffect(() => {
//     if (sessionId) {
//       sessionStorage.setItem(storageKey, JSON.stringify(formik.values));
//     }
//   }, [formik.values, sessionId]);

//   // ✅ Load saved session data from backend on mount
//   useEffect(() => {
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/${sessionId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data && typeof data === "object") {
//             Object.keys(formik.values).forEach((key) => {
//               if (data[key] !== undefined) {
//                 formik.setFieldValue(key, data[key]);
//               }
//             });
//           }
//         })
//         .catch((err) => console.error("Failed to fetch previous session data", err));
//     }
//   }, [sessionId]);

//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>
//       <div style={{ minHeight: "100vh", paddingLeft: "50px", paddingTop: "10px", overflowX: "hidden" }}>
//         <Form onSubmit={formik.handleSubmit}>
//           {/* Loan Proposer Name */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerName && formik.errors.loanProposerName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relation Type */}
//           <Form.Group controlId="LoanProposeRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relation Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType && formik.errors.loanProposerRelationType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelationType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relative Name */}
//           <Form.Group controlId="LoanProposeRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relative Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerRelativeName && formik.errors.loanProposerRelativeName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelativeName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Residence Type */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Residence Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType && formik.errors.loanProposerResidenceType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Remaining fields */}
//           {["DoorNumber", "StreetName", "CityName", "MandalName", "DistrictName", "Pincode"].map((field) => (
//             <Form.Group key={field} controlId={`LoanPropose${field}`}>
//               <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//                 <div className="col-12" style={{ width: "420px" }}>
//                   <Form.Label className="fs-3">{`Loan Proposer ${field.replace(/([A-Z])/g, " $1")}`}</Form.Label>
//                 </div>
//                 <div className="col-12">
//                   <Form.Control
//                     type="text"
//                     name={`loanProposer${field}`}
//                     value={formik.values[`loanProposer${field}`]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                   />
//                   {formik.touched[`loanProposer${field}`] && formik.errors[`loanProposer${field}`] && (
//                     <div className="text-danger fw-bold">{formik.errors[`loanProposer${field}`]}</div>
//                   )}
//                 </div>
//               </div>
//             </Form.Group>
//           ))}

//           {/* Submit */}
//           <div className="text-center">
//             <Button type="submit" variant="primary" className="mt-3">
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionid"); // from session doc link

//   // Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");

//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//       };

//       const apiUrl = LoanProposerDetails_api;
//       const token = getToken();

//       setLoading(true);

//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // Navigate to next page
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType) errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName) errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType) errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber) errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName) errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName) errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName) errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName) errors.loanProposerDistrictName = "*required*";

//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }

//       return errors;
//     },
//   });

//   // Auto-save form data to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Prefill form from backend session data using sessionId
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/fetch-session/${sessionId}`) // backend should return full session data
//         .then((res) => res.json())
//         .then((data) => {
//           if (data && Object.keys(data).length > 0) {
//             Object.keys(data).forEach((key) => {
//               if (formik.values.hasOwnProperty(key)) {
//                 formik.setFieldValue(key, data[key] || "");
//               }
//             });
//           }
//         })
//         .catch((err) => {
//           console.error("Failed to fetch session data", err);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>

//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* Loan Proposer Name */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerName && formik.errors.loanProposerName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relation Type */}
//           <Form.Group controlId="LoanProposeRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relation Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType && formik.errors.loanProposerRelationType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelationType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relative Name */}
//           <Form.Group controlId="LoanProposeRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relative Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerRelativeName && formik.errors.loanProposerRelativeName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelativeName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Residence Type */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Residence Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType && formik.errors.loanProposerResidenceType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Remaining fields */}
//           {["DoorNumber","StreetName","CityName","MandalName","DistrictName","Pincode"].map((field) => (
//             <Form.Group key={field} controlId={`LoanPropose${field}`}>
//               <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//                 <div className="col-12" style={{ width: "420px" }}>
//                   <Form.Label className="fs-3">{`Loan Proposer ${field.replace(/([A-Z])/g, ' $1')}`}</Form.Label>
//                 </div>
//                 <div className="col-12">
//                   <Form.Control
//                     type="text"
//                     name={`loanProposer${field}`}
//                     value={formik.values[`loanProposer${field}`]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                   />
//                   {formik.touched[`loanProposer${field}`] && formik.errors[`loanProposer${field}`] && (
//                     <div className="text-danger fw-bold">{formik.errors[`loanProposer${field}`]}</div>
//                   )}
//                 </div>
//               </div>
//             </Form.Group>
//           ))}

//           {/* Submit Button */}
//           <div className="text-center">
//             <Button type="submit" variant="primary" className="mt-3">
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;





// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionid"); // from session doc link

//   // ✅ Store sessionId in sessionStorage and clear old form data when new session opens
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       sessionStorage.removeItem("loanProposerData"); // clear stale cache
//       console.log("Session ID set and old loan proposer data cleared:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType) errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName) errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType) errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber) errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName) errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName) errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName) errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName) errors.loanProposerDistrictName = "*required*";

//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }

//       return errors;
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");

//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//       };

//       const apiUrl = LoanProposerDetails_api;
//       const token = getToken();

//       setLoading(true);

//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // navigate to next page
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // ✅ Fetch and populate data from backend for the correct session
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/fetch-session/${sessionId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data && Object.keys(data).length > 0) {
//             formik.resetForm({
//               values: {
//                 loanProposerName: data.loanProposerName || "",
//                 loanProposerRelationType: data.loanProposerRelationType || "",
//                 loanProposerRelativeName: data.loanProposerRelativeName || "",
//                 loanProposerResidenceType: data.loanProposerResidenceType || "",
//                 loanProposerDoorNumber: data.loanProposerDoorNumber || "",
//                 loanProposerStreetName: data.loanProposerStreetName || "",
//                 loanProposerCityName: data.loanProposerCityName || "",
//                 loanProposerMandalName: data.loanProposerMandalName || "",
//                 loanProposerDistrictName: data.loanProposerDistrictName || "",
//                 loanProposerPincode: data.loanProposerPincode || "",
//               },
//             });
//             console.log("Fetched and applied data for session:", sessionId);
//           }
//         })
//         .catch((err) => console.error("Failed to fetch session data", err));
//     }
//   }, []);

//   // ✅ Auto-save form data for same session (for refresh safety)
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//     }
//   }, [formik.values]);

//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>

//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* Loan Proposer Name */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerName && formik.errors.loanProposerName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relation Type */}
//           <Form.Group controlId="LoanProposeRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relation Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType && formik.errors.loanProposerRelationType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelationType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Relative Name */}
//           <Form.Group controlId="LoanProposeRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Relative Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 />
//                 {formik.touched.loanProposerRelativeName && formik.errors.loanProposerRelativeName && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerRelativeName}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Loan Proposer Residence Type */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Residence Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType && formik.errors.loanProposerResidenceType && (
//                   <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Remaining fields */}
//           {["DoorNumber","StreetName","CityName","MandalName","DistrictName","Pincode"].map((field) => (
//             <Form.Group key={field} controlId={`LoanPropose${field}`}>
//               <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//                 <div className="col-12" style={{ width: "420px" }}>
//                   <Form.Label className="fs-3">{`Loan Proposer ${field.replace(/([A-Z])/g, ' $1')}`}</Form.Label>
//                 </div>
//                 <div className="col-12">
//                   <Form.Control
//                     type="text"
//                     name={`loanProposer${field}`}
//                     value={formik.values[`loanProposer${field}`]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
//                   />
//                   {formik.touched[`loanProposer${field}`] && formik.errors[`loanProposer${field}`] && (
//                     <div className="text-danger fw-bold">{formik.errors[`loanProposer${field}`]}</div>
//                   )}
//                 </div>
//               </div>
//             </Form.Group>
//           ))}

//           {/* Submit Button */}
//           <div className="text-center">
//             <Button type="submit" variant="primary" className="mt-3">
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;





// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // ✅ Store sessionId in sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID saved:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   // ✅ Initialize formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName)
//         errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType)
//         errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName)
//         errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType)
//         errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber)
//         errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName)
//         errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName)
//         errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName)
//         errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName)
//         errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode)
//         errors.loanProposerPincode = "*required*";
//       else if (!/^\d{6}$/.test(values.loanProposerPincode))
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       return errors;
//     },

//     onSubmit: async (values) => {
//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");

//       // ✅ Save customer name globally for later pages
//       if (values.loanProposerName) {
//         sessionStorage.setItem("loanProposerName", values.loanProposerName);
//       }

//       const payload = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//       };

//       console.log("Submitting LoanProposer payload:", payload);
//       setLoading(true);

//       try {
//         const response = await fetch(LoanProposerDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${getToken()}`,
//           },
//           body: JSON.stringify(payload),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API success:", data);
//           onNext(); // ✅ Go to next page
//         } else {
//           console.error("API error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//         alert("Network error. Check your internet connection.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // ✅ Persist data to sessionStorage whenever form changes
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ Load data on mount (if user revisits)
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("loanProposerData"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   // ✅ Prefill API data if session exists (for resume)
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/create-session`)
//         .then((res) => res.json())
//         .then((data) => {
//           Object.keys(data).forEach((key) => {
//             if (formik.values.hasOwnProperty(key)) {
//               formik.setFieldValue(key, data[key] || "");
//             }
//           });
//         })
//         .catch((err) =>
//           console.error("Failed to fetch existing session data:", err)
//         );
//     }
//   }, []);

//   return (
//     <div>
//       <h3 className="text-center fw-bold mt-3 mb-4">
//         Loan Proposer Details
//       </h3>
//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* 1. Name */}
//           <Form.Group controlId="loanProposerName">
//             <div className="d-flex flex-column flex-md-row align-items-center mb-3">
//               <div className="col-12 col-md-4">
//                 <Form.Label className="fs-5">Loan Proposer Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-8">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "18px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* 2. Relation Type */}
//           <Form.Group controlId="loanProposerRelationType">
//             <div className="d-flex flex-column flex-md-row align-items-center mb-3">
//               <div className="col-12 col-md-4">
//                 <Form.Label className="fs-5">
//                   Relation Type (e.g., S/O, D/O, W/O)
//                 </Form.Label>
//               </div>
//               <div className="col-12 col-md-8">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "18px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* 3. Relative Name */}
//           <Form.Group controlId="loanProposerRelativeName">
//             <div className="d-flex flex-column flex-md-row align-items-center mb-3">
//               <div className="col-12 col-md-4">
//                 <Form.Label className="fs-5">Relative Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-8">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "18px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* 4. Residence Type */}
//           <Form.Group controlId="loanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row align-items-center mb-3">
//               <div className="col-12 col-md-4">
//                 <Form.Label className="fs-5">Residence Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-8">
//                 <Form.Control
//                   as="select"
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "18px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Own">Own</option>
//                   <option value="Rented">Rented</option>
//                   <option value="Lease">Lease</option>
//                 </Form.Control>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* 5. Address Fields */}
//           {[
//             ["loanProposerDoorNumber", "Door Number"],
//             ["loanProposerStreetName", "Street Name"],
//             ["loanProposerCityName", "City Name"],
//             ["loanProposerMandalName", "Mandal Name"],
//             ["loanProposerDistrictName", "District Name"],
//             ["loanProposerPincode", "Pincode"],
//           ].map(([name, label]) => (
//             <Form.Group controlId={name} key={name}>
//               <div className="d-flex flex-column flex-md-row align-items-center mb-3">
//                 <div className="col-12 col-md-4">
//                   <Form.Label className="fs-5">{label}</Form.Label>
//                 </div>
//                 <div className="col-12 col-md-8">
//                   <Form.Control
//                     type="text"
//                     name={name}
//                     value={formik.values[name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{
//                       width: "300px",
//                       height: "40px",
//                       borderColor: "black",
//                       fontSize: "18px",
//                     }}
//                   />
//                   {formik.touched[name] && formik.errors[name] && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors[name]}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </Form.Group>
//           ))}

//           {/* Submit */}
//           <div className="text-center mt-4 mb-5">
//             <Button type="submit" variant="primary">
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;

 


// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // ✅ Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   // ✅ Initialize Formik with existing data if available
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");

//       // ✅ Save the loanProposerName globally for later pages
//       if (values.loanProposerName) {
//         sessionStorage.setItem("loanProposerName", values.loanProposerName);
//       }

//       // ✅ Always include name in payload for backend
//       const name = sessionStorage.getItem("loanProposerName");

//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//         loanProposerName: name, // ensure name is always sent
//       };

//       const apiUrl = LoanProposerDetails_api;
//       const token = getToken();

//       setLoading(true);
//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         console.log("Status:", response.status);
//         console.log("Status text:", response.statusText);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // ✅ Move to next page
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) {
//         errors.loanProposerName = "*required*";
//       }
//       if (!values.loanProposerRelationType) {
//         errors.loanProposerRelationType = "*required*";
//       }
//       if (!values.loanProposerRelativeName) {
//         errors.loanProposerRelativeName = "*required*";
//       }
//       if (!values.loanProposerResidenceType) {
//         errors.loanProposerResidenceType = "*required*";
//       }
//       if (!values.loanProposerDoorNumber) {
//         errors.loanProposerDoorNumber = "*required*";
//       }
//       if (!values.loanProposerStreetName) {
//         errors.loanProposerStreetName = "*required*";
//       }
//       if (!values.loanProposerCityName) {
//         errors.loanProposerCityName = "*required*";
//       }
//       if (!values.loanProposerMandalName) {
//         errors.loanProposerMandalName = "*required*";
//       }
//       if (!values.loanProposerDistrictName) {
//         errors.loanProposerDistrictName = "*required*";
//       }
//       if (!values.loanProposerPincode) {
//         errors.loanProposerPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       }
//       return errors;
//     },
//   });

//   // ✅ Save form data to sessionStorage on every change
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ Retrieve form data on component mount
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("loanProposerData"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   // ✅ Prefill from backend session (if available)
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/create-session`)
//         .then((res) => res.json())
//         .then((data) => {
//           Object.keys(data).forEach((key) => {
//             if (formik.values.hasOwnProperty(key)) {
//               formik.setFieldValue(key, data[key] || "");
//             }
//           });
//         })
//         .catch((err) => {
//           console.error("Failed to fetch previous session data", err);
//         });
//     }
//   }, []);

//   // ✅ UI — kept 100% same as your code
//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>
//       <div
//         style={{
//           minheight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* --- Loan Proposer Name --- */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Relation Type --- */}
//           <Form.Group controlId="LoanProposeRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Relative Name --- */}
//           <Form.Group controlId="LoanProposeRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Residence Type --- */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Door Number --- */}
//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Street Name --- */}
//           <Form.Group controlId="LoanProposeStreetName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- City --- */}
//           <Form.Group controlId="LoanProposeCityName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Mandal --- */}
//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- District --- */}
//           <Form.Group controlId="LoanProposeDistrictName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Pincode --- */}
//           <Form.Group controlId="LoanProposePincode">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Pincode
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* --- Submit --- */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//             >
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;



// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // 🔹 Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");

//       // ✅ Save loanProposerName as 'name' for other pages
//       sessionStorage.setItem("name", values.loanProposerName);

//       // ✅ Payload with name
//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//         name: values.loanProposerName || "Unnamed",
//       };
//       console.log("LoanProposerName entered:", values.loanProposerName);
//        console.log("Payload sending:", dataToSend);

//       const token = getToken();
//       const apiUrl = LoanProposerDetails_api;
//       console.log("Payload:", dataToSend);

//       setLoading(true);
//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         console.log("Status:", response.status, response.statusText);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext();
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType)
//         errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName)
//         errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType)
//         errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber)
//         errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName)
//         errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName)
//         errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName)
//         errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName)
//         errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode)
//         errors.loanProposerPincode = "*required*";
//       else if (!/^\d{6}$/.test(values.loanProposerPincode))
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       return errors;
//     },
//   });

//   // 🔹 Auto-save to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // 🔹 Prefill from previous saved data
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("loanProposerData"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   // 🔹 Prefill from backend (if exists)
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/create-session`)
//         .then((res) => res.json())
//         .then((data) => {
//           Object.keys(data).forEach((key) => {
//             if (formik.values.hasOwnProperty(key)) {
//               formik.setFieldValue(key, data[key] || "");
//             }
//           });
//         })
//         .catch((err) =>
//           console.error("Failed to fetch previous session data", err)
//         );
//     }
//   }, []);

//   // 🔹 UI — exactly as your version
//   return (
//     <div>
//       <h3 className="text-center"> Loan Proposer Details </h3>
//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* === Loan Proposer Name === */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12 " style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
//               </div>
//               <div className="col-12  ">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relation Type === */}
//           <Form.Group controlId="LoanProposerRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12 " style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relative Name === */}
//           <Form.Group controlId="LoanProposerRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12 " style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div className="col-12  ">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Residence Type === */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12 " style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="House">House</option>
//                   <option value="Flat">Flat</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Door Number === */}
//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Street Name === */}
//           <Form.Group controlId="LoanProposerStreetName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === City Name === */}
//           <Form.Group controlId="LoanProposerCityName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Mandal Name === */}
//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === District Name === */}
//           <Form.Group controlId="LoanProposerDistrictName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Pincode === */}
//           <Form.Group controlId="LoanProposerPincode">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Pincode
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Buttons === */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;




// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // ✅ Store sessionId in sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId = sessionStorage.getItem("user_id");
//       const token = getToken();

//       // ✅ Save proposer name for later use
//       sessionStorage.setItem("name", values.loanProposerName);

//       // ✅ Prepare payload
//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//         name: values.loanProposerName || "Unnamed",
//         current_page: "LoanProposerDetails", // ✅ track page
//       };

//       console.log("Payload to send:", dataToSend);

//       setLoading(true);
//       try {
//         const response = await fetch(LoanProposerDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext();
//         } else {
//           console.error("API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType)
//         errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName)
//         errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType)
//         errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber)
//         errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName)
//         errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName)
//         errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName)
//         errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName)
//         errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode)
//         errors.loanProposerPincode = "*required*";
//       else if (!/^\d{6}$/.test(values.loanProposerPincode))
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       return errors;
//     },
//   });

//   // ✅ Auto-save to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ Fetch existing session data from backend if session exists
//   useEffect(() => {
//     const sessionId = sessionStorage.getItem("sessionId");
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/${sessionId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data && typeof data === "object") {
//             Object.keys(formik.initialValues).forEach((key) => {
//               if (data[key] !== undefined) {
//                 formik.setFieldValue(key, data[key]);
//               }
//             });
//           }
//         })
//         .catch((err) =>
//           console.error("Failed to fetch previous session data:", err)
//         );
//     }
//   }, []);

//   // ✅ Your UI (unchanged)
//   return (
//     <div>
//       <h3 className="text-center">Loan Proposer Details</h3>
//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* === Loan Proposer Name === */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relation Type === */}
//           <Form.Group controlId="LoanProposerRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relative Name === */}
//           <Form.Group controlId="LoanProposerRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Residence Type === */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="House">House</option>
//                   <option value="Flat">Flat</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Door Number === */}
//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Street Name === */}
//           <Form.Group controlId="LoanProposerStreetName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === City Name === */}
//           <Form.Group controlId="LoanProposerCityName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Mandal Name === */}
//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === District Name === */}
//           <Form.Group controlId="LoanProposerDistrictName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Pincode === */}
//           <Form.Group controlId="LoanProposerPincode">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Pincode
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Buttons === */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;




// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // ✅ Store sessionId in sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);

//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId =
//         sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
//       const token = getToken();

//       if (!userId) {
//         alert("User ID not found — please log in again.");
//         return;
//       }

//       // ✅ Save proposer name for later use
//       sessionStorage.setItem("name", values.loanProposerName);

//       // ✅ Prepare payload
//       const dataToSend = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//         name: values.loanProposerName || "Unnamed",
//         current_page: "LoanProposerDetails", // ✅ track current page
//       };

//       console.log("Payload to send:", dataToSend);

//       setLoading(true);
//       try {
//         const response = await fetch(LoanProposerDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("✅ API response:", data);
//           onNext();
//         } else {
//           console.error("❌ API Error:", response.statusText);
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("⚠️ Fetch error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType)
//         errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName)
//         errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType)
//         errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber)
//         errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName)
//         errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName)
//         errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName)
//         errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName)
//         errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode)
//         errors.loanProposerPincode = "*required*";
//       else if (!/^\d{6}$/.test(values.loanProposerPincode))
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       return errors;
//     },
//   });

//   // ✅ Auto-save to sessionStorage on change
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ Fetch existing session data from backend on load
//   useEffect(() => {
//     const sessionId =
//       sessionIdFromUrl || sessionStorage.getItem("sessionId") || null;

//     if (!sessionId) {
//       console.warn("⚠️ No session ID found — skipping data fetch.");
//       return;
//     }

//     const fetchSessionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/session/${sessionId}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch session data");
//         }
//         const data = await response.json();
//         console.log("📦 Loaded session data from backend:", data);

//         if (data && typeof data === "object") {
//           Object.keys(formik.initialValues).forEach((key) => {
//             if (data[key] !== undefined && data[key] !== null) {
//               formik.setFieldValue(key, data[key]);
//             }
//           });

//           // ✅ Update local sessionStorage with backend data
//           sessionStorage.setItem(
//             "loanProposerData",
//             JSON.stringify({
//               ...formik.values,
//               ...data,
//             })
//           );
//         }
//       } catch (err) {
//         console.error("❌ Failed to fetch previous session data:", err);
//       }
//     };

//     fetchSessionData();
//   }, [sessionIdFromUrl]);

//   // ✅ Your full UI (unchanged)
//   return (
//     <div>
//       <h3 className="text-center">Loan Proposer Details</h3>
//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* === Loan Proposer Name === */}
//           <Form.Group controlId="LoanProposeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relation Type === */}
//           <Form.Group controlId="LoanProposerRelationType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relative Name === */}
//           <Form.Group controlId="LoanProposerRelativeName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Residence Type === */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="House">House</option>
//                   <option value="Flat">Flat</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Door Number === */}
//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Street Name === */}
//           <Form.Group controlId="LoanProposerStreetName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === City Name === */}
//           <Form.Group controlId="LoanProposerCityName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Mandal Name === */}
//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === District Name === */}
//           <Form.Group controlId="LoanProposerDistrictName">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Pincode === */}
//           <Form.Group controlId="LoanProposerPincode">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Pincode
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Buttons === */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;





// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // ✅ Store sessionId if found in URL
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("✅ Session ID stored:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   // ✅ Initialize Formik with reinitialization enabled
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },
//     enableReinitialize: true, // 🔥 Important for auto-filling after fetch

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType)
//         errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName)
//         errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType)
//         errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber)
//         errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName)
//         errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName)
//         errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName)
//         errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName)
//         errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode)
//         errors.loanProposerPincode = "*required*";
//       else if (!/^\d{6}$/.test(values.loanProposerPincode))
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       return errors;
//     },

//     onSubmit: async (values) => {
//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId =
//         sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
//       const token = getToken();

//       if (!userId) {
//         alert("User ID not found. Please log in again.");
//         return;
//       }

//       // ✅ Save proposer name in session for later
//       sessionStorage.setItem("name", values.loanProposerName);

//       // ✅ Prepare payload
//       const payload = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//         name: values.loanProposerName || "Unnamed",
//         current_page: "LoanProposerDetails",
//       };

//       console.log("📦 Sending Payload:", payload);

//       setLoading(true);
//       try {
//         const response = await fetch(LoanProposerDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(payload),
//         });

//         const data = await response.json();
//         console.log("✅ API Response:", data);

//         if (response.ok) {
//           sessionStorage.setItem("loanProposerData", JSON.stringify(values));
//           if (onNext) {
//             onNext();
//           } else {
//             navigate(`/TitleHolderDetails?sessionId=${sessionId}`);
//           }
//         } else {
//           console.error("❌ API Error:", data.message || response.statusText);
//           alert(data.message || "Something went wrong while saving data.");
//         }
//       } catch (error) {
//         console.error("⚠️ Network error:", error);
//         alert("Network error. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // ✅ Auto-save to sessionStorage when values change
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ Fetch existing session data on load
//   useEffect(() => {
//     const sessionId =
//       sessionIdFromUrl || sessionStorage.getItem("sessionId") || null;

//     if (!sessionId) {
//       console.warn("⚠️ No sessionId found — skipping fetch.");
//       return;
//     }

//     const fetchSessionData = async () => {
//       try {
//         const token = getToken();
//         const response = await fetch(
//           `http://localhost:3000/api/session/${sessionId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch session data");

//         const data = await response.json();
//         console.log("📥 Loaded session data:", data);

//         if (data && typeof data === "object") {
//           // ✅ Update all form values at once
//           formik.setValues((prev) => ({
//             ...prev,
//             ...data,
//           }));

//           // ✅ Save in sessionStorage too
//           sessionStorage.setItem("loanProposerData", JSON.stringify(data));
//         }
//       } catch (err) {
//         console.error("❌ Failed to fetch session data:", err);
//       }
//     };

//     fetchSessionData();
//   }, [sessionIdFromUrl]);

//   // ✅ Full UI
//   return (
//     <div>
//       <h3 className="text-center">Loan Proposer Details</h3>
//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* === Loan Proposer Name === */}
//           <Form.Group controlId="LoanProposerName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relation Type === */}
//           <Form.Group controlId="LoanProposerRelationType">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relative Name === */}
//           <Form.Group controlId="LoanProposerRelativeName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Residence Type === */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="House">House</option>
//                   <option value="Flat">Flat</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Door Number === */}
//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Street Name === */}
//           <Form.Group controlId="LoanProposerStreetName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === City Name === */}
//           <Form.Group controlId="LoanProposerCityName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Mandal Name === */}
//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === District Name === */}
//           <Form.Group controlId="LoanProposerDistrictName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Pincode === */}
//           <Form.Group controlId="LoanProposerPincode">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Pincode</Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Submit Button === */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;





//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//below code is working good 

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { LoanProposerDetails_api } from "../apiUrls";
// import { getToken } from "../auth";

// const LoanProposerDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // ✅ Store sessionId in sessionStorage if found in URL
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("✅ Session ID stored:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   // ✅ Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
//       loanProposerName: "",
//       loanProposerRelationType: "",
//       loanProposerRelativeName: "",
//       loanProposerResidenceType: "",
//       loanProposerDoorNumber: "",
//       loanProposerStreetName: "",
//       loanProposerCityName: "",
//       loanProposerMandalName: "",
//       loanProposerDistrictName: "",
//       loanProposerPincode: "",
//     },

//     validate: (values) => {
//       let errors = {};
//       if (!values.loanProposerName) errors.loanProposerName = "*required*";
//       if (!values.loanProposerRelationType)
//         errors.loanProposerRelationType = "*required*";
//       if (!values.loanProposerRelativeName)
//         errors.loanProposerRelativeName = "*required*";
//       if (!values.loanProposerResidenceType)
//         errors.loanProposerResidenceType = "*required*";
//       if (!values.loanProposerDoorNumber)
//         errors.loanProposerDoorNumber = "*required*";
//       if (!values.loanProposerStreetName)
//         errors.loanProposerStreetName = "*required*";
//       if (!values.loanProposerCityName)
//         errors.loanProposerCityName = "*required*";
//       if (!values.loanProposerMandalName)
//         errors.loanProposerMandalName = "*required*";
//       if (!values.loanProposerDistrictName)
//         errors.loanProposerDistrictName = "*required*";
//       if (!values.loanProposerPincode)
//         errors.loanProposerPincode = "*required*";
//       else if (!/^\d{6}$/.test(values.loanProposerPincode))
//         errors.loanProposerPincode = "Pincode must be exactly 6 digits";
//       return errors;
//     },

//     onSubmit: async (values) => {
//       const sessionId = sessionStorage.getItem("sessionId");
//       const userId =
//         sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
//       const token = getToken();

//       if (!userId) {
//         alert("User ID not found. Please log in again.");
//         return;
//       }

//       // ✅ Save proposer name in session for later
//       sessionStorage.setItem("name", values.loanProposerName);

//       // ✅ Prepare payload
//       const payload = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId,
//         name: values.loanProposerName || "Unnamed",
//         current_page: "LoanProposerDetails",
//       };

//       console.log("📦 Sending Payload:", payload);

//       setLoading(true);
//       try {
//         const response = await fetch(LoanProposerDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token ? { Authorization: `Bearer ${token}` } : {}),
//           },
//           body: JSON.stringify(payload),
//         });

//         const data = await response.json();
//         console.log("✅ API Response:", data);

//         if (response.ok) {
//           // ✅ Save latest data locally
//           sessionStorage.setItem("loanProposerData", JSON.stringify(values));

//           // ✅ Navigate to next page
//           if (onNext) {
//             onNext();
//           } else {
//             navigate(`/TitleHolderDetails?sessionId=${sessionId}`);
//           }
//         } else {
//           console.error("❌ API Error:", data.message || response.statusText);
//           alert(data.message || "Something went wrong while saving data.");
//         }
//       } catch (error) {
//         console.error("⚠️ Network error:", error);
//         alert("Network error. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // ✅ Auto-save to sessionStorage whenever form changes
//   useEffect(() => {
//     sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ Fetch existing session data from backend (on load)
//   useEffect(() => {
//     const sessionId =
//       sessionIdFromUrl || sessionStorage.getItem("sessionId") || null;

//     if (!sessionId) {
//       console.warn("⚠️ No sessionId found — skipping fetch.");
//       return;
//     }

//     const fetchSessionData = async () => {
//       try {
//         const token = getToken();
//         // const response = await fetch(
//         //   // `http://localhost:3000/api/session/${sessionId}`,
//         //    `http://localhost:3000/api/session/session_id?session_id=${sessionId}`,
//         //   {
//         //     headers: {
//         //       "Content-Type": "application/json",
//         //       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//         //     },
//         //   }
//         // );
//         const response = await fetch(
//   `http://localhost:3000/api/session/${sessionId}`,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );


//         if (!response.ok) throw new Error("Failed to fetch session data");

//         const data = await response.json();
//         console.log("📥 Loaded session data:", data);

//         if (data && typeof data === "object") {
//           Object.keys(formik.initialValues).forEach((key) => {
//             if (data[key] !== undefined && data[key] !== null) {
//               formik.setFieldValue(key, data[key]);
//             }
//           });

//           sessionStorage.setItem(
//             "loanProposerData",
//             JSON.stringify({ ...formik.values, ...data })
//           );
//         }
//       } catch (err) {
//         console.error("❌ Failed to fetch session data:", err);
//       }
//     };

//     fetchSessionData();
//   }, [sessionIdFromUrl]);

//   // ✅ Full UI (unchanged)
//   return (
//     <div>
//       <h3 className="text-center">Loan Proposer Details</h3>
//       <div
//         style={{
//           minHeight: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* === Loan Proposer Name === */}
//           <Form.Group controlId="LoanProposerName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerName"
//                   value={formik.values.loanProposerName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerName &&
//                   formik.errors.loanProposerName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relation Type === */}
//           <Form.Group controlId="LoanProposerRelationType">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relation Type
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Select
//                   name="loanProposerRelationType"
//                   value={formik.values.loanProposerRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerRelationType &&
//                   formik.errors.loanProposerRelationType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Relative Name === */}
//           <Form.Group controlId="LoanProposerRelativeName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Relative Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerRelativeName"
//                   value={formik.values.loanProposerRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerRelativeName &&
//                   formik.errors.loanProposerRelativeName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Residence Type === */}
//           <Form.Group controlId="LoanProposerResidenceType">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Residence Type
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Select
//                   name="loanProposerResidenceType"
//                   value={formik.values.loanProposerResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <option value="">Select</option>
//                   <option value="House">House</option>
//                   <option value="Flat">Flat</option>
//                 </Form.Select>
//                 {formik.touched.loanProposerResidenceType &&
//                   formik.errors.loanProposerResidenceType && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Door Number === */}
//           <Form.Group controlId="LoanProposerDoorNumber">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Door Number
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDoorNumber"
//                   value={formik.values.loanProposerDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDoorNumber &&
//                   formik.errors.loanProposerDoorNumber && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Street Name === */}
//           <Form.Group controlId="LoanProposerStreetName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Street Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerStreetName"
//                   value={formik.values.loanProposerStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerStreetName &&
//                   formik.errors.loanProposerStreetName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === City Name === */}
//           <Form.Group controlId="LoanProposerCityName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer City Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerCityName"
//                   value={formik.values.loanProposerCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerCityName &&
//                   formik.errors.loanProposerCityName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerCityName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Mandal Name === */}
//           <Form.Group controlId="LoanProposerMandalName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Mandal Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerMandalName"
//                   value={formik.values.loanProposerMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerMandalName &&
//                   formik.errors.loanProposerMandalName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === District Name === */}
//           <Form.Group controlId="LoanProposerDistrictName">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer District Name
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerDistrictName"
//                   value={formik.values.loanProposerDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerDistrictName &&
//                   formik.errors.loanProposerDistrictName && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Pincode === */}
//           <Form.Group controlId="LoanProposerPincode">
//             <div className="d-flex flex-column flex-md-row align-items-center">
//               <div style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Loan Proposer Pincode
//                 </Form.Label>
//               </div>
//               <div>
//                 <Form.Control
//                   type="text"
//                   name="loanProposerPincode"
//                   value={formik.values.loanProposerPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.loanProposerPincode &&
//                   formik.errors.loanProposerPincode && (
//                     <div className="text-danger fw-bold">
//                       {formik.errors.loanProposerPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* === Submit Button === */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoanProposerDetails;


 import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { LoanProposerDetails_api } from "../apiUrls";
import { getToken } from "../auth";

const LoanProposerDetails = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sessionIdFromUrl = searchParams.get("sessionId");

  // ✅ Save sessionId to sessionStorage (only once)
  useEffect(() => {
    if (sessionIdFromUrl) {
      sessionStorage.setItem("sessionId", sessionIdFromUrl);
      console.log("✅ Session ID stored:", sessionIdFromUrl);
    }
  }, [sessionIdFromUrl]);

  // ✅ Initialize Formik with reinitialization enabled
  const [initialValues, setInitialValues] = useState(
    JSON.parse(sessionStorage.getItem("loanProposerData")) || {
      loanProposerName: "",
      loanProposerRelationType: "",
      loanProposerRelativeName: "",
      loanProposerResidenceType: "",
      loanProposerDoorNumber: "",
      loanProposerStreetName: "",
      loanProposerCityName: "",
      loanProposerMandalName: "",
      loanProposerDistrictName: "",
      loanProposerPincode: "",
    }
  );

  const formik = useFormik({
    enableReinitialize: true, // ✅ allows updating UI when data is fetched
    initialValues,

    validate: (values) => {
      let errors = {};
      if (!values.loanProposerName) errors.loanProposerName = "*required*";
      if (!values.loanProposerRelationType)
        errors.loanProposerRelationType = "*required*";
      if (!values.loanProposerRelativeName)
        errors.loanProposerRelativeName = "*required*";
      if (!values.loanProposerResidenceType)
        errors.loanProposerResidenceType = "*required*";
      if (!values.loanProposerDoorNumber)
        errors.loanProposerDoorNumber = "*required*";
      if (!values.loanProposerStreetName)
        errors.loanProposerStreetName = "*required*";
      if (!values.loanProposerCityName)
        errors.loanProposerCityName = "*required*";
      if (!values.loanProposerMandalName)
        errors.loanProposerMandalName = "*required*";
      if (!values.loanProposerDistrictName)
        errors.loanProposerDistrictName = "*required*";
      if (!values.loanProposerPincode)
        errors.loanProposerPincode = "*required*";
      else if (!/^\d{6}$/.test(values.loanProposerPincode))
        errors.loanProposerPincode = "Pincode must be exactly 6 digits";
      return errors;
    },

    onSubmit: async (values) => {
      const sessionId = sessionStorage.getItem("sessionId");
      const userId =
        sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
      const token = getToken();

      if (!userId) {
        alert("User ID not found. Please log in again.");
        return;
      }

      // ✅ Save proposer name in sessionStorage
      sessionStorage.setItem("name", values.loanProposerName);

      const payload = {
        ...values,
        session_id: sessionId,
        user_id: userId,
        name: values.loanProposerName || "Unnamed",
        current_page: "LoanProposerDetails",
      };

      console.log("📦 Sending Payload:", payload);

      setLoading(true);
      try {
        const response = await fetch(LoanProposerDetails_api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log("✅ API Response:", data);

        if (response.ok) {
          // ✅ Save latest data locally
          sessionStorage.setItem("loanProposerData", JSON.stringify(values));

          // ✅ Navigate to next page
          if (onNext) {
            onNext();
          } else {
            navigate(`/TitleHolderDetails?sessionId=${sessionId}`);
          }
        } else {
          console.error("❌ API Error:", data.message || response.statusText);
          alert(data.message || "Something went wrong while saving data.");
        }
      } catch (error) {
        console.error("⚠️ Network error:", error);
        alert("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  // ✅ Auto-save form changes to sessionStorage
  useEffect(() => {
    if (!loading) {
      sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
    }
  }, [formik.values, loading]);

  // ✅ Fetch backend session data on load
  useEffect(() => {
    const sessionId =
      sessionIdFromUrl || sessionStorage.getItem("sessionId") || null;

    if (!sessionId) {
      console.warn("⚠️ No sessionId found — skipping fetch.");
      return;
    }

    const fetchSessionData = async () => {
      try {
        const token = getToken();
        const response = await fetch(
          `http://localhost:3000/api/session/${sessionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch session data");

        const data = await response.json();
        console.log("📥 Loaded session data:", data);

        if (data && typeof data === "object") {
          const updatedValues = { ...initialValues, ...data };
          setInitialValues(updatedValues); // ✅ update formik's initial values
          formik.setValues(updatedValues); // ✅ fill UI instantly
          sessionStorage.setItem(
            "loanProposerData",
            JSON.stringify(updatedValues)
          );
        }
      } catch (err) {
        console.error("❌ Failed to fetch session data:", err);
      }
    };

    fetchSessionData();
  }, [sessionIdFromUrl]);

  // ✅ Full UI (unchanged)
  return (
    <div>
      <h3 className="text-center">Loan Proposer Details</h3>
      <div
        style={{
          minHeight: "100vh",
          paddingLeft: "50px",
          paddingTop: "10px",
          overflowX: "hidden",
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          {/* === Loan Proposer Name === */}
          <Form.Group controlId="LoanProposerName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">Loan Proposer Name</Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerName"
                  value={formik.values.loanProposerName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerName &&
                  formik.errors.loanProposerName && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerName}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Relation Type === */}
          <Form.Group controlId="LoanProposerRelationType">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Relation Type
                </Form.Label>
              </div>
              <div>
                <Form.Select
                  name="loanProposerRelationType"
                  value={formik.values.loanProposerRelationType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="S/O">S/O</option>
                  <option value="D/O">D/O</option>
                  <option value="W/O">W/O</option>
                  <option value="C/O">C/O</option>
                  <option value="H/O">H/O</option>
                </Form.Select>
                {formik.touched.loanProposerRelationType &&
                  formik.errors.loanProposerRelationType && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerRelationType}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Relative Name === */}
          <Form.Group controlId="LoanProposerRelativeName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Relative Name
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerRelativeName"
                  value={formik.values.loanProposerRelativeName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerRelativeName &&
                  formik.errors.loanProposerRelativeName && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerRelativeName}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Residence Type === */}
          <Form.Group controlId="LoanProposerResidenceType">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Residence Type
                </Form.Label>
              </div>
              <div>
                <Form.Select
                  name="loanProposerResidenceType"
                  value={formik.values.loanProposerResidenceType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="House">House</option>
                  <option value="Flat">Flat</option>
                </Form.Select>
                {formik.touched.loanProposerResidenceType &&
                  formik.errors.loanProposerResidenceType && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerResidenceType}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Door Number === */}
          <Form.Group controlId="LoanProposerDoorNumber">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Door Number
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerDoorNumber"
                  value={formik.values.loanProposerDoorNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerDoorNumber &&
                  formik.errors.loanProposerDoorNumber && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerDoorNumber}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Street Name === */}
          <Form.Group controlId="LoanProposerStreetName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Street Name
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerStreetName"
                  value={formik.values.loanProposerStreetName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerStreetName &&
                  formik.errors.loanProposerStreetName && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerStreetName}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === City Name === */}
          <Form.Group controlId="LoanProposerCityName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer City Name
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerCityName"
                  value={formik.values.loanProposerCityName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerCityName &&
                  formik.errors.loanProposerCityName && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerCityName}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Mandal Name === */}
          <Form.Group controlId="LoanProposerMandalName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Mandal Name
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerMandalName"
                  value={formik.values.loanProposerMandalName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerMandalName &&
                  formik.errors.loanProposerMandalName && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerMandalName}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === District Name === */}
          <Form.Group controlId="LoanProposerDistrictName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer District Name
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerDistrictName"
                  value={formik.values.loanProposerDistrictName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerDistrictName &&
                  formik.errors.loanProposerDistrictName && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerDistrictName}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Pincode === */}
          <Form.Group controlId="LoanProposerPincode">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Loan Proposer Pincode
                </Form.Label>
              </div>
              <div>
                <Form.Control
                  type="text"
                  name="loanProposerPincode"
                  value={formik.values.loanProposerPincode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.touched.loanProposerPincode &&
                  formik.errors.loanProposerPincode && (
                    <div className="text-danger fw-bold">
                      {formik.errors.loanProposerPincode}
                    </div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* === Submit Button === */}
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              className="mt-3"
              disabled={loading}
            >
              {loading ? "Saving..." : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoanProposerDetails;
