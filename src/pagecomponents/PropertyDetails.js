import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getToken } from "../auth"; // helper to get token
import { PropertyDetails_api } from "../apiUrls";

const PropertyDetails = ({ onNext }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Get sessionId and user_id (match MostRecentDocuments.js logic)
  const session_id = searchParams.get("session_id") || sessionStorage.getItem("sessionId");
  const user_id = sessionStorage.getItem("user_id");

  const formik = useFormik({
    initialValues:
      JSON.parse(sessionStorage.getItem("PropertyDetails")) || {
        propertyDoorNumber: "",
        nearbyDoor: "",
        propertyAssessmentNumber: "",
        propertySurveyNumber: "",
        extentOfProperty: "",
        propertyType: "",
        propertyNature: "",
      },

    validate: (values) => {
      const errors = {};
      const req = "*required*";
      if (!values.propertyDoorNumber) errors.propertyDoorNumber = req;
      if (!values.nearbyDoor) errors.nearbyDoor = req;
      if (!values.propertyAssessmentNumber) errors.propertyAssessmentNumber = req;
      if (!values.propertySurveyNumber) errors.propertySurveyNumber = req;
      if (!values.extentOfProperty) errors.extentOfProperty = req;
      if (!values.propertyType) errors.propertyType = req;
      if (!values.propertyNature) errors.propertyNature = req;
      return errors;
    },

    onSubmit: async (values) => {
      setLoading(true);
      const token = getToken() || sessionStorage.getItem("token");

      if (!token || !user_id || !session_id) {
        alert("Authentication required. Please login or start a session.");
        navigate("/login");
        setLoading(false);
        return;
      }

      const dataToSend = { session_id, user_id, ...values };
      console.log("Payload sending to API:", dataToSend);

      try {
        const response = await fetch(PropertyDetails_api, {
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
        sessionStorage.setItem("PropertyDetails", JSON.stringify(values));

        // Navigate to next page
        if (onNext) onNext();
      } catch (error) {
        console.error("Error during API call:", error);
        alert("Failed to save data. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  // Auto-save form data to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("PropertyDetails", JSON.stringify(formik.values));
  }, [formik.values]);

  // Prefill form data on component mount
  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("PropertyDetails"));
    if (savedData) formik.setValues(savedData);
  }, []);

  return (
    <div>
      <h2 className="text-center">Property Details</h2>
      <div style={{ height: "100vh", paddingLeft: "50px", paddingTop: "10px", overflowX: "hidden" }}>
        <Form onSubmit={formik.handleSubmit}>
          {[
            { label: "Property Door Number", name: "propertyDoorNumber", type: "text" },
            { label: "Is Nearby Door Number?", name: "nearbyDoor", type: "radio", options: ["Yes", "No"] },
            { label: "Property Assessment Number", name: "propertyAssessmentNumber", type: "text" },
            { label: "Property Survey Number", name: "propertySurveyNumber", type: "text" },
            { label: "Total Extent of Property", name: "extentOfProperty", type: "text" },
            { label: "Select Property Type", name: "propertyType", type: "select", options: ["RCC Dhaba House", "Site", "Tiled House"] },
            { label: "Select Property Nature", name: "propertyNature", type: "select", options: ["Commercial", "Residential"] },
          ].map((field) => (
            <Form.Group className="mb-3" controlId={field.name} key={field.name}>
              <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                <div className="col-12 col-lg-5">
                  <Form.Label className="fs-3">{field.label}</Form.Label>
                </div>
                <div style={{ width: "350px" }}>
                  {field.type === "select" ? (
                    <Form.Select
                      name={field.name}
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ fontSize: "20px", height: "40px" }}
                    >
                      <option value="">Select</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </Form.Select>
                  ) : field.type === "radio" ? (
                    <div className="d-flex gap-3">
                      {field.options.map((opt) => (
                        <Form.Check
                          key={opt}
                          type="radio"
                          label={opt}
                          name={field.name}
                          value={opt}
                          checked={formik.values[field.name] === opt}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      ))}
                    </div>
                  ) : (
                    <Form.Control
                      type={field.type || "text"}
                      name={field.name}
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ fontSize: "20px", height: "40px" }}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && (
                    <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
                  )}
                </div>
              </div>
            </Form.Group>
          ))}

          <div className="text-center">
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

export default PropertyDetails;




// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { getToken } from "../auth"; // helper to get token
// import { PropertyDetails_api } from "../apiUrls";

// const PropertyDetails = ({ onNext }) => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [loading, setLoading] = useState(false);

//   // Get token, user_id, and session_id
//   //const token = localStorage.getItem("token");
//   const user_id = localStorage.getItem("user_id");
//   const session_id = searchParams.get("session_id") || sessionStorage.getItem("sessionId");

//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("PropertyDetails")) || {
//         propertyDoorNumber: "",
//         nearbyDoor: "",
//         propertyAssessmentNumber: "",
//         propertySurveyNumber: "",
//         extentOfProperty: "",
//         propertyType: "",
//         propertyNature: "",
//       },

//     validate: (values) => {
//       let errors = {};
//       if (!values.propertyDoorNumber) errors.propertyDoorNumber = "*required*";
//       if (!values.nearbyDoor) errors.nearbyDoor = "*required*";
//       if (!values.propertyAssessmentNumber) errors.propertyAssessmentNumber = "*required*";
//       if (!values.propertySurveyNumber) errors.propertySurveyNumber = "*required*";
//       if (!values.extentOfProperty) errors.extentOfProperty = "*required*";
//       if (!values.propertyType) errors.propertyType = "*required*";
//       if (!values.propertyNature) errors.propertyNature = "*required*";
//       return errors;
//     },

//     onSubmit: async (values) => {
//       // ✅ Check authentication and session first
//       if (!token || !user_id || !session_id) {
//         alert("Authentication or session missing. Please login or start a session.");
//         navigate("/login");
//         return;
//       }

//       setLoading(true);

//       const payload = { ...values, user_id, session_id };
//       console.log("Payload sending to API:", payload);

//       try {
//         const response = await fetch(PropertyDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(payload),
//         });

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);

//         const data = await response.json();
//         console.log("API response:", data);

//         // Save to sessionStorage
//         sessionStorage.setItem("PropertyDetails", JSON.stringify(values));

//         // Proceed to next page
//         if (onNext) onNext();
//       } catch (error) {
//         console.error("Error during API call:", error);
//         alert("Failed to save data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // Auto-save form data to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("PropertyDetails", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Prefill form data on load
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("PropertyDetails"));
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3 className="text-center">Property Details</h3>
//       <Form onSubmit={formik.handleSubmit}>
//         {/* Property Door Number */}
//         <Form.Group className="mb-3" controlId="propertyDoorNumber">
//           <Form.Label className="fs-3">Property Door Number</Form.Label>
//           <Form.Control
//             type="text"
//             name="propertyDoorNumber"
//             value={formik.values.propertyDoorNumber}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: "40px", fontSize: "20px" }}
//           />
//           {formik.touched.propertyDoorNumber && formik.errors.propertyDoorNumber && (
//             <div className="text-danger fw-bold">{formik.errors.propertyDoorNumber}</div>
//           )}
//         </Form.Group>

//         {/* Nearby Door */}
//         <Form.Group className="mb-3" controlId="nearbyDoor">
//           <Form.Label className="fs-3">Is Nearby Door Number?</Form.Label>
//           <div className="d-flex gap-3">
//             {["Yes", "No"].map((option) => (
//               <Form.Check
//                 key={option}
//                 type="radio"
//                 label={option}
//                 name="nearbyDoor"
//                 value={option}
//                 checked={formik.values.nearbyDoor === option}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//             ))}
//           </div>
//           {formik.touched.nearbyDoor && formik.errors.nearbyDoor && (
//             <div className="text-danger fw-bold">{formik.errors.nearbyDoor}</div>
//           )}
//         </Form.Group>

//         {/* Property Assessment Number */}
//         <Form.Group className="mb-3" controlId="propertyAssessmentNumber">
//           <Form.Label className="fs-3">Property Assessment Number</Form.Label>
//           <Form.Control
//             type="text"
//             name="propertyAssessmentNumber"
//             value={formik.values.propertyAssessmentNumber}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: "40px", fontSize: "20px" }}
//           />
//           {formik.touched.propertyAssessmentNumber && formik.errors.propertyAssessmentNumber && (
//             <div className="text-danger fw-bold">{formik.errors.propertyAssessmentNumber}</div>
//           )}
//         </Form.Group>

//         {/* Property Survey Number */}
//         <Form.Group className="mb-3" controlId="propertySurveyNumber">
//           <Form.Label className="fs-3">Property Survey Number</Form.Label>
//           <Form.Control
//             type="text"
//             name="propertySurveyNumber"
//             value={formik.values.propertySurveyNumber}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: "40px", fontSize: "20px" }}
//           />
//           {formik.touched.propertySurveyNumber && formik.errors.propertySurveyNumber && (
//             <div className="text-danger fw-bold">{formik.errors.propertySurveyNumber}</div>
//           )}
//         </Form.Group>

//         {/* Extent of Property */}
//         <Form.Group className="mb-3" controlId="extentOfProperty">
//           <Form.Label className="fs-3">Total Extent of Property</Form.Label>
//           <Form.Control
//             type="text"
//             name="extentOfProperty"
//             value={formik.values.extentOfProperty}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: "40px", fontSize: "20px" }}
//           />
//           {formik.touched.extentOfProperty && formik.errors.extentOfProperty && (
//             <div className="text-danger fw-bold">{formik.errors.extentOfProperty}</div>
//           )}
//         </Form.Group>

//         {/* Property Type */}
//         <Form.Group className="mb-3" controlId="propertyType">
//           <Form.Label className="fs-3">Select Property Type</Form.Label>
//           <Form.Select
//             name="propertyType"
//             value={formik.values.propertyType}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: "40px", fontSize: "20px" }}
//           >
//             <option value="">Select</option>
//             <option value="RCC Dhaba House">RCC Dhaba House</option>
//             <option value="Site">Site</option>
//             <option value="Tiled House">Tiled House</option>
//           </Form.Select>
//           {formik.touched.propertyType && formik.errors.propertyType && (
//             <div className="text-danger fw-bold">{formik.errors.propertyType}</div>
//           )}
//         </Form.Group>

//         {/* Property Nature */}
//         <Form.Group className="mb-3" controlId="propertyNature">
//           <Form.Label className="fs-3">Select Property Nature</Form.Label>
//           <Form.Select
//             name="propertyNature"
//             value={formik.values.propertyNature}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: "40px", fontSize: "20px" }}
//           >
//             <option value="">Select</option>
//             <option value="Commercial">Commercial</option>
//             <option value="Residential">Residential</option>
//           </Form.Select>
//           {formik.touched.propertyNature && formik.errors.propertyNature && (
//             <div className="text-danger fw-bold">{formik.errors.propertyNature}</div>
//           )}
//         </Form.Group>

//         <div className="text-center mt-3">
//           <Button variant="secondary" className="me-3" onClick={() => navigate(-1)}>
//             Back
//           </Button>
//           <Button type="submit" variant="primary" disabled={loading}>
//             {loading ? "Loading..." : "Next"}
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default PropertyDetails;


 
 
// export default PropertyDetails;
// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom"; 
// import { Propertydetails_api } from "../apiUrls";

// const PropertyDetails = ({ onNext }) => {
//   const navigate = useNavigate();  // Initialize navigate
//   const [loading, setLoading] = useState(false);
//   const formik = useFormik({
//     initialValues:JSON.parse(sessionStorage.getItem("PropertyDetails")) || {
//       propertyDoorNumber: "",
//       nearbyDoor: "", // Yes or No (radio buttons)
//       propertyAssessmentNumber: "",
//       propertySurveyNumber: "",
//       extentOfProperty: "",
//       propertyType: "",  
//       propertyNature: "", 
//     },
//     // onSubmit: (values) => {
//     //   console.log("Property Details Submitted:", values);
//     //   onNext();
//     // },
//     onSubmit: async (values) => {
//       console.log('Form Submitted:', values);

//       // Set loading state to true
//       // setLoading(true);

//       // Replace with your actual API endpoint
//       // const apiUrl = Propertydetails_api;

//       // try {
//       //     const response = await fetch(apiUrl, {
//       //         method: 'POST',
//       //         headers: {
//       //             'Content-Type': 'application/json',
//       //         },
//       //         body: JSON.stringify(values),
//       //     });

//       //     if (response.ok) {
//       //         const data = await response.json();
//       //         console.log("API response:", data);

//       //         // After a successful API call, call onNext
//               onNext();
//       //     } else {
//       //         // Handle API error
//       //         console.error("API Error:", response.statusText);
//       //         // Optionally show an error message to the user
//       //     }
//       // } catch (error) {
//       //     console.error("Error during API call:", error);
//       //     // Optionally show an error message to the user
//       // } finally {
//       //     // Set loading state to false
//       //     setLoading(false);
//       // }
//   },
//     validate: (values) => {
//       let errors = {};
//       if (!values.propertyDoorNumber) {
//         errors.propertyDoorNumber = "*required*";
//       }
//       if (!values.nearbyDoor) {
//         errors.nearbyDoor = "*required*";
//       }
//       if (!values.propertyAssessmentNumber) {
//         errors.propertyAssessmentNumber = "*required*";
//       }
//       if (!values.propertySurveyNumber) {
//         errors.propertySurveyNumber = "*required*";
//       }
//       if (!values.extentOfProperty) {
//         errors.extentOfProperty = "*required*";
//       }
//       if (!values.propertyType) {
//         errors.propertyType = "*required*";
//       }
//       if (!values.propertyNature) {
//         errors.propertyNature = "*required*";
//       }
//       return errors;
//     },
//   });
// // Save form data to sessionStorage on change
//            useEffect(() => {
//              sessionStorage.setItem("PropertyDetails", JSON.stringify(formik.values));
//          }, [formik.values]);
       
//          // Retrieve form data from sessionStorage on component mount
//          useEffect(() => {
//              const savedData = JSON.parse(sessionStorage.getItem("PropertyDetails"));
//              if (savedData) {
//                  formik.setValues(savedData);
//              }
//          }, []);     
     
//   return (
//     <div>
//       <h3 className="text-center">Property Details</h3>
//       <div
//         style={{
//           height: "100vh",
//           paddingLeft: "50px",
//           paddingTop: "10px",
//           overflowX: "hidden",
//         }}
//       >
//         <Form onSubmit={formik.handleSubmit}>
//           {/* Property Door Number */}
//           <Form.Group controlId="propertyDoorNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Property Door Number</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="propertyDoorNumber"
//                   value={formik.values.propertyDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {/* {formik.errors.propertyDoorNumber && (
//                   <div className="text-danger fw-bold">
//                     {formik.errors.propertyDoorNumber}
//                   </div>
//                 )} */}
//              {formik.touched.  propertyDoorNumber && formik.errors.  propertyDoorNumber && (
//               <div className="text-danger fw-bold ">{formik.errors.  propertyDoorNumber}</div>
//                 )}

//               </div>
//             </div>
//           </Form.Group>

//           {/* Is Nearby Door */}
//           <Form.Group controlId="nearbyDoor">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Is Nearby Door Number?</Form.Label>
//               </div>
//               <div className="d-flex flex-row col-12">
//                 <Form.Check className="me-3"
//                   type="radio"
//                   label="Yes"
//                   name="nearbyDoor"
//                   value="Yes"
//                   checked={formik.values.nearbyDoor === "Yes"}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Check 
//                   type="radio"
//                   label="No"
//                   name="nearbyDoor"
//                   value="No"
//                   checked={formik.values.nearbyDoor === "No"}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                  {formik.touched.nearbyDoor    && formik.errors.nearbyDoor    && (
//                             <div className="text-danger fw-bold  ">{formik.errors.nearbyDoor   }</div>
//                             )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Property Assessment Number */}
//           <Form.Group controlId="propertyAssessmentNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">
//                   Property Assessment Number
//                 </Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="propertyAssessmentNumber"
//                   value={formik.values.propertyAssessmentNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                  {formik.touched.  propertyAssessmentNumber && formik.errors.  propertyAssessmentNumber && (
//                             <div className="text-danger fw-bold  ">{formik.errors.  propertyAssessmentNumber}</div>
//                             )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Property Survey Number */}
//           <Form.Group controlId="propertySurveyNumber">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Property Survey Number</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="propertySurveyNumber"
//                   value={formik.values.propertySurveyNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                 {formik.touched.propertySurveyNumber && formik.errors. propertySurveyNumber && (
//                             <div className="text-danger fw-bold ">{formik.errors.propertySurveyNumber}</div>
//                             )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Extent Of Property */}
//           <Form.Group controlId="extentOfProperty">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Total Extent of Property</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Control
//                   type="text"
//                   name="extentOfProperty"
//                   value={formik.values.extentOfProperty}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{
//                     width: "300px",
//                     height: "40px",
//                     borderColor: "black",
//                     fontSize: "20px",
//                   }}
//                 />
//                  {formik.touched. extentOfProperty && formik.errors. extentOfProperty && (
//                             <div className="text-danger fw-bold  ">{formik.errors. extentOfProperty}</div>
//                             )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Property Type */}
//           <Form.Group controlId="propertyType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Select Property Type</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="propertyType"
//                   value={formik.values.propertyType}
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
//                   <option value="RCC Dhaba House">RCC Dhaba House</option>
//                   <option value="Site">Site</option>
//                   <option value="Tiled House">Tiled House</option>
                   
//                 </Form.Select>
//                 {formik.touched. propertyType   && formik.errors. propertyType  && (
//                             <div className="text-danger fw-bold  ">{formik.errors.propertyType }</div>
//                             )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* Property Nature */}
//           <Form.Group controlId="propertyNature">
//             <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
//               <div className="col-12" style={{ width: "420px" }}>
//                 <Form.Label className="fs-3">Select Property Nature</Form.Label>
//               </div>
//               <div className="col-12">
//                 <Form.Select
//                   name="propertyNature"
//                   value={formik.values.propertyNature}
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
//                   <option value="Commercial">Commercial</option>
//                   <option value="Residential">Residential</option>
                  
//                 </Form.Select>
//                 {/* {formik.errors.propertyNature && (
//                   <div className="text-danger fw-bold">
//                     {formik.errors.propertyNature}
//                   </div>
//                 )} */}


//                     {formik.touched. propertyNature && formik.errors. propertyNature && (
//                             <div className="text-danger fw-bold  ">{formik.errors. propertyNature}</div>
//                         )}  


//               </div>
//             </div>
//           </Form.Group>

//           {/* <div className="d-flex justify-content-center pt-5">
//             <Button type="submit">Next</Button>
//           </div> */}
//           <div className="text-center">
                         
//                           {/* Back Button */}
//                         <Button
//                             variant="secondary"
//                             className="mt-3 me-3"
//                             onClick={() => navigate(-1)}  // Navigate back
//                             >
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
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;
