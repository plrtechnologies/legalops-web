// import React, { useState, useEffect } from "react";
// import { useFormik } from 'formik';
// import Button from 'react-bootstrap/esm/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";  
// import { Propertyboundaries_api } from "../apiUrls";

// const PropertyBoundaries = ({ onNext }) => {
//     // State to handle loading state for API call
//     const [loading, setLoading] = useState(false);
//      const navigate = useNavigate();  // Initialize navigate
//     const formik = useFormik({
//         initialValues:  JSON.parse(sessionStorage.getItem("PropertyBoundariesData")) ||{
//             eastBoundaryType: "",
//             eastBoundaryExtent: "",
//             eastBoundaryOwner: "",
//             westBoundaryType: "",
//             westBoundaryExtent: "",
//             westBoundaryOwner: "",
//             northBoundaryType: "",
//             northBoundaryExtent: "",
//             northBoundaryOwner: "",
//             southBoundaryType: "",
//             southBoundaryExtent: "",
//             southBoundaryOwner: "",
//         },
//         onSubmit: async (values) => {
//             console.log('Form Submitted:', values);

//             // Set loading state to true
//             //setLoading(true);

//             // Replace with your actual API endpoint
//             // const apiUrl = Propertyboundaries_api;

//             // try {
//             //     const response = await fetch(apiUrl, {
//             //         method: 'POST',
//             //         headers: {
//             //             'Content-Type': 'application/json',
//             //         },
//             //         body: JSON.stringify(values),
//             //     });

//             //     if (response.ok) {
//             //         const data = await response.json();
//             //         console.log("API response:", data);

//             //         // After a successful API call, call onNext
//                     onNext();
//             //     } else {
//             //         // Handle API error
//             //         console.error("API Error:", response.statusText);
//             //         // Optionally show an error message to the user
//             //     }
//             // } catch (error) {
//             //     console.error("Error during API call:", error);
//             //     // Optionally show an error message to the user
//             // } finally {
//             //     // Set loading state to false
//             //     setLoading(false);
//             // }
//         },

//         validate: (values) => {
//             let errors = {};
//             if (!values.eastBoundaryType) {
//                 errors.eastBoundaryType = "*required*";
//             }

//             if (!values.eastBoundaryExtent) {
//                 errors.eastBoundaryExtent = "*required*";
//             }
//             if (!values.eastBoundaryOwner) {
//                 errors.eastBoundaryOwner = "*required*";
//             }
//             if (!values.westBoundaryType) {
//                 errors.westBoundaryType = "*required*";
//             }
//             if (!values.westBoundaryExtent) {
//                 errors.westBoundaryExtent = "*required*";
//             }
//             if (!values.westBoundaryOwner) {
//                 errors.westBoundaryOwner = "*required*";
//             }

//             if (!values.northBoundaryType) {
//                 errors.northBoundaryType = "*required*";
//             }
//             if (!values.northBoundaryExtent) {
//                 errors.northBoundaryExtent = "*required*";
//             }
//             if (!values.northBoundaryOwner) {
//                 errors.northBoundaryOwner = "*required*";
//             }
//             if (!values.southBoundaryType) {
//                 errors.southBoundaryType = "*required*";
//             }
//             if (!values.southBoundaryExtent) {
//                 errors.southBoundaryExtent = "*required*";
//             }
//             if (!values.southBoundaryOwner) {   
//                 errors.southBoundaryOwner = "*required*";
//             }
//             return errors;
//         }
//     });

// // Save form data to sessionStorage on change
//            useEffect(() => {
//              sessionStorage.setItem("PropertyBoundaries", JSON.stringify(formik.values));
//          }, [formik.values]);
       
//          // Retrieve form data from sessionStorage on component mount
//          useEffect(() => {
//              const savedData = JSON.parse(sessionStorage.getItem("PropertyBoundaries"));
//              if (savedData) {
//                  formik.setValues(savedData);
//              }
//          }, []);

//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", paddingBottom: "50px" }}>
//             <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
//                 <h3 className="text-center">Property Boundaries</h3>
//                 <Form onSubmit={formik.handleSubmit}>
//                     {/* East Boundary Section */}
//                     <h3 className="text-center">EAST</h3>
//                     <div className="d-flex flex-column pt-3 pb-3">
//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">East Boundary Type</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="eastBoundaryType"
//                                     value={formik.values.eastBoundaryType}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.eastBoundaryType && <div className="text-danger fw-bold">{formik.errors.eastBoundaryType}</div>} */}

//                                 {formik.touched. eastBoundaryType && formik.errors. eastBoundaryType && (
//                                <div className="text-danger fw-bold fs-5">{formik.errors. eastBoundaryType}</div>
                         
//                          )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">East Boundary Extent</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="eastBoundaryExtent"
//                                     value={formik.values.eastBoundaryExtent}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
                                    
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.eastBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.eastBoundaryExtent}</div>} */}
//                                 {formik.touched. eastBoundaryExtent && formik.errors. eastBoundaryExtent && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. eastBoundaryExtent}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">East Boundary Owner</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="eastBoundaryOwner"
//                                     value={formik.values.eastBoundaryOwner}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.eastBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.eastBoundaryOwner}</div>} */}
//                                 {formik.touched. eastBoundaryOwner && formik.errors. eastBoundaryOwner && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. eastBoundaryOwner}</div>
//                         )}  
//                             </div>
//                         </div>
//                     </div>

//                     {/* West Boundary Section */}
//                     <h3 className="text-center">WEST</h3>
//                     <div className="d-flex flex-column pt-3 pb-3">
//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">West Boundary Type</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="westBoundaryType"
//                                     value={formik.values.westBoundaryType}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.westBoundaryType && <div className="text-danger fw-bold">{formik.errors.westBoundaryType}</div>} */}
//                                 {formik.touched. westBoundaryType && formik.errors. westBoundaryType && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. westBoundaryType}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">West Boundary Extent</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="westBoundaryExtent"
//                                     value={formik.values.westBoundaryExtent}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.westBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.westBoundaryExtent}</div>} */}
//                                 {formik.touched. westBoundaryExtent && formik.errors. westBoundaryExtent && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. westBoundaryExtent}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">West Boundary Owner</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="westBoundaryOwner"
//                                     value={formik.values.westBoundaryOwner}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.westBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.westBoundaryOwner}</div>} */}
//                                 {formik.touched. westBoundaryOwner && formik.errors. westBoundaryOwner && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. westBoundaryOwner}</div>
//                         )}  
//                             </div>
//                         </div>
//                     </div>

//                     {/* North Boundary Section */}
//                     <h3 className="text-center">NORTH</h3>
//                     <div className="d-flex flex-column pt-3 pb-3">
//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">North Boundary Type</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="northBoundaryType"
//                                     value={formik.values.northBoundaryType}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.northBoundaryType && <div className="text-danger fw-bold">{formik.errors.northBoundaryType}</div>} */}
//                                 {formik.touched. northBoundaryType && formik.errors. northBoundaryType && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. northBoundaryType}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">North Boundary Extent</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="northBoundaryExtent"
//                                     value={formik.values.northBoundaryExtent}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.northBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.northBoundaryExtent}</div>} */}
//                                 {formik.touched. northBoundaryExtent && formik.errors. northBoundaryExtent && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. northBoundaryExtent}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">North Boundary Owner</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="northBoundaryOwner"
//                                     value={formik.values.northBoundaryOwner}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.northBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.northBoundaryOwner}</div>} */}
//                                 {formik.touched. northBoundaryOwner && formik.errors. northBoundaryOwner && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. northBoundaryOwner}</div>
//                         )}  
//                             </div>
//                         </div>
//                     </div>

//                     {/* South Boundary Section */}
//                     <h3 className="text-center">SOUTH</h3>
//                     <div className="d-flex flex-column pt-3 pb-3">
//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">South Boundary Type</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="southBoundaryType"
//                                     value={formik.values.southBoundaryType}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.southBoundaryType && <div className="text-danger fw-bold">{formik.errors.southBoundaryType}</div>} */}
//                                 {formik.touched. southBoundaryType && formik.errors. southBoundaryType && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. southBoundaryType}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">South Boundary Extent</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="southBoundaryExtent"
//                                     value={formik.values.southBoundaryExtent}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.southBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.southBoundaryExtent}</div>} */}
//                                 {formik.touched. southBoundaryExtent && formik.errors. southBoundaryExtent && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. southBoundaryExtent}</div>
//                         )}  
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">South Boundary Owner</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="southBoundaryOwner"
//                                     value={formik.values.southBoundaryOwner}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.southBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.southBoundaryOwner}</div>} */}
//                                 {formik.touched. southBoundaryOwner && formik.errors. southBoundaryOwner && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors. southBoundaryOwner}</div>
//                         )}  
//                             </div>
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="text-center">

//                          {/* Back Button */}
//                          <Button
//                             variant="secondary"
//                             className="mt-3 me-3"
//                             onClick={() => navigate(-1)}  // Navigate back
//                         >
//                             Back
//                         </Button>
                        
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

// export default PropertyBoundaries;

// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { PropertyBoundaries_api } from "../apiUrls";

// const PropertyBoundaries = ({ onNext }) => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [loading, setLoading] = useState(false);

//   // ✅ token, user and session
//   const token = localStorage.getItem("token");
//   const user_id = localStorage.getItem("user_id");
//   const session_id =
//     searchParams.get("session_id") || sessionStorage.getItem("sessionId");

//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("PropertyBoundaries")) || {
//         eastBoundaryType: "",
//         eastBoundaryExtent: "",
//         eastBoundaryOwner: "",
//         westBoundaryType: "",
//         westBoundaryExtent: "",
//         westBoundaryOwner: "",
//         northBoundaryType: "",
//         northBoundaryExtent: "",
//         northBoundaryOwner: "",
//         southBoundaryType: "",
//         southBoundaryExtent: "",
//         southBoundaryOwner: "",
//       },

//     validate: (values) => {
//       const errors = {};
//       if (!values.eastBoundaryType) errors.eastBoundaryType = "*required*";
//       if (!values.eastBoundaryExtent) errors.eastBoundaryExtent = "*required*";
//       if (!values.eastBoundaryOwner) errors.eastBoundaryOwner = "*required*";
//       if (!values.westBoundaryType) errors.westBoundaryType = "*required*";
//       if (!values.westBoundaryExtent) errors.westBoundaryExtent = "*required*";
//       if (!values.westBoundaryOwner) errors.westBoundaryOwner = "*required*";
//       if (!values.northBoundaryType) errors.northBoundaryType = "*required*";
//       if (!values.northBoundaryExtent) errors.northBoundaryExtent = "*required*";
//       if (!values.northBoundaryOwner) errors.northBoundaryOwner = "*required*";
//       if (!values.southBoundaryType) errors.southBoundaryType = "*required*";
//       if (!values.southBoundaryExtent) errors.southBoundaryExtent = "*required*";
//       if (!values.southBoundaryOwner) errors.southBoundaryOwner = "*required*";
//       return errors;
//     },

//     onSubmit: async (values) => {
//       if (!token || !user_id || !session_id) {
//         alert("Authentication or session missing. Please login or start a session.");
//         navigate("/login");
//         return;
//       }

//       setLoading(true);

//       const payload = { ...values, user_id, session_id };
//       console.log("Payload sending to API:", payload);

//       try {
//         const response = await fetch(PropertyBoundaries_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // ✅ token added
//           },
//           body: JSON.stringify(payload),
//         });

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);
//         const data = await response.json();
//         console.log("API response:", data);

//         // ✅ save form data
//         sessionStorage.setItem("PropertyBoundaries", JSON.stringify(values));

//         if (onNext) onNext();
//       } catch (error) {
//         console.error("Error during API call:", error);
//         alert("Failed to save data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // ✅ keep data in sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("PropertyBoundaries", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // ✅ prefill on load
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("PropertyBoundaries"));
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         paddingBottom: "50px",
//       }}
//     >
//       <div style={{ width: "100%", maxWidth: "800px", padding: "20px" }}>
//         <h3 className="text-center">Property Boundaries</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           {/* ================= EAST ================= */}
//           <h3 className="text-center">EAST</h3>
//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">East Boundary Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="eastBoundaryType"
//               value={formik.values.eastBoundaryType}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.eastBoundaryType && formik.errors.eastBoundaryType && (
//               <div className="text-danger fw-bold">{formik.errors.eastBoundaryType}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">East Boundary Extent</Form.Label>
//             <Form.Control
//               type="text"
//               name="eastBoundaryExtent"
//               value={formik.values.eastBoundaryExtent}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.eastBoundaryExtent && formik.errors.eastBoundaryExtent && (
//               <div className="text-danger fw-bold">{formik.errors.eastBoundaryExtent}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">East Boundary Owner</Form.Label>
//             <Form.Control
//               type="text"
//               name="eastBoundaryOwner"
//               value={formik.values.eastBoundaryOwner}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.eastBoundaryOwner && formik.errors.eastBoundaryOwner && (
//               <div className="text-danger fw-bold">{formik.errors.eastBoundaryOwner}</div>
//             )}
//           </Form.Group>

//           {/* ================= WEST ================= */}
//           <h3 className="text-center">WEST</h3>
//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">West Boundary Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="westBoundaryType"
//               value={formik.values.westBoundaryType}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.westBoundaryType && formik.errors.westBoundaryType && (
//               <div className="text-danger fw-bold">{formik.errors.westBoundaryType}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">West Boundary Extent</Form.Label>
//             <Form.Control
//               type="text"
//               name="westBoundaryExtent"
//               value={formik.values.westBoundaryExtent}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.westBoundaryExtent && formik.errors.westBoundaryExtent && (
//               <div className="text-danger fw-bold">{formik.errors.westBoundaryExtent}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">West Boundary Owner</Form.Label>
//             <Form.Control
//               type="text"
//               name="westBoundaryOwner"
//               value={formik.values.westBoundaryOwner}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.westBoundaryOwner && formik.errors.westBoundaryOwner && (
//               <div className="text-danger fw-bold">{formik.errors.westBoundaryOwner}</div>
//             )}
//           </Form.Group>

//           {/* ================= NORTH ================= */}
//           <h3 className="text-center">NORTH</h3>
//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">North Boundary Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="northBoundaryType"
//               value={formik.values.northBoundaryType}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.northBoundaryType && formik.errors.northBoundaryType && (
//               <div className="text-danger fw-bold">{formik.errors.northBoundaryType}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">North Boundary Extent</Form.Label>
//             <Form.Control
//               type="text"
//               name="northBoundaryExtent"
//               value={formik.values.northBoundaryExtent}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.northBoundaryExtent && formik.errors.northBoundaryExtent && (
//               <div className="text-danger fw-bold">{formik.errors.northBoundaryExtent}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">North Boundary Owner</Form.Label>
//             <Form.Control
//               type="text"
//               name="northBoundaryOwner"
//               value={formik.values.northBoundaryOwner}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.northBoundaryOwner && formik.errors.northBoundaryOwner && (
//               <div className="text-danger fw-bold">{formik.errors.northBoundaryOwner}</div>
//             )}
//           </Form.Group>

//           {/* ================= SOUTH ================= */}
//           <h3 className="text-center">SOUTH</h3>
//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">South Boundary Type</Form.Label>
//             <Form.Control
//               type="text"
//               name="southBoundaryType"
//               value={formik.values.southBoundaryType}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.southBoundaryType && formik.errors.southBoundaryType && (
//               <div className="text-danger fw-bold">{formik.errors.southBoundaryType}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">South Boundary Extent</Form.Label>
//             <Form.Control
//               type="text"
//               name="southBoundaryExtent"
//               value={formik.values.southBoundaryExtent}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.southBoundaryExtent && formik.errors.southBoundaryExtent && (
//               <div className="text-danger fw-bold">{formik.errors.southBoundaryExtent}</div>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fs-3">South Boundary Owner</Form.Label>
//             <Form.Control
//               type="text"
//               name="southBoundaryOwner"
//               value={formik.values.southBoundaryOwner}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               style={{ height: "40px", fontSize: "20px" }}
//             />
//             {formik.touched.southBoundaryOwner && formik.errors.southBoundaryOwner && (
//               <div className="text-danger fw-bold">{formik.errors.southBoundaryOwner}</div>
//             )}
//           </Form.Group>

//           <div className="text-center">
//             <Button variant="secondary" className="mt-3 me-3" onClick={() => navigate(-1)}>
//               Back
//             </Button>
//             <Button type="submit" variant="primary" className="mt-3" disabled={loading}>
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default PropertyBoundaries;


// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";

// const PropertyBoundaries = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("PropertyBoundaries")) || {
//         eastBoundaryType: "",
//         eastBoundaryExtent: "",
//         eastBoundaryOwner: "",
//         westBoundaryType: "",
//         westBoundaryExtent: "",
//         westBoundaryOwner: "",
//         northBoundaryType: "",
//         northBoundaryExtent: "",
//         northBoundaryOwner: "",
//         southBoundaryType: "",
//         southBoundaryExtent: "",
//         southBoundaryOwner: "",
//       },
//     validate: (values) => {
//       let errors = {};
//       if (!values.eastBoundaryType) errors.eastBoundaryType = "*required*";
//       if (!values.eastBoundaryExtent) errors.eastBoundaryExtent = "*required*";
//       if (!values.eastBoundaryOwner) errors.eastBoundaryOwner = "*required*";

//       if (!values.westBoundaryType) errors.westBoundaryType = "*required*";
//       if (!values.westBoundaryExtent) errors.westBoundaryExtent = "*required*";
//       if (!values.westBoundaryOwner) errors.westBoundaryOwner = "*required*";

//       if (!values.northBoundaryType) errors.northBoundaryType = "*required*";
//       if (!values.northBoundaryExtent) errors.northBoundaryExtent = "*required*";
//       if (!values.northBoundaryOwner) errors.northBoundaryOwner = "*required*";

//       if (!values.southBoundaryType) errors.southBoundaryType = "*required*";
//       if (!values.southBoundaryExtent) errors.southBoundaryExtent = "*required*";
//       if (!values.southBoundaryOwner) errors.southBoundaryOwner = "*required*";

//       return errors;
//     },
//     onSubmit: (values) => {
//       console.log("Form Submitted:", values);
//       sessionStorage.setItem("PropertyBoundaries", JSON.stringify(values));
//       onNext();
//     },
//   });

//   // Save form data to sessionStorage on change
//   useEffect(() => {
//     sessionStorage.setItem("PropertyBoundaries", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Load saved data on mount
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("PropertyBoundaries"));
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         paddingBottom: "50px",
//       }}
//     >
//       <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
//         <h3 className="text-center">Property Boundaries</h3>
//         <Form onSubmit={formik.handleSubmit}>
//           {/* EAST */}
//           <h3 className="text-center">EAST</h3>
//           <div className="d-flex flex-column pt-3 pb-3">
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">East Boundary Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="eastBoundaryType"
//                   value={formik.values.eastBoundaryType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.eastBoundaryType && formik.errors.eastBoundaryType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.eastBoundaryType}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">East Boundary Extent</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="eastBoundaryExtent"
//                   value={formik.values.eastBoundaryExtent}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.eastBoundaryExtent && formik.errors.eastBoundaryExtent && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.eastBoundaryExtent}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">East Boundary Owner</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="eastBoundaryOwner"
//                   value={formik.values.eastBoundaryOwner}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.eastBoundaryOwner && formik.errors.eastBoundaryOwner && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.eastBoundaryOwner}</div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* WEST */}
//           <h3 className="text-center">WEST</h3>
//           <div className="d-flex flex-column pt-3 pb-3">
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">West Boundary Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="westBoundaryType"
//                   value={formik.values.westBoundaryType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.westBoundaryType && formik.errors.westBoundaryType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.westBoundaryType}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">West Boundary Extent</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="westBoundaryExtent"
//                   value={formik.values.westBoundaryExtent}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.westBoundaryExtent && formik.errors.westBoundaryExtent && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.westBoundaryExtent}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">West Boundary Owner</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="westBoundaryOwner"
//                   value={formik.values.westBoundaryOwner}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.westBoundaryOwner && formik.errors.westBoundaryOwner && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.westBoundaryOwner}</div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* NORTH */}
//           <h3 className="text-center">NORTH</h3>
//           <div className="d-flex flex-column pt-3 pb-3">
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">North Boundary Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="northBoundaryType"
//                   value={formik.values.northBoundaryType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.northBoundaryType && formik.errors.northBoundaryType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.northBoundaryType}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">North Boundary Extent</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="northBoundaryExtent"
//                   value={formik.values.northBoundaryExtent}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.northBoundaryExtent && formik.errors.northBoundaryExtent && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.northBoundaryExtent}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">North Boundary Owner</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="northBoundaryOwner"
//                   value={formik.values.northBoundaryOwner}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.northBoundaryOwner && formik.errors.northBoundaryOwner && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.northBoundaryOwner}</div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* SOUTH */}
//           <h3 className="text-center">SOUTH</h3>
//           <div className="d-flex flex-column pt-3 pb-3">
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">South Boundary Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="southBoundaryType"
//                   value={formik.values.southBoundaryType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.southBoundaryType && formik.errors.southBoundaryType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.southBoundaryType}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">South Boundary Extent</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="southBoundaryExtent"
//                   value={formik.values.southBoundaryExtent}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.southBoundaryExtent && formik.errors.southBoundaryExtent && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.southBoundaryExtent}</div>
//                 )}
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">South Boundary Owner</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="southBoundaryOwner"
//                   value={formik.values.southBoundaryOwner}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.southBoundaryOwner && formik.errors.southBoundaryOwner && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.southBoundaryOwner}</div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="text-center mt-3">
//             <Button variant="secondary" className="me-3" onClick={() => navigate(-1)}>
//               Back
//             </Button>
//             <Button type="submit" variant="primary" disabled={loading}>
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default PropertyBoundaries;

// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";

// const PropertyBoundaries = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Initial values
//   const initialValues = {
//     eastBoundaryType: "",
//     eastBoundaryExtent: "",
//     eastBoundaryOwner: "",
//     westBoundaryType: "",
//     westBoundaryExtent: "",
//     westBoundaryOwner: "",
//     northBoundaryType: "",
//     northBoundaryExtent: "",
//     northBoundaryOwner: "",
//     southBoundaryType: "",
//     southBoundaryExtent: "",
//     southBoundaryOwner: "",
//   };

//   // Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("PropertyBoundaries")) || initialValues,
//     validate: (values) => {
//       let errors = {};
//       Object.keys(values).forEach((key) => {
//         if (!values[key]) errors[key] = "*required*";
//       });
//       return errors;
//     },
//     onSubmit: (values) => {
//       setLoading(true);
//       // Save to sessionStorage
//       sessionStorage.setItem("PropertyBoundaries", JSON.stringify(values));
//       setLoading(false);
//       // Call parent onNext to move forward
//       onNext();
//     },
//   });

//   // Save form data to sessionStorage on every change
//   useEffect(() => {
//     sessionStorage.setItem("PropertyBoundaries", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Load data from sessionStorage on mount
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("PropertyBoundaries"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         paddingBottom: "50px",
//       }}
//     >
//       <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
//         <h3 className="text-center">Property Boundaries</h3>
//         <Form onSubmit={formik.handleSubmit}>
//           {["EAST", "WEST", "NORTH", "SOUTH"].map((direction) => (
//             <div key={direction}>
//               <h3 className="text-center">{direction}</h3>
//               <div className="d-flex flex-column pt-3 pb-3">
//                 {["Type", "Extent", "Owner"].map((field) => {
//                   const name = `${direction.toLowerCase()}Boundary${field}`;
//                   return (
//                     <div className="row align-items-center mb-2" key={name}>
//                       <div className="col-12 col-md-6">
//                         <Form.Label className="fs-3">{`${direction} Boundary ${field}`}</Form.Label>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <Form.Control
//                           type="text"
//                           name={name}
//                           value={formik.values[name]}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                         />
//                         {formik.touched[name] && formik.errors[name] && (
//                           <div className="text-danger fw-bold fs-5">{formik.errors[name]}</div>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}

//           {/* Buttons */}
//           <div className="text-center mt-3">
//             <Button variant="secondary" className="me-3" onClick={() => navigate(-1)}>
//               Back
//             </Button>
//             <Button type="submit" variant="primary" disabled={loading}>
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default PropertyBoundaries;
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { getToken } from "../auth"; // helper to get token
import { PropertyBoundaries_api } from "../apiUrls"; // backend API URL

const PropertyBoundaries = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get sessionId and user_id from sessionStorage
  const session_id = sessionStorage.getItem("sessionId");
  const user_id = sessionStorage.getItem("user_id");

  // Initial values
  const initialValues = {
    eastBoundaryType: "",
    eastBoundaryExtent: "",
    eastBoundaryOwner: "",
    westBoundaryType: "",
    westBoundaryExtent: "",
    westBoundaryOwner: "",
    northBoundaryType: "",
    northBoundaryExtent: "",
    northBoundaryOwner: "",
    southBoundaryType: "",
    southBoundaryExtent: "",
    southBoundaryOwner: "",
  };

  const formik = useFormik({
    initialValues: JSON.parse(sessionStorage.getItem("PropertyBoundaries")) || initialValues,

    validate: (values) => {
      let errors = {};
      Object.keys(values).forEach((key) => {
        if (!values[key]) errors[key] = "*required*";
      });
      return errors;
    },

    onSubmit: async (values) => {
      setLoading(true);

      const token = getToken() || sessionStorage.getItem("token");
      if (!token || !user_id || !session_id) {
        alert("Authentication required. Please login.");
        navigate("/login");
        setLoading(false);
        return;
      }

      const dataToSend = {
        session_id,
        user_id,
        ...values,
      };

      try {
        const response = await fetch(PropertyBoundaries_api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const data = await response.json();
        console.log("API response:", data);

        // Save form data to sessionStorage
        sessionStorage.setItem("PropertyBoundaries", JSON.stringify(values));

        // Move to next page
        if (onNext) onNext();
        else navigate(`/nextpage?sessionid=${session_id}`);
      } catch (error) {
        console.error("Error during API call:", error);
        alert("Failed to save data. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  // Load backend data only if sessionStorage is empty
  useEffect(() => {
    const token = getToken() || sessionStorage.getItem("token");
    const savedData = JSON.parse(sessionStorage.getItem("PropertyBoundaries"));
    if (!token || !session_id || savedData) return;

    (async () => {
      try {
        const res = await fetch(`${PropertyBoundaries_api}?session_id=${session_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        if (data) formik.setValues({ ...formik.values, ...data });
      } catch (err) {
        console.error("Error fetching session data:", err);
      }
    })();
  }, []);

  // Auto-save to sessionStorage on every change
  useEffect(() => {
    sessionStorage.setItem("PropertyBoundaries", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
        <h3 className="text-center">Property Boundaries</h3>
        <Form onSubmit={formik.handleSubmit}>
          {/* EAST */}
          <h3 className="text-center">EAST</h3>
          <div className="d-flex flex-column pt-3 pb-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">East Boundary Type</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="eastBoundaryType"
                  value={formik.values.eastBoundaryType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.eastBoundaryType && formik.errors.eastBoundaryType && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.eastBoundaryType}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">East Boundary Extent</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="eastBoundaryExtent"
                  value={formik.values.eastBoundaryExtent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.eastBoundaryExtent && formik.errors.eastBoundaryExtent && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.eastBoundaryExtent}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">East Boundary Owner</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="eastBoundaryOwner"
                  value={formik.values.eastBoundaryOwner}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.eastBoundaryOwner && formik.errors.eastBoundaryOwner && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.eastBoundaryOwner}</div>
                )}
              </div>
            </div>
          </div>

          {/* WEST */}
          <h3 className="text-center">WEST</h3>
          <div className="d-flex flex-column pt-3 pb-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">West Boundary Type</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="westBoundaryType"
                  value={formik.values.westBoundaryType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.westBoundaryType && formik.errors.westBoundaryType && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.westBoundaryType}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">West Boundary Extent</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="westBoundaryExtent"
                  value={formik.values.westBoundaryExtent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.westBoundaryExtent && formik.errors.westBoundaryExtent && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.westBoundaryExtent}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">West Boundary Owner</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="westBoundaryOwner"
                  value={formik.values.westBoundaryOwner}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.westBoundaryOwner && formik.errors.westBoundaryOwner && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.westBoundaryOwner}</div>
                )}
              </div>
            </div>
          </div>

          {/* NORTH */}
          <h3 className="text-center">NORTH</h3>
          <div className="d-flex flex-column pt-3 pb-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">North Boundary Type</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="northBoundaryType"
                  value={formik.values.northBoundaryType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.northBoundaryType && formik.errors.northBoundaryType && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.northBoundaryType}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">North Boundary Extent</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="northBoundaryExtent"
                  value={formik.values.northBoundaryExtent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.northBoundaryExtent && formik.errors.northBoundaryExtent && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.northBoundaryExtent}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">North Boundary Owner</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="northBoundaryOwner"
                  value={formik.values.northBoundaryOwner}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.northBoundaryOwner && formik.errors.northBoundaryOwner && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.northBoundaryOwner}</div>
                )}
              </div>
            </div>
          </div>

          {/* SOUTH */}
          <h3 className="text-center">SOUTH</h3>
          <div className="d-flex flex-column pt-3 pb-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">South Boundary Type</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="southBoundaryType"
                  value={formik.values.southBoundaryType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.southBoundaryType && formik.errors.southBoundaryType && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.southBoundaryType}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">South Boundary Extent</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="southBoundaryExtent"
                  value={formik.values.southBoundaryExtent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.southBoundaryExtent && formik.errors.southBoundaryExtent && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.southBoundaryExtent}</div>
                )}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Form.Label className="fs-3">South Boundary Owner</Form.Label>
              </div>
              <div className="col-12 col-md-6">
                <Form.Control
                  type="text"
                  name="southBoundaryOwner"
                  value={formik.values.southBoundaryOwner}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                />
                {formik.touched.southBoundaryOwner && formik.errors.southBoundaryOwner && (
                  <div className="text-danger fw-bold fs-5">{formik.errors.southBoundaryOwner}</div>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center mt-3">
            <Button variant="secondary" className="me-3" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Loading..." : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PropertyBoundaries;