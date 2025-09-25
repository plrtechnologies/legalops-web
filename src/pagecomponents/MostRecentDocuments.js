import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getToken } from "../auth"; // helper to get token
import { MostRecentDocuments_api } from "../apiUrls"; // API URL

const MostRecentDocument = ({ onNext }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Get sessionId and user_id from sessionStorage
  const session_id = sessionStorage.getItem("sessionId");
  const user_id = sessionStorage.getItem("user_id");

  const formik = useFormik({
    initialValues:
      JSON.parse(sessionStorage.getItem("MostRecentDocuments")) || {
        selectDeedType: "",
        dateofRegistration: "",
        documentNumber: "",
        nameofSubregistrarOffice: "",
        locationOfSubregistrarOffice: "",
        subregistrarOfficeMandal: "",
        subregistrarOfficeDistrict: "",
        subregistrarOfficeLocalAuthority: "",
      },

    validate: (values) => {
      const errors = {};
      const req = "*required*";

      if (!values.selectDeedType) errors.selectDeedType = req;
      if (!values.dateofRegistration) errors.dateofRegistration = req;
      if (!values.documentNumber) errors.documentNumber = req;
      if (!values.nameofSubregistrarOffice) errors.nameofSubregistrarOffice = req;
      if (!values.locationOfSubregistrarOffice) errors.locationOfSubregistrarOffice = req;
      if (!values.subregistrarOfficeMandal) errors.subregistrarOfficeMandal = req;
      if (!values.subregistrarOfficeDistrict) errors.subregistrarOfficeDistrict = req;
      if (!values.subregistrarOfficeLocalAuthority) errors.subregistrarOfficeLocalAuthority = req;

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
        const response = await fetch(MostRecentDocuments_api, {
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
        sessionStorage.setItem("MostRecentDocuments", JSON.stringify(values));

        // Navigate to next page
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

  // Prefill from backend only if sessionStorage is empty
  useEffect(() => {
    const token = getToken() || sessionStorage.getItem("token");
    const savedData = JSON.parse(sessionStorage.getItem("MostRecentDocuments"));
    if (!token || !session_id || savedData) return;

    (async () => {
      try {
        const res = await fetch(`${MostRecentDocuments_api}?session_id=${session_id}`, {
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

  // Auto-save form data to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("MostRecentDocuments", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <div>
      <h2 className="text-center">Most Recent Document Details</h2>
      <div style={{ height: "100vh", paddingLeft: "50px", paddingTop: "10px", overflowX: "hidden" }}>
        <Form onSubmit={formik.handleSubmit}>
          {[
            { label: "Select Deed Type", name: "selectDeedType", type: "select", options: ["sale deed", "gift deed", "will deed", "relinquishment deed", "mortgage deed", "partition deed"] },
            { label: "Date of Registration", name: "dateofRegistration", type: "date" },
            { label: "Document Number", name: "documentNumber" },
            { label: "Name of Subregistrar Office", name: "nameofSubregistrarOffice" },
            { label: "Location of Subregistrar Office", name: "locationOfSubregistrarOffice" },
            { label: "Subregistrar Office Mandal", name: "subregistrarOfficeMandal" },
            { label: "Subregistrar Office District", name: "subregistrarOfficeDistrict" },
            { label: "Subregistrar Office Local Authority", name: "subregistrarOfficeLocalAuthority" },
          ].map((field) => (
            <Form.Group controlId={field.name} key={field.name} className="mb-3">
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

export default MostRecentDocument;





// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { getToken } from "../auth"; // Helper to get token
// import { MostRecentDocuments_api } from "../apiUrls"; // API URL

// const MostRecentDocument = ({ onNext }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   // Get sessionId from sessionStorage or URL if needed
//   const session_id = sessionStorage.getItem("sessionId");
//   const user_id = sessionStorage.getItem("user_id");

//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("MostRecentDocuments")) || {
//         selectDeedType: "",
//         dateofRegistration: "",
//         documentNumber: "",
//         nameofSubregistrarOffice: "",
//         locationOfSubregistrarOffice: "",
//         subregistrarOfficeMandal: "",
//         subregistrarOfficeDistrict: "",
//         subregistrarOfficeLocalAuthority: "",
//       },

//     validate: (values) => {
//       const errors = {};
//       const req = "*required*";

//       if (!values.selectDeedType) errors.selectDeedType = req;
//       if (!values.dateofRegistration) errors.dateofRegistration = req;
//       if (!values.documentNumber) errors.documentNumber = req;
//       if (!values.nameofSubregistrarOffice) errors.nameofSubregistrarOffice = req;
//       if (!values.locationOfSubregistrarOffice) errors.locationOfSubregistrarOffice = req;
//       if (!values.subregistrarOfficeMandal) errors.subregistrarOfficeMandal = req;
//       if (!values.subregistrarOfficeDistrict) errors.subregistrarOfficeDistrict = req;
//       if (!values.subregistrarOfficeLocalAuthority) errors.subregistrarOfficeLocalAuthority = req;

//       return errors;
//     },

//     onSubmit: async (values) => {
//       setLoading(true);
//       const token = getToken() || sessionStorage.getItem("token");

//       if (!token || !user_id || !session_id) {
//         alert("Authentication required. Please login.");
//         navigate("/login");
//         setLoading(false);
//         return;
//       }

//       const dataToSend = {
//         session_id,
//         user_id,
//         ...values,
//       };

//       try {
//         const response = await fetch(MostRecentDocuments_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         console.log("Status:", response.status);

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);

//         const data = await response.json();
//         console.log("API response:", data);

//         // Save form data to sessionStorage
//         sessionStorage.setItem("MostRecentDocuments", JSON.stringify(values));

//         // Navigate to next page
//         if (onNext) onNext();
//         else navigate(`/nextpage?sessionid=${session_id}`);
//       } catch (error) {
//         console.error("Error during API call:", error);
//         alert("Failed to save data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // Prefill from backend only if sessionStorage is empty
//   useEffect(() => {
//     const token = getToken() || sessionStorage.getItem("token");
//     const savedData = JSON.parse(sessionStorage.getItem("MostRecentDocuments"));
//     if (!token || !session_id || savedData) return;

//     (async () => {
//       try {
//         const res = await fetch(`${MostRecentDocuments_api}?session_id=${session_id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error(`API error: ${res.status}`);
//         const data = await res.json();
//         if (data) formik.setValues({ ...formik.values, ...data });
//       } catch (err) {
//         console.error("Error fetching session data:", err);
//       }
//     })();
//   }, []);

//   // Auto-save form data to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("MostRecentDocuments", JSON.stringify(formik.values));
//   }, [formik.values]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 className="text-center">Most Recent Document Details</h2>
//       <Form onSubmit={formik.handleSubmit}>
//         {[
//           { label: "Select Deed Type", name: "selectDeedType", type: "select", options: ["sale deed", "gift deed", "will deed", "relinquishment deed", "mortgage deed", "partition deed"] },
//           { label: "Date of Registration", name: "dateofRegistration", type: "date" },
//           { label: "Document Number", name: "documentNumber" },
//           { label: "Name of Subregistrar Office", name: "nameofSubregistrarOffice" },
//           { label: "Location of Subregistrar Office", name: "locationOfSubregistrarOffice" },
//           { label: "Subregistrar Office Mandal", name: "subregistrarOfficeMandal" },
//           { label: "Subregistrar Office District", name: "subregistrarOfficeDistrict" },
//           { label: "Subregistrar Office Local Authority", name: "subregistrarOfficeLocalAuthority" },
//         ].map((field) => (
//           <Form.Group className="mb-3" key={field.name}>
//             <Form.Label className="fs-3">{field.label}</Form.Label>
//             {field.type === "select" ? (
//               <Form.Select
//                 name={field.name}
//                 value={formik.values[field.name]}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{ height: "40px", fontSize: "20px" }}
//               >
//                 <option value="">Select</option>
//                 {field.options.map((opt) => (
//                   <option key={opt} value={opt}>{opt}</option>
//                 ))}
//               </Form.Select>
//             ) : (
//               <Form.Control
//                 type={field.type || "text"}
//                 name={field.name}
//                 value={formik.values[field.name]}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{ height: "40px", fontSize: "20px" }}
//               />
//             )}
//             {formik.touched[field.name] && formik.errors[field.name] && (
//               <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
//             )}
//           </Form.Group>
//         ))}

//         <div className="text-center">
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

// export default MostRecentDocument;





// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import Form from 'react-bootstrap/Form';
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";  
// //import { Mostrecentdocuments_api } from "../apiUrls";

// const MostRecentDocument =({onNext})=>{
//     const navigate = useNavigate();  // Initialize navigate
//     const [loading, setLoading] = useState(false);
//     const formik = useFormik({
//          initialValues: JSON.parse(sessionStorage.getItem("MostRecentDocuments")) || {
//              selectDeedType:"",
//              dateofRegistration:"",
//              documentNumber:"",
//              nameofSubregistrarOffice:"",
//              locationOfSubregistrarOffice:"",
//              subregistrarOfficeMandal:"",
//             subregistrarOfficeDistrict:"",
//             subregistrarOfficeLocalAuthority:"" 
// },
    
//     onSubmit: async (values) => {
//         //console.log('Form Submitted:', values);
//         // Step 1: Retrieve the session ID from sessionStorage
//       const sessionId = sessionStorage.getItem("sessionID"); // Retrieve session ID
//       // Step 2: Prepare the data to be sent to the API
//       const dataToSend = {
//           ...values,   // All form data
//           sessionId: sessionId  // Add session ID
//       };

//   //comented the api code for testing purpose ............

//    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_SESSION}`;
//  console.log("Final API URL:", apiUrl);  
//   setLoading(true);  // Start loading state
        
//         // for testing purpose used the api 
//        //const apiUrl =  "http://localhost:3000/api/session"; // "https://jsonplaceholder.typicode.com/posts"   // "http://localhost:3000/api/session"; Replace with actual API endpoint
//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dataToSend),
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("API response:", data);
//                 // After a successful API call, call onNext
//                onNext();
//             } else {
//                 console.error("API Error:", response.statusText);
//                 // Optionally handle the error (show a message to the user)
//             }
//         } catch (error) {
//             console.error("Error during API call:", error);
//             // Optionally handle the error (show a message to the user)
//         } finally {
//             setLoading(false);  // End loading state
//         }
        
//     },
//        validate:(values)=>{
//           let errors ={};     //{initially no errrors}
//           if(values.selectDeedType===""){
//             errors.selectDeedType="*required"
//           }
//           if(values.dateofRegistration===""){
//             errors.dateofRegistration="*required"
//           }
//           if(values.documentNumber===""){
//             errors.documentNumber="*required"
//           }
//           if(values.nameofSubregistrarOffice===""){
//             errors.nameofSubregistrarOffice="*required"
//           }
//           if(values.locationOfSubregistrarOffice===""){
//             errors.locationOfSubregistrarOffice="*required"
//           }
//           if(values.subregistrarOfficeMandal===""){
//             errors.subregistrarOfficeMandal="*required"
//           }
//           if(values.subregistrarOfficeDistrict===""){
//             errors.subregistrarOfficeDistrict="*required"
//           }
//           if(values.subregistrarOfficeLocalAuthority===""){
//             errors.subregistrarOfficeLocalAuthority="*required"
//           }
//            return errors;
//        }
 
//        })
  
//        // Save form data to sessionStorage on change
//            useEffect(() => {
//              sessionStorage.setItem("MostRecentDocuments", JSON.stringify(formik.values));
//          }, [formik.values]);
       
//          // Retrieve form data from sessionStorage on component mount
//          useEffect(() => {
//              const savedData = JSON.parse(sessionStorage.getItem("MostRecentDocuments"));
//              if (savedData) {
//                  formik.setValues(savedData);
//              }
//          }, []);


//            return(
//         <div>
//             <h2 className="text-center">Most Recent Document Details </h2>
//             <div 
//             style={{height:"100vh",paddingLeft:"50px",paddingTop:"10px",overflowX:"hidden" }}>

//                 <Form onSubmit={formik.handleSubmit}>
//                 <Form.Group controlId="SelectDeedType">
                   
//                 <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                     <div className="col-12 col-lg-5">
//                         <Form.Label className="fs-2">
//                         SelectDeedType  
//                         </Form.Label>
//                     </div>
//                         <div style={{ width:"350px"}}>
//                             <Form.Select name="selectDeedType"
//                              value={formik.values.selectDeedType}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             style={{fontSize:"20px", height:"40px" }}>
//                             <option value=""> select</option>
//                             <option value="sale deed">sale deed </option>
//                             <option value="gift deed">gift deed </option>
//                             <option value="will deed">will deed </option>
//                             <option value="relinquishment deed">relinquishment deed </option>
//                             <option value="mortgage deed">mortgage deed </option>
//                             <option value="partition deed">partition deed </option>
//                             </Form.Select>
//                             {/* //errors view on webpage */}
//                             {/* {formik.errors.selectDeedType?<div className="text-danger fs-5 ">{formik.errors.selectDeedType}</div>:null} */}
//                             {formik.touched.selectDeedType && formik.errors.selectDeedType && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.selectDeedType}</div>
//                         )}  
//                         </div>
//                 </div>
//                 </Form.Group>
//                              <Form.Group controlId="DateOfRegistartion">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3">
//                               DateOfRegistartion  
//                             </Form.Label>
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="date" name="dateofRegistration"
//                             value={formik.values.dateofRegistration} 
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             style={{ fontSize:"20px", height:"40px" }}/>
//                             {/* {formik.errors.dateofRegistration?<div className="text-danger fs-5 ">{formik.errors.dateofRegistration}</div>:null}  */}
//                             {formik.touched.dateofRegistration && formik.errors.dateofRegistration && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.dateofRegistration}</div>
//                             )}
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId="Document Number">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3" >
//                              Document Number
//                             </Form.Label>
                            
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="text" name="documentNumber"
                             
//                             value={formik.values.documentNumber}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             style={{ fontSize:"20px", height:"40px" }} />
//                             {/* {formik.errors.documentNumber?<div className="text-danger fs-5 ">{formik.errors.documentNumber}</div>:null} */}
//                             {formik.touched.documentNumber && formik.errors.documentNumber && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.documentNumber} </div>
//                             )}
                           
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId=" Name Of Subregristrar Office ">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3">
//                              Name Of Subregristrar Office 
//                             </Form.Label>
//                             {/* errors */}
                           
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="text" name="nameofSubregistrarOffice"
//                                value={formik.values.nameofSubregistrarOffice} 
//                                onChange={formik.handleChange}
//                                onBlur={formik.handleBlur}
//                                style={{ fontSize:"20px", height:"40px" }}/>
//                                {/* {formik.errors.nameofSubregistrarOffice?<div className="text-danger  fs-5 ">{formik.errors.nameofSubregistrarOffice}</div>:null} */}
//                                {formik.touched.nameofSubregistrarOffice && formik.errors.nameofSubregistrarOffice && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.nameofSubregistrarOffice}</div>
//                             )}
                            
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId="Location Of Subregristrar Office">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3">
//                              Location Of Subregristrar Office 
//                             </Form.Label>
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="text" name="locationOfSubregistrarOffice"
//                              value={formik.values.locationOfSubregistrarOffice}
//                              onChange={formik.handleChange}
//                              onBlur={formik.handleBlur}
//                              style={{ fontSize:"20px", height:"40px" }} />
//                               {/* {formik.errors.locationOfSubregistrarOffice?<div className="text-danger  fs-5 ">{formik.errors.locationOfSubregistrarOffice}</div>:null} */}
//                             {formik.touched.locationOfSubregistrarOffice && formik.errors.locationOfSubregistrarOffice && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.locationOfSubregistrarOffice}</div>
//                             )}
                            
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId="Subregristrar Office Mandal">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3">
//                              Subregristrar Office Mandal
//                             </Form.Label>
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="text" name="subregistrarOfficeMandal"
//                              value={formik.values.subregistrarOfficeMandal} 
//                              onChange={formik.handleChange}
//                              onBlur={formik.handleBlur}
//                              style={{ fontSize:"20px", height:"40px" }}/>
//                               {/* {formik.errors.subregistrarOfficeMandal?<div className="text-danger  fs-5 ">{formik.errors.subregistrarOfficeMandal}</div>:null} */}
//                               {formik.touched.subregistrarOfficeMandal && formik.errors.subregistrarOfficeMandal && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.subregistrarOfficeMandal}</div>
//                             )}
                            
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId="Subregristrar Office District">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3">
//                              Subregristrar Office District 
//                             </Form.Label>
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="text" name="subregistrarOfficeDistrict"
//                             value={formik.values.subregistrarOfficeDistrict} 
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             style={{ fontSize:"20px", height:"40px" }}/>
//                              {/* {formik.errors.subregistrarOfficeDistrict?<div className="text-danger  fs-5 ">{formik.errors.subregistrarOfficeDistrict}</div>:null} */}
//                              {formik.touched.subregistrarOfficeDistrict && formik.errors.subregistrarOfficeDistrict && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.subregistrarOfficeDistrict}</div>
//                             )}
                            
//                             </div>
//                         </div>
//                     </Form.Group>

//                     <Form.Group controlId="Subregristrar Office Local Authority">
//                         <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//                             <div className="col-12 col-lg-5">
//                              <Form.Label className="fs-3">
//                              Subregristrar Office Local Authority  
//                             </Form.Label>
//                             </div>

//                             <div style={{width:"350px"}}>
//                             <Form.Control type="text" name="subregistrarOfficeLocalAuthority" 
//                                 value={formik.values.subregistrarOfficeLocalAuthority} 
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 style={{ fontSize:"20px", height:"40px" }}/>
//                                  {/* {formik.errors.subregistrarOfficeLocalAuthority?<div className="text-danger fs-5">{formik.errors.subregistrarOfficeLocalAuthority}</div>:null} */}
//                                  {formik.touched.subregistrarOfficeLocalAuthority && formik.errors.subregistrarOfficeLocalAuthority && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.subregistrarOfficeLocalAuthority}</div>
//                             )}
                           
//                             </div>
//                         </div>

//                     </Form.Group>
                  
//                 <div className="text-center">

                 
//                         {/* Back Button */}
//                         <Button
//                             variant="secondary"
//                             className="mt-3 me-3"
//                             onClick={() => navigate(-1)}  // Navigate back
//                         >
//                             Back
//                         </Button>
                        
//                            <Button
//                                 type="submit"
//                                 variant="primary"
//                                 className="mt-3"
//                                 disabled={loading}>
//                             {loading ? "Loading..." : "Next"}
//                                         </Button>

//                             </div>
//                     </Form>                   
//             </div>
//         </div>
      
       
//      )

// }
// export default MostRecentDocument;

//=====================
//================================= 
// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import Form from 'react-bootstrap/Form';
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const MostRecentDocument = ({ onNext }) => {
//   const navigate = useNavigate();  
//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("MostRecentDocuments")) || {
//       selectDeedType: "",
//       dateofRegistration: "",
//       documentNumber: "",
//       nameofSubregistrarOffice: "",
//       locationOfSubregistrarOffice: "",
//       subregistrarOfficeMandal: "",
//       subregistrarOfficeDistrict: "",
//       subregistrarOfficeLocalAuthority: ""
//     },

//     onSubmit: async (values) => {
//       setLoading(true);

//       // ✅ Get user_id and session_id like TitleHolderDetails
//       const sessionId = sessionStorage.getItem("sessionID");
//       const userId = sessionStorage.getItem("user_id");

//       const dataToSend = {
//         ...values,
//         user_id: userId,
//         session_id: sessionId
//       };

//       console.log("Sending to API:", dataToSend);

//       const apiUrl = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_SESSION}`;
//       console.log("Final API URL:", apiUrl);

//       try {
//         const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(dataToSend),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           onNext(); // Go to next page
//         } else {
//           console.error("API Error:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error during API call:", error);
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       let errors = {};
//       if (values.selectDeedType === "") errors.selectDeedType = "*required";
//       if (values.dateofRegistration === "") errors.dateofRegistration = "*required";
//       if (values.documentNumber === "") errors.documentNumber = "*required";
//       if (values.nameofSubregistrarOffice === "") errors.nameofSubregistrarOffice = "*required";
//       if (values.locationOfSubregistrarOffice === "") errors.locationOfSubregistrarOffice = "*required";
//       if (values.subregistrarOfficeMandal === "") errors.subregistrarOfficeMandal = "*required";
//       if (values.subregistrarOfficeDistrict === "") errors.subregistrarOfficeDistrict = "*required";
//       if (values.subregistrarOfficeLocalAuthority === "") errors.subregistrarOfficeLocalAuthority = "*required";
//       return errors;
//     }
//   });

//   // Save form data to sessionStorage on change
//   useEffect(() => {
//     sessionStorage.setItem("MostRecentDocuments", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Pre-fill form if sessionStorage has data
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("MostRecentDocuments"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   return (
//     <div>
//       <h2 className="text-center">Most Recent Document Details </h2>
//       <div style={{ height: "100vh", paddingLeft: "50px", paddingTop: "10px", overflowX: "hidden" }}>
//         <Form onSubmit={formik.handleSubmit}>

//           {/* ---------------- Select Deed Type ---------------- */}
//           <Form.Group controlId="SelectDeedType">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-2">SelectDeedType</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Select
//                   name="selectDeedType"
//                   value={formik.values.selectDeedType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }}>
//                   <option value=""> select</option>
//                   <option value="sale deed">sale deed </option>
//                   <option value="gift deed">gift deed </option>
//                   <option value="will deed">will deed </option>
//                   <option value="relinquishment deed">relinquishment deed </option>
//                   <option value="mortgage deed">mortgage deed </option>
//                   <option value="partition deed">partition deed </option>
//                 </Form.Select>
//                 {formik.touched.selectDeedType && formik.errors.selectDeedType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.selectDeedType}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Date Of Registration ---------------- */}
//           <Form.Group controlId="DateOfRegistartion">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">DateOfRegistartion</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="date"
//                   name="dateofRegistration"
//                   value={formik.values.dateofRegistration}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.dateofRegistration && formik.errors.dateofRegistration && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.dateofRegistration}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Document Number ---------------- */}
//           <Form.Group controlId="Document Number">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">Document Number</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="text"
//                   name="documentNumber"
//                   value={formik.values.documentNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.documentNumber && formik.errors.documentNumber && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.documentNumber} </div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Name Of Subregistrar Office ---------------- */}
//           <Form.Group controlId="NameOfSubregistrarOffice">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">Name Of Subregistrar Office</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="text"
//                   name="nameofSubregistrarOffice"
//                   value={formik.values.nameofSubregistrarOffice}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.nameofSubregistrarOffice && formik.errors.nameofSubregistrarOffice && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.nameofSubregistrarOffice}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Location Of Subregistrar Office ---------------- */}
//           <Form.Group controlId="LocationOfSubregistrarOffice">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">Location Of Subregistrar Office</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="text"
//                   name="locationOfSubregistrarOffice"
//                   value={formik.values.locationOfSubregistrarOffice}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.locationOfSubregistrarOffice && formik.errors.locationOfSubregistrarOffice && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.locationOfSubregistrarOffice}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Subregistrar Office Mandal ---------------- */}
//           <Form.Group controlId="SubregistrarOfficeMandal">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">Subregistrar Office Mandal</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="text"
//                   name="subregistrarOfficeMandal"
//                   value={formik.values.subregistrarOfficeMandal}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.subregistrarOfficeMandal && formik.errors.subregistrarOfficeMandal && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.subregistrarOfficeMandal}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Subregistrar Office District ---------------- */}
//           <Form.Group controlId="SubregistrarOfficeDistrict">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">Subregistrar Office District</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="text"
//                   name="subregistrarOfficeDistrict"
//                   value={formik.values.subregistrarOfficeDistrict}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.subregistrarOfficeDistrict && formik.errors.subregistrarOfficeDistrict && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.subregistrarOfficeDistrict}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Subregistrar Office Local Authority ---------------- */}
//           <Form.Group controlId="SubregistrarOfficeLocalAuthority">
//             <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
//               <div className="col-12 col-lg-5">
//                 <Form.Label className="fs-3">Subregistrar Office Local Authority</Form.Label>
//               </div>
//               <div style={{ width: "350px" }}>
//                 <Form.Control
//                   type="text"
//                   name="subregistrarOfficeLocalAuthority"
//                   value={formik.values.subregistrarOfficeLocalAuthority}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ fontSize: "20px", height: "40px" }} />
//                 {formik.touched.subregistrarOfficeLocalAuthority && formik.errors.subregistrarOfficeLocalAuthority && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.subregistrarOfficeLocalAuthority}</div>
//                 )}
//               </div>
//             </div>
//           </Form.Group>

//           {/* ---------------- Buttons ---------------- */}
//           <div className="text-center">
//             <Button
//               variant="secondary"
//               className="mt-3 me-3"
//               onClick={() => navigate(-1)}>Back</Button>

//             <Button
//               type="submit"
//               variant="primary"
//               className="mt-3"
//               disabled={loading}>
//               {loading ? "Loading..." : "Next"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default MostRecentDocument;
