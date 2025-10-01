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




import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { LoanProposerDetails_api } from "../apiUrls";
import { getToken } from "../auth";

const LoanProposerDetails = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const sessionIdFromUrl = searchParams.get("sessionId");

  // Save sessionId into sessionStorage
  useEffect(() => {
    if (sessionIdFromUrl) {
      sessionStorage.setItem("sessionId", sessionIdFromUrl);
      console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
    }
  }, [sessionIdFromUrl]);

  const formik = useFormik({
    initialValues: JSON.parse(sessionStorage.getItem("loanProposerData")) || {
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
    },

    onSubmit: async (values) => {
      console.log("Form Submitted:", values);

      const sessionId = sessionStorage.getItem("sessionId");
      const userId = sessionStorage.getItem("user_id");

      const dataToSend = {
        ...values,
        session_id: sessionId,
        user_id: userId,
      };

      const apiUrl = LoanProposerDetails_api;
      const token = getToken();

      setLoading(true);

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(dataToSend),
        });

        console.log("Status:", response.status);
        console.log("Status text:", response.statusText);

        if (response.ok) {
          const data = await response.json();
          console.log("API response:", data);
          onNext(); // Navigate to next page
        } else {
          console.error("API Error:", response.statusText);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Network error. Please check your connection.");
      } finally {
        setLoading(false);
      }
    },

    validate: (values) => {
      let errors = {};
      if (!values.loanProposerName) errors.loanProposerName = "*required*";
      if (!values.loanProposerRelationType) errors.loanProposerRelationType = "*required*";
      if (!values.loanProposerRelativeName) errors.loanProposerRelativeName = "*required*";
      if (!values.loanProposerResidenceType) errors.loanProposerResidenceType = "*required*";
      if (!values.loanProposerDoorNumber) errors.loanProposerDoorNumber = "*required*";
      if (!values.loanProposerStreetName) errors.loanProposerStreetName = "*required*";
      if (!values.loanProposerCityName) errors.loanProposerCityName = "*required*";
      if (!values.loanProposerMandalName) errors.loanProposerMandalName = "*required*";
      if (!values.loanProposerDistrictName) errors.loanProposerDistrictName = "*required*";

      if (!values.loanProposerPincode) {
        errors.loanProposerPincode = "*required*";
      } else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
        errors.loanProposerPincode = "Pincode must be exactly 6 digits";
      }

      return errors;
    },
  });

  // Auto-save form data to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("loanProposerData", JSON.stringify(formik.values));
  }, [formik.values]);

  // Prefill form from sessionStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("loanProposerData"));
    if (savedData) formik.setValues(savedData);
  }, []);

  // Prefill form from backend session data
  useEffect(() => {
    const sessionId = sessionStorage.getItem("sessionId");
    if (sessionId) {
      fetch(`http://localhost:3000/api/session/create-session`)    
        .then((res) => res.json())
        .then((data) => {
          Object.keys(data).forEach((key) => {
            if (formik.values.hasOwnProperty(key)) {
              formik.setFieldValue(key, data[key] || "");
            }
          });
        })
        .catch((err) => {
          console.error("Failed to fetch previous session data", err);
        });
    }
  }, []);

  return (
    <div>
      <h3 className="text-center"> Loan Proposer Details </h3>

      <div
        style={{
          minHeight: "100vh",
          paddingLeft: "50px",
          paddingTop: "10px",
          overflowX: "hidden",
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          {/* Loan Proposer Name */}
          <Form.Group controlId="LoanProposeName">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Loan Proposer Name </Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="loanProposerName"
                  value={formik.values.loanProposerName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                />
                {formik.touched.loanProposerName && formik.errors.loanProposerName && (
                  <div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Loan Proposer Relation Type */}
          <Form.Group controlId="LoanProposeRelationType">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Loan Proposer Relation Type</Form.Label>
              </div>
              <div className="col-12">
                <Form.Select
                  name="loanProposerRelationType"
                  value={formik.values.loanProposerRelationType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                >
                  <option value="">Select</option>
                  <option value="S/O">S/O</option>
                  <option value="W/O">W/O</option>
                  <option value="D/O">D/O</option>
                  <option value="C/O">C/O</option>
                  <option value="H/O">H/O</option>
                </Form.Select>
                {formik.touched.loanProposerRelationType && formik.errors.loanProposerRelationType && (
                  <div className="text-danger fw-bold">{formik.errors.loanProposerRelationType}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Loan Proposer Relative Name */}
          <Form.Group controlId="LoanProposeRelativeName">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Loan Proposer Relative Name</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="loanProposerRelativeName"
                  value={formik.values.loanProposerRelativeName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                />
                {formik.touched.loanProposerRelativeName && formik.errors.loanProposerRelativeName && (
                  <div className="text-danger fw-bold">{formik.errors.loanProposerRelativeName}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Loan Proposer Residence Type */}
          <Form.Group controlId="LoanProposerResidenceType">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Loan Proposer Residence Type</Form.Label>
              </div>
              <div className="col-12">
                <Form.Select
                  name="loanProposerResidenceType"
                  value={formik.values.loanProposerResidenceType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                >
                  <option value="">Select</option>
                  <option value="Flat">Flat</option>
                  <option value="House">House</option>
                </Form.Select>
                {formik.touched.loanProposerResidenceType && formik.errors.loanProposerResidenceType && (
                  <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Remaining fields (Door Number, Street, City, Mandal, District, Pincode) */}
          {["DoorNumber","StreetName","CityName","MandalName","DistrictName","Pincode"].map((field) => (
            <Form.Group key={field} controlId={`LoanPropose${field}`}>
              <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
                <div className="col-12" style={{ width: "420px" }}>
                  <Form.Label className="fs-3">{`Loan Proposer ${field.replace(/([A-Z])/g, ' $1')}`}</Form.Label>
                </div>
                <div className="col-12">
                  <Form.Control
                    type="text"
                    name={`loanProposer${field}`}
                    value={formik.values[`loanProposer${field}`]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                  />
                  {formik.touched[`loanProposer${field}`] && formik.errors[`loanProposer${field}`] && (
                    <div className="text-danger fw-bold">{formik.errors[`loanProposer${field}`]}</div>
                  )}
                </div>
              </div>
            </Form.Group>
          ))}

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" variant="primary" className="mt-3">
              {loading ? "Loading..." : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoanProposerDetails;

 
 