
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { TitleHolderDetails_api } from "../apiUrls";
import { getToken } from "../auth"; // Optional helper if you have it

const TitleHolderDetails = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get sessionId from URL
  const sessionIdFromUrl = searchParams.get("sessionid");

  // Save sessionId into sessionStorage
  useEffect(() => {
    if (sessionIdFromUrl) sessionStorage.setItem("sessionId", sessionIdFromUrl);
  }, [sessionIdFromUrl]);

  const formik = useFormik({
    initialValues:
      JSON.parse(sessionStorage.getItem("TitleHolderDetails")) || {
        titleHolderName: "",
        titleHolderRelationType: "",
        titleHolderRelativeName: "",
        titleHolderResidenceType: "",
        titleHolderDoorNumber: "",
        titleHolderStreetName: "",
        titleHolderCityName: "",
        titleHolderMandalName: "",
        titleHolderDistrictName: "",
        titleHolderPincode: "",
      },

    validate: (values) => {
      const errors = {};
      const req = "*required*";
      if (!values.titleHolderName) errors.titleHolderName = req;
      if (!values.titleHolderRelationType) errors.titleHolderRelationType = req;
      if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = req;
      if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = req;
      if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = req;
      if (!values.titleHolderStreetName) errors.titleHolderStreetName = req;
      if (!values.titleHolderCityName) errors.titleHolderCityName = req;
      if (!values.titleHolderMandalName) errors.titleHolderMandalName = req;
      if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = req;
      if (!values.titleHolderPincode) errors.titleHolderPincode = req;
      return errors;
    },

    onSubmit: async (values) => {
      console.log("Form Submitted:", values);
      setLoading(true);

      const token = getToken() || sessionStorage.getItem("token");
      const user_id = sessionStorage.getItem("user_id");
      const session_id = sessionStorage.getItem("sessionId");

      if (!token || !user_id) {
        alert("Authentication required. Please log in.");
        navigate("/login");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(TitleHolderDetails_api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ session_id, user_id, ...values }),
        });

        console.log("Status:", response.status);

        if (!response.ok) throw new Error(`API Error: ${response.status}`);

        const data = await response.json();
        console.log("API response:", data);

        // Save form data to sessionStorage
        sessionStorage.setItem("TitleHolderDetails", JSON.stringify(values));

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

  // -------------------- Prefill from backend only if sessionStorage is empty --------------------
  useEffect(() => {
    const token = getToken() || sessionStorage.getItem("token");
    const session_id = sessionStorage.getItem("sessionId");
    const savedData = JSON.parse(sessionStorage.getItem("TitleHolderDetails"));

    if (!token || !session_id || savedData) return; // skip fetch if already saved

    (async () => {
      try {
        const res = await fetch(`${TitleHolderDetails_api}?session_id=${session_id}`, {
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

  // -------------------- Auto-save form data to sessionStorage --------------------
  useEffect(() => {
    sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
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
        <h3 className="text-center">Title Holder Details</h3>

        <Form onSubmit={formik.handleSubmit}>
          <div className="d-flex flex-column pt-3 pb-3">
            {[
              { label: "Name", name: "titleHolderName" },
              { label: "Relation Type", name: "titleHolderRelationType", type: "select", options: ["S/O","W/O","D/O","C/O","H/O"] },
              { label: "Relative Name", name: "titleHolderRelativeName" },
              { label: "Residence Type", name: "titleHolderResidenceType", type: "select", options: ["Flat","House"] },
              { label: "Door Number", name: "titleHolderDoorNumber" },
              { label: "Street Name", name: "titleHolderStreetName" },
              { label: "City Name", name: "titleHolderCityName" },
              { label: "Mandal Name", name: "titleHolderMandalName" },
              { label: "District Name", name: "titleHolderDistrictName" },
              { label: "Pincode", name: "titleHolderPincode" },
            ].map((field) => (
              <div className="row align-items-center mb-3" key={field.name}>
                <div className="col-12 col-md-6">
                  <Form.Label className="fs-3">{`Title Holder ${field.label}`}</Form.Label>
                </div>
                <div className="col-12 col-md-6">
                  {field.type === "select" ? (
                    <Form.Select
                      name={field.name}
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ height: "40px", fontSize: "20px" }}
                    >
                      <option value="">Select</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type="text"
                      name={field.name}
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ height: "40px", fontSize: "20px", borderColor: "#333" }}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && (
                    <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" className="mt-3 me-3" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button type="submit" variant="primary" className="mt-3" disabled={loading}>
              {loading ? "Loading..." : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TitleHolderDetails;





// // this below code is working need to modify 

// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { TitleHolderDetails_api } from "../apiUrls";
// import { getToken } from "../auth"; // Optional helper if you have it

// const TitleHolderDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   // Get sessionId from URL
//   const sessionIdFromUrl = searchParams.get("sessionid");

//   // Save sessionId into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) sessionStorage.setItem("sessionId", sessionIdFromUrl);
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("TitleHolderDetails")) || {
//         titleHolderName: "",
//         titleHolderRelationType: "",
//         titleHolderRelativeName: "",
//         titleHolderResidenceType: "",
//         titleHolderDoorNumber: "",
//         titleHolderStreetName: "",
//         titleHolderCityName: "",
//         titleHolderMandalName: "",
//         titleHolderDistrictName: "",
//         titleHolderPincode: "",
//       },

//     validate: (values) => {
//       const errors = {};
//       const req = "*required*";
//       if (!values.titleHolderName) errors.titleHolderName = req;
//       if (!values.titleHolderRelationType) errors.titleHolderRelationType = req;
//       if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = req;
//       if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = req;
//       if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = req;
//       if (!values.titleHolderStreetName) errors.titleHolderStreetName = req;
//       if (!values.titleHolderCityName) errors.titleHolderCityName = req;
//       if (!values.titleHolderMandalName) errors.titleHolderMandalName = req;
//       if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = req;
//       if (!values.titleHolderPincode) errors.titleHolderPincode = req;
//       return errors;
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       setLoading(true);

//       const token = getToken() || sessionStorage.getItem("token");
//       const user_id = sessionStorage.getItem("user_id");
//       const session_id = sessionStorage.getItem("sessionId");

//       if (!token || !user_id) {
//         alert("Authentication required. Please log in.");
//         navigate("/login");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(TitleHolderDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ session_id, user_id, ...values }),
//         });

//         console.log("Status:", response.status);

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);

//         const data = await response.json();
//         console.log("API response:", data);

//         // Save form data to sessionStorage
//         sessionStorage.setItem("TitleHolderDetails", JSON.stringify(values));

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

//   // -------------------- Prefill from backend if sessionId exists --------------------
//   useEffect(() => {
//     const token = getToken() || sessionStorage.getItem("token");
//     const session_id = sessionStorage.getItem("sessionId");
//     if (!token || !session_id) return;

//     (async () => {
//       try {
//         const res = await fetch(`${TitleHolderDetails_api}?session_id=${session_id}`, {
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

//   // -------------------- Auto-save form data to sessionStorage --------------------
//   useEffect(() => {
//     sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
//   }, [formik.values]);

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
//         <h3 className="text-center">Title Holder Details</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           <div className="d-flex flex-column pt-3 pb-3">
//             {[
//               { label: "Name", name: "titleHolderName" },
//               { label: "Relation Type", name: "titleHolderRelationType", type: "select", options: ["S/O","W/O","D/O","C/O","H/O"] },
//               { label: "Relative Name", name: "titleHolderRelativeName" },
//               { label: "Residence Type", name: "titleHolderResidenceType", type: "select", options: ["Flat","House"] },
//               { label: "Door Number", name: "titleHolderDoorNumber" },
//               { label: "Street Name", name: "titleHolderStreetName" },
//               { label: "City Name", name: "titleHolderCityName" },
//               { label: "Mandal Name", name: "titleHolderMandalName" },
//               { label: "District Name", name: "titleHolderDistrictName" },
//               { label: "Pincode", name: "titleHolderPincode" },
//             ].map((field) => (
//               <div className="row align-items-center mb-3" key={field.name}>
//                 <div className="col-12 col-md-6">
//                   <Form.Label className="fs-3">{`Title Holder ${field.label}`}</Form.Label>
//                 </div>
//                 <div className="col-12 col-md-6">
//                   {field.type === "select" ? (
//                     <Form.Select
//                       name={field.name}
//                       value={formik.values[field.name]}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       style={{ height: "40px", fontSize: "20px" }}
//                     >
//                       <option value="">Select</option>
//                       {field.options.map((opt) => (
//                         <option key={opt} value={opt}>{opt}</option>
//                       ))}
//                     </Form.Select>
//                   ) : (
//                     <Form.Control
//                       type="text"
//                       name={field.name}
//                       value={formik.values[field.name]}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       style={{ height: "40px", fontSize: "20px", borderColor: "#333" }}
//                     />
//                   )}
//                   {formik.touched[field.name] && formik.errors[field.name] && (
//                     <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

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

// export default TitleHolderDetails;







// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { TitleHolderDetails_api } from "../apiUrls";

// const TitleHolderDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const sessionid = searchParams.get("sessionid"); // Get sessionid from URL
//   const navigate = useNavigate();

//   // Get token and user_id from sessionStorage
//   const token = sessionStorage.getItem("token");
//   const user_id = sessionStorage.getItem("user_id");

//   // -------------------- Formik --------------------
//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("TitleHolderDetails")) || {
//         titleHolderName: "",
//         titleHolderRelationType: "",
//         titleHolderRelativeName: "",
//         titleHolderResidenceType: "",
//         titleHolderDoorNumber: "",
//         titleHolderStreetName: "",
//         titleHolderCityName: "",
//         titleHolderMandalName: "",
//         titleHolderDistrictName: "",
//         titleHolderPincode: "",
//       },
//     validate: (values) => {
//       const errors = {};
//       const req = "*required*";
//       if (!values.titleHolderName) errors.titleHolderName = req;
//       if (!values.titleHolderRelationType) errors.titleHolderRelationType = req;
//       if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = req;
//       if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = req;
//       if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = req;
//       if (!values.titleHolderStreetName) errors.titleHolderStreetName = req;
//       if (!values.titleHolderCityName) errors.titleHolderCityName = req;
//       if (!values.titleHolderMandalName) errors.titleHolderMandalName = req;
//       if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = req;
//       if (!values.titleHolderPincode) errors.titleHolderPincode = req;
//       return errors;
//     },
//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       setLoading(true);

//     //   if (!token || !user_id) {
//     //     alert("Authentication required. Please log in.");
//     //     navigate("/login");
//     //     setLoading(false);
//     //     return;
//     //   }

//       try {
//         const response = await fetch(TitleHolderDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // Add token
//           },
//           body: JSON.stringify({ sessionid, user_id, ...values }), // Include user_id
//         });

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);
//         const data = await response.json();
//         console.log("API response:", data);

//         // Save form data to sessionStorage
//         sessionStorage.setItem("TitleHolderDetails", JSON.stringify(values));

//         // Navigate to next page
//         if (onNext) onNext();
//         else navigate(`/nextpage?sessionid=${sessionid}`);
//       } catch (error) {
//         console.error("Error during API call:", error);
//         alert("Failed to save data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // -------------------- Prefill from API if sessionid exists --------------------
//   useEffect(() => {
//     if (!sessionid || !token) return;
//     (async () => {
//       try {
//         const res = await fetch(`${TitleHolderDetails_api}?sessionid=${sessionid}`, {
//           headers: { Authorization: `Bearer ${token}` }, // Include token
//         });
//         if (!res.ok) throw new Error(`API error: ${res.status}`);
//         const data = await res.json();
//         if (data) {
//           formik.setValues({ ...formik.values, ...data });
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     })();
//   }, [sessionid, token]);

//   // -------------------- Persist to sessionStorage on change --------------------
//   useEffect(() => {
//     sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // -------------------- Retrieve saved session data on first load --------------------
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("TitleHolderDetails"));
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   // -------------------- UI --------------------
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
//         <h3 className="text-center">Title Holder Details</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           <div className="d-flex flex-column pt-3 pb-3">
//             {/* Title Holder Name */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderName"
//                   value={formik.values.titleHolderName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderName && formik.errors.titleHolderName && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderName}</div>
//                 )}
//               </div>
//             </div>

//             {/* Title Holder Relation Type */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Relation Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Select
//                   name="titleHolderRelationType"
//                   value={formik.values.titleHolderRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "100%", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.titleHolderRelationType && formik.errors.titleHolderRelationType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelationType}</div>
//                 )}
//               </div>
//             </div>

//             {/* Title Holder Relative Name */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Relative Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderRelativeName"
//                   value={formik.values.titleHolderRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderRelativeName && formik.errors.titleHolderRelativeName && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelativeName}</div>
//                 )}
//               </div>
//             </div>

//             {/* Title Holder Residence Type */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Residence Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Select
//                   name="titleHolderResidenceType"
//                   value={formik.values.titleHolderResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "100%", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select</option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.titleHolderResidenceType && formik.errors.titleHolderResidenceType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderResidenceType}</div>
//                 )}
//               </div>
//             </div>

//             {/* Remaining Fields */}
//             {[
//               { label: "Door Number", name: "titleHolderDoorNumber" },
//               { label: "Street Name", name: "titleHolderStreetName" },
//               { label: "City Name", name: "titleHolderCityName" },
//               { label: "Mandal Name", name: "titleHolderMandalName" },
//               { label: "District Name", name: "titleHolderDistrictName" },
//               { label: "Pincode", name: "titleHolderPincode" },
//             ].map((field) => (
//               <div className="row align-items-center" key={field.name}>
//                 <div className="col-12 col-md-6">
//                   <Form.Label className="fs-3">{`Title Holder ${field.label}`}</Form.Label>
//                 </div>
//                 <div className="col-12 col-md-6">
//                   <Form.Control
//                     type="text"
//                     name={field.name}
//                     value={formik.values[field.name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                   />
//                   {formik.touched[field.name] && formik.errors[field.name] && (
//                     <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
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

// export default TitleHolderDetails;






// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { TitleHolderDetails_api } from "../apiUrls";

// const TitleHolderDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const sessionid = searchParams.get("sessionid"); // get sessionid from URL
//   const navigate = useNavigate();

//   // Get token and user_id from sessionStorage
//   const token = sessionStorage.getItem("token");
//   const user_id = sessionStorage.getItem("user_id");

//   // -------------------- Formik --------------------
//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("TitleHolderDetails")) || {
//         titleHolderName: "",
//         titleHolderRelationType: "",
//         titleHolderRelativeName: "",
//         titleHolderResidenceType: "",
//         titleHolderDoorNumber: "",
//         titleHolderStreetName: "",
//         titleHolderCityName: "",
//         titleHolderMandalName: "",
//         titleHolderDistrictName: "",
//         titleHolderPincode: "",
//       },
//     validate: (values) => {
//       const errors = {};
//       const req = "*required*";
//       if (!values.titleHolderName) errors.titleHolderName = req;
//       if (!values.titleHolderRelationType) errors.titleHolderRelationType = req;
//       if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = req;
//       if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = req;
//       if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = req;
//       if (!values.titleHolderStreetName) errors.titleHolderStreetName = req;
//       if (!values.titleHolderCityName) errors.titleHolderCityName = req;
//       if (!values.titleHolderMandalName) errors.titleHolderMandalName = req;
//       if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = req;
//       if (!values.titleHolderPincode) errors.titleHolderPincode = req;
//       return errors;
//     },
//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       setLoading(true);
//       try {
//         const response = await fetch(TitleHolderDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ sessionid, user_id, ...values }),
//         });

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);
//         const data = await response.json();
//         console.log("API response:", data);

//         // Save form data to sessionStorage
//         sessionStorage.setItem("TitleHolderDetails", JSON.stringify(values));

//         // Navigate to next page
//         if (onNext) onNext();
//         else navigate(`/nextpage?sessionid=${sessionid}`);
//       } catch (error) {
//         console.error("Error during API call:", error);
//         alert("Failed to save data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // -------------------- Prefill from API if sessionid exists --------------------
//   useEffect(() => {
//     if (!sessionid) return;
//     (async () => {
//       try {
//         const res = await fetch(`${TitleHolderDetails_api}?sessionid=${sessionid}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error(`API error: ${res.status}`);
//         const data = await res.json();
//         if (data) {
//           formik.setValues({ ...formik.values, ...data });
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     })();
//   }, [sessionid, token]);

//   // -------------------- Persist to sessionStorage on change --------------------
//   useEffect(() => {
//     sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // -------------------- Retrieve saved session data on first load --------------------
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("TitleHolderDetails"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   // -------------------- UI --------------------
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
//         <h3 className="text-center">Title Holder Details</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           <div className="d-flex flex-column pt-3 pb-3">
//             {/* Title Holder Name */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderName"
//                   value={formik.values.titleHolderName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderName && formik.errors.titleHolderName && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderName}</div>
//                 )}
//               </div>
//             </div>

//             {/* Title Holder Relation Type */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Relation Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Select
//                   name="titleHolderRelationType"
//                   value={formik.values.titleHolderRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "100%", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select </option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O</option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.titleHolderRelationType && formik.errors.titleHolderRelationType && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelationType}</div>
//                 )}
//               </div>
//             </div>

//             {/* Title Holder Relative Name */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Relative Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderRelativeName"
//                   value={formik.values.titleHolderRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderRelativeName &&
//                   formik.errors.titleHolderRelativeName && (
//                     <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelativeName}</div>
//                   )}
//               </div>
//             </div>

//             {/* Title Holder Residence Type */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Residence Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Select
//                   name="titleHolderResidenceType"
//                   value={formik.values.titleHolderResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "100%", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select </option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.titleHolderResidenceType &&
//                   formik.errors.titleHolderResidenceType && (
//                     <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderResidenceType}</div>
//                   )}
//               </div>
//             </div>

//             {/* Remaining Fields: Door Number, Street, City, Mandal, District, Pincode */}
//             {[
//               { label: "Door Number", name: "titleHolderDoorNumber" },
//               { label: "Street Name", name: "titleHolderStreetName" },
//               { label: "City Name", name: "titleHolderCityName" },
//               { label: "Mandal Name", name: "titleHolderMandalName" },
//               { label: "District Name", name: "titleHolderDistrictName" },
//               { label: "Pincode", name: "titleHolderPincode" },
//             ].map((field) => (
//               <div className="row align-items-center" key={field.name}>
//                 <div className="col-12 col-md-6">
//                   <Form.Label className="fs-3">{`Title Holder ${field.label}`}</Form.Label>
//                 </div>
//                 <div className="col-12 col-md-6">
//                   <Form.Control
//                     type="text"
//                     name={field.name}
//                     value={formik.values[field.name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                   />
//                   {formik.touched[field.name] && formik.errors[field.name] && (
//                     <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
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

// export default TitleHolderDetails;







//modified code for apis 

// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { TitleHolderDetails_api } from "../apiUrls";

// const TitleHolderDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const sessionid = searchParams.get("sessionid"); // ✅ query param name fixed
//   const navigate = useNavigate();

  
//   // -------------------- Formik --------------------

//   const formik = useFormik({
//     initialValues:
//       JSON.parse(sessionStorage.getItem("TitleHolderDetails")) || {
//         titleHolderName: "",
//         titleHolderRelationType: "",
//         titleHolderRelativeName: "",
//         titleHolderResidenceType: "",
//         titleHolderDoorNumber: "",
//         titleHolderStreetName: "",
//         titleHolderCityName: "",
//         titleHolderMandalName: "",
//         titleHolderDistrictName: "",
//         titleHolderPincode: "",
//       },
//     validate: (values) => {
//       const errors = {};
//       const req = "*required*";
//       if (!values.titleHolderName) errors.titleHolderName = req;
//       if (!values.titleHolderRelationType) errors.titleHolderRelationType = req;
//       if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = req;
//       if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = req;
//       if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = req;
//       if (!values.titleHolderStreetName) errors.titleHolderStreetName = req;
//       if (!values.titleHolderCityName) errors.titleHolderCityName = req;
//       if (!values.titleHolderMandalName) errors.titleHolderMandalName = req;
//       if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = req;
//       if (!values.titleHolderPincode) errors.titleHolderPincode = req;
//       return errors;
//     },
//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       setLoading(true);
//       try {
//         // ✅ API call to save form data
//         const response = await fetch(TitleHolderDetails_api, {
//           method: "POST",
//           headers: { "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//            },
//           body: JSON.stringify({ sessionid, ...values }),
//         });

//         if (!response.ok) throw new Error(`API Error: ${response.status}`);
//         const data = await response.json();
//         console.log("API response:", data);

//         // ✅ Save to sessionStorage after successful API call
//         sessionStorage.setItem("TitleHolderDetails", JSON.stringify(values));

//         // ✅ Go to next page
//         if (onNext) onNext();
//         else navigate(`/nextpage?sessionid=${sessionid}`);
//       } catch (error) {
//         console.error("Error during API call:", error);
//         alert("Failed to save data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   // -------------------- Prefill from API if sessionid exists --------------------
//   useEffect(() => {
//     if (!sessionid) return;
//     (async () => {
//       try {
//         const res = await fetch(`${TitleHolderDetails_api}?sessionid=${sessionid}`);
//         if (!res.ok) throw new Error(`API error: ${res.status}`);
//         const data = await res.json();
//         if (data) {
//           formik.setValues({
//             ...formik.values,
//             ...data,
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     })();
//   }, [sessionid]);

//   // -------------------- Persist to sessionStorage on change --------------------
//   useEffect(() => {
//     sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // -------------------- Retrieve saved session data on first load --------------------
//   useEffect(() => {
//     const savedData = JSON.parse(sessionStorage.getItem("TitleHolderDetails"));
//     if (savedData) {
//       formik.setValues(savedData);
//     }
//   }, []);

//   // -------------------- UI --------------------
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
//         <h3 className="text-center">Title Holder Details</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           <div className="d-flex flex-column pt-3 pb-3">
//             {/* ---- Title Holder Name ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderName"
//                   value={formik.values.titleHolderName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderName && formik.errors.titleHolderName && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderName}</div>
//                 )}
//               </div>
//             </div>

//             {/* ---- Title Holder Relation Type ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Relation Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Select
//                   name="titleHolderRelationType"
//                   value={formik.values.titleHolderRelationType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "100%", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select </option>
//                   <option value="S/O">S/O</option>
//                   <option value="W/O">W/O</option>
//                   <option value="D/O">D/O </option>
//                   <option value="C/O">C/O</option>
//                   <option value="H/O">H/O</option>
//                 </Form.Select>
//                 {formik.touched.titleHolderRelationType &&
//                   formik.errors.titleHolderRelationType && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderRelationType}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder Relative Name ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Relative Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderRelativeName"
//                   value={formik.values.titleHolderRelativeName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderRelativeName &&
//                   formik.errors.titleHolderRelativeName && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderRelativeName}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder Residence Type ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Residence Type</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Select
//                   name="titleHolderResidenceType"
//                   value={formik.values.titleHolderResidenceType}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ width: "100%", height: "40px", borderColor: "black", fontSize: "20px" }}
//                 >
//                   <option value="">Select </option>
//                   <option value="Flat">Flat</option>
//                   <option value="House">House</option>
//                 </Form.Select>
//                 {formik.touched.titleHolderResidenceType &&
//                   formik.errors.titleHolderResidenceType && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderResidenceType}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder Door Number ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Door Number</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderDoorNumber"
//                   value={formik.values.titleHolderDoorNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderDoorNumber &&
//                   formik.errors.titleHolderDoorNumber && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderDoorNumber}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder Street Name ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Street Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderStreetName"
//                   value={formik.values.titleHolderStreetName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderStreetName &&
//                   formik.errors.titleHolderStreetName && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderStreetName}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder City Name ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder City Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderCityName"
//                   value={formik.values.titleHolderCityName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderCityName &&
//                   formik.errors.titleHolderCityName && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderCityName}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder Mandal Name ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Mandal Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderMandalName"
//                   value={formik.values.titleHolderMandalName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderMandalName &&
//                   formik.errors.titleHolderMandalName && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderMandalName}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder District Name ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder District Name</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderDistrictName"
//                   value={formik.values.titleHolderDistrictName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderDistrictName &&
//                   formik.errors.titleHolderDistrictName && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderDistrictName}
//                     </div>
//                   )}
//               </div>
//             </div>

//             {/* ---- Title Holder Pincode ---- */}
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">Title Holder Pincode</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 <Form.Control
//                   type="text"
//                   name="titleHolderPincode"
//                   value={formik.values.titleHolderPincode}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                 />
//                 {formik.touched.titleHolderPincode &&
//                   formik.errors.titleHolderPincode && (
//                     <div className="text-danger fw-bold fs-5">
//                       {formik.errors.titleHolderPincode}
//                     </div>
//                   )}
//               </div>
//             </div>
//           </div>

//           <div className="text-center">
//             <Button
//               variant="secondary"
//               className="mt-3 me-3"
//               onClick={() => navigate(-1)}
//             >
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

// export default TitleHolderDetails;




//----------------------
//-------------below code is working code 
// import React, { useState, useEffect} from "react";
// import { useSearchParams } from 'react-router-dom';
// import { useFormik } from 'formik';
// import Button from 'react-bootstrap/esm/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";  
// import { TitleHolderDetails_api } from "../apiUrls";    

// const TitleHolderDetails = ({ onNext }) => {
//     const [loading, setLoading] = useState(false);

//     const [searchParams] = useSearchParams();
//     const sessionid = searchParams.get("sessionId");
//     useEffect(() => {
//   if (sessionid) {
//     fetch(`http://localhost:30000/api/get-data?sessionid=${sessionid}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data) {
//           formik.setValues({
//             ...formik.values,
//             ...data // merge existing values with fetched ones
//           });
//         }
//       })
//       .catch(err => console.error('Error fetching data:', err));
//   }
// }, [sessionid]);

//     const navigate = useNavigate();  // Initialize navigate
//     const formik = useFormik({
//         initialValues:JSON.parse(sessionStorage.getItem("TitleHoldersData")) ||  {
//             titleHolderName: "",
//             titleHolderRelationType: "",
//             titleHolderRelativeName: "",
//             titleHolderResidenceType: "",
//             titleHolderDoorNumber: "",
//             titleHolderStreetName: "",
//             titleHolderCityName: "",
//             titleHolderMandalName: "",
//             titleHolderDistrictName: "",
//             titleHolderPincode: ""
//         },
//         // onSubmit: (values) => {
//         //     console.log('formsubmit', values)
//         //     onNext();
//         // },
//         onSubmit: async (values) => {
//             console.log('Form Submitted:', values);

//             // Set loading state to true
//             //setLoading(true);

//             // Replace with your actual API endpoint
//             // const apiUrl = TitleHolderDetails_api;

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
//           onNext();
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
//             if (!values.titleHolderName) {
//                 errors.titleHolderName = "*required*"
//             }
//             if (!values.titleHolderRelationType) {
//                 errors.titleHolderRelationType = "*required*";
//             }
//             if (!values.titleHolderRelativeName) {
//                 errors.titleHolderRelativeName = "*required*";
//             }
//             if (!values.titleHolderResidenceType) {
//                 errors.titleHolderResidenceType = "*required*";
//             }
//             if (!values.titleHolderDoorNumber) {
//                 errors.titleHolderDoorNumber = "*required*";
//             }
//             if (!values.titleHolderStreetName) {
//                 errors.titleHolderStreetName = "*required*";
//             }

//             if (!values.titleHolderCityName) {
//                 errors.titleHolderCityName = "*required*";
//             }
//             if (!values.titleHolderMandalName) {
//                 errors.titleHolderMandalName = "*required*";
//             }
//             if (!values.titleHolderDistrictName) {
//                 errors.titleHolderDistrictName = "*required*";
//             }
//             if (!values.titleHolderPincode) {
//                 errors.titleHolderPincode = "*required*";
//             }
//             return errors;
//         }
//     });

//     // Save form data to sessionStorage on change
//                useEffect(() => {
//                  sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
//              }, [formik.values]);
           
//              // Retrieve form data from sessionStorage on component mount
//              useEffect(() => {
//                  const savedData = JSON.parse(sessionStorage.getItem("TitleHolderDetails"));
//                  if (savedData) {
//                      formik.setValues(savedData);
//                  }
//              }, []);

//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", paddingBottom: "50px" }}>
//             <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
//                 <h3 className="text-center">Title Holder Details</h3>
//                 <Form onSubmit={formik.handleSubmit}>
//                     <div className="d-flex flex-column pt-3 pb-3">
//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Name</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderName"
//                                     value={formik.values.titleHolderName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.TitleHolderName && <div className="text-danger fw-bold">{formik.errors.TitleHolderName}</div>} */}
                        
//                                 {formik.touched.titleHolderName && formik.errors.titleHolderName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderName}</div>
//                             )}
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Relation Type</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                     <Form.Select   
//                                 name="titleHolderRelationType"
//                                 value={ formik.values.titleHolderRelationType }
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
//                                 //required 
//                                 >
//                                     <option value="">Select </option>
//                                     <option value="S/O">S/O</option>
//                                     <option value="W/O">W/O</option>
//                                     <option value="D/O">D/O </option>
//                                     <option value="C/O">C/O</option>
//                                     <option value="H/O">H/O</option>
                            
//                             </Form.Select>
//                                 {/* {formik.errors.TitleHolderRelationType && <div className="text-danger fw-bold">{formik.errors.TitleHolderRelationType}</div>} */}
//                                 {formik.touched.titleHolderRelationType && formik.errors.titleHolderRelationType && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelationType}</div>
//                             )}
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Relative Name</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderRelativeName"
//                                     value={formik.values.TitleHolderRelativeName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
//                                 />
//                                 {/* {formik.errors.TitleHolderRelativeName && <div className="text-danger fw-bold">{formik.errors.TitleHolderRelativeName}</div>} */}
//                                 {formik.touched.titleHolderRelativeName && formik.errors.titleHolderRelativeName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelativeName}</div>
//                             )}
                            
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Residence Type</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                             <Form.Select   
//                                 name="titleHolderResidenceType"
//                                 value={ formik.values.titleHolderResidenceType }
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
                                 
//                                 style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
//                                 //required 
//                                 >
//                                     <option value="">Select </option>
//                                     <option value="Flat">Flat</option>
//                                     <option value="House">House</option>
//                             </Form.Select>
//                                 {/* {formik.errors.titleHolderResidenceType && <div className="text-danger fw-bold">{formik.errors.TitleHolderResidenceType}</div>} */}
//                                 {formik.touched.titleHolderResidenceType && formik.errors.titleHolderResidenceType && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderResidenceType}</div>
//                             )}
                           
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Door Number</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderDoorNumber"
//                                     value={formik.values.titleHolderDoorNumber}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.titleHolderDoorNumber && <div className="text-danger fw-bold">{formik.errors.TitleHolderDoorNumber}</div>} */}
                            
//                                 {formik.touched.titleHolderDoorNumber && formik.errors.titleHolderDoorNumber && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderDoorNumber}</div>
//                             )}
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Street Name</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderStreetName"
//                                     value={formik.values.titleHolderStreetName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.TitleHolderStreetName && <div className="text-danger fw-bold">{formik.errors.TitleHolderStreetName}</div>} */}
//                                 {formik.touched.titleHolderStreetName && formik.errors.titleHolderStreetName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderStreetName}</div>
//                             )}
                            
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder City Name</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderCityName"
//                                     value={formik.values.titleHolderCityName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.TitleHolderCityName && <div className="text-danger fw-bold">{formik.errors.TitleHolderCityName}</div>} */}
//                                 {formik.touched.titleHolderCityName && formik.errors.titleHolderCityName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderCityName}</div>
//                             )}
                           
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Mandal Name</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderMandalName"
//                                     value={formik.values.titleHolderMandalName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.TitleHolderMandalName && <div className="text-danger fw-bold">{formik.errors.TitleHolderMandalName}</div>} */}
                            
//                                 {formik.touched.titleHolderMandalName && formik.errors.titleHolderMandalName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderMandalName}</div>
//                             )}
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder District Name</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderDistrictName"
//                                     value={formik.values.TitleHolderDistrictName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.TitleHolderDistrictName && <div className="text-danger fw-bold">{formik.errors.TitleHolderDistrictName}</div>} */}
//                                 {formik.touched.titleHolderDistrictName && formik.errors.titleHolderDistrictName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderDistrictName}</div>
//                             )}
                          
//                             </div>
//                         </div>

//                         <div className="row align-items-center">
//                             <div className="col-12 col-md-6">
//                                 <Form.Label className="fs-3">Title Holder Pincode</Form.Label>
//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <Form.Control
//                                     type="text"
//                                     name="titleHolderPincode"
//                                     value={formik.values.TitleHolderPincode}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                                 />
//                                 {/* {formik.errors.TitleHolderPincode && <div className="text-danger fw-bold">{formik.errors.TitleHolderPincode}</div>} */}
                     
//                                 {formik.touched.titleHolderRelativeName && formik.errors.titleHolderRelativeName && (
//                             <div className="text-danger fw-bold fs-5">{formik.errors.titleHolderRelativeName}</div>
//                             )}
//                             </div>
//                         </div>

                    
//                     </div>

//                     {/* <div className="text-center">
//                         <Button type="submit" variant="primary" className="mt-3">Next</Button>
//                     </div> */}
//                     <div className="text-center">
//                           {/* Back Button */}
//                           <Button
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

// export default TitleHolderDetails;
 
 
//------------------
//-------------------------

//  import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { TitleHolderDetails_api } from "../apiUrls";
// import { getToken, getSessionId, getUserId, saveFormData, getFormData } from "./sessionUtils";

// const TitleHolderDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const token = getToken();
//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // Save sessionId from URL into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: getFormData("TitleHolderDetails") || {
//       titleHolderName: "",
//       titleHolderRelationType: "",
//       titleHolderRelativeName: "",
//       titleHolderResidenceType: "",
//       titleHolderDoorNumber: "",
//       titleHolderStreetName: "",
//       titleHolderCityName: "",
//       titleHolderMandalName: "",
//       titleHolderDistrictName: "",
//       titleHolderPincode: ""
//     },

//     validate: (values) => {
//       const errors = {};
//       if (!values.titleHolderName) errors.titleHolderName = "*required*";
//       if (!values.titleHolderRelationType) errors.titleHolderRelationType = "*required*";
//       if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = "*required*";
//       if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = "*required*";
//       if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = "*required*";
//       if (!values.titleHolderStreetName) errors.titleHolderStreetName = "*required*";
//       if (!values.titleHolderCityName) errors.titleHolderCityName = "*required*";
//       if (!values.titleHolderMandalName) errors.titleHolderMandalName = "*required*";
//       if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = "*required*";
//       if (!values.titleHolderPincode) {
//         errors.titleHolderPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.titleHolderPincode)) {
//         errors.titleHolderPincode = "Pincode must be exactly 6 digits";
//       }
//       return errors;
//     },

//     onSubmit: async (values) => {
//       const sessionId = getSessionId();
//       const userId = getUserId();

//       if (!token || !sessionId || !userId) {
//         alert("Session or token missing. Please login again.");
//         return;
//       }

//       setLoading(true);

//       const payload = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId
//       };

//       try {
//         const response = await fetch(TitleHolderDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//           },
//           body: JSON.stringify(payload)
//         });

//         console.log("Status:", response.status);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           saveFormData("TitleHolderDetails", values); // Save locally
//           onNext(); // Navigate to next page
//         } else if (response.status === 401) {
//           alert("Unauthorized. Please login again.");
//         } else {
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   });

//   // Auto-save form data to sessionStorage on value change
//   useEffect(() => {
//     saveFormData("TitleHolderDetails", formik.values);
//   }, [formik.values]);

//   // Prefill form from sessionStorage on mount
//   useEffect(() => {
//     const savedData = getFormData("TitleHolderDetails");
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", paddingBottom: "50px" }}>
//       <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
//         <h3 className="text-center">Title Holder Details</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           {[
//             { label: "Title Holder Name", name: "titleHolderName", type: "text" },
//             { label: "Title Holder Relation Type", name: "titleHolderRelationType", type: "select", options: ["S/O","W/O","D/O","C/O","H/O"] },
//             { label: "Title Holder Relative Name", name: "titleHolderRelativeName", type: "text" },
//             { label: "Title Holder Residence Type", name: "titleHolderResidenceType", type: "select", options: ["Flat","House"] },
//             { label: "Title Holder Door Number", name: "titleHolderDoorNumber", type: "text" },
//             { label: "Title Holder Street Name", name: "titleHolderStreetName", type: "text" },
//             { label: "Title Holder City Name", name: "titleHolderCityName", type: "text" },
//             { label: "Title Holder Mandal Name", name: "titleHolderMandalName", type: "text" },
//             { label: "Title Holder District Name", name: "titleHolderDistrictName", type: "text" },
//             { label: "Title Holder Pincode", name: "titleHolderPincode", type: "text" }
//           ].map((field) => (
//             <div key={field.name} className="row align-items-center mb-3">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">{field.label}</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 {field.type === "select" ? (
//                   <Form.Select
//                     name={field.name}
//                     value={formik.values[field.name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
//                   >
//                     <option value="">Select</option>
//                     {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                   </Form.Select>
//                 ) : (
//                   <Form.Control
//                     type={field.type}
//                     name={field.name}
//                     value={formik.values[field.name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                   />
//                 )}
//                 {formik.touched[field.name] && formik.errors[field.name] && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
//                 )}
//               </div>
//             </div>
//           ))}

//           <div className="text-center mt-4">
//             <Button variant="secondary" className="me-3" onClick={() => window.history.back()}>Back</Button>
//             <Button type="submit" variant="primary">{loading ? "Loading..." : "Next"}</Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default TitleHolderDetails;

// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useSearchParams } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import { TitleHolderDetails_api } from "../apiUrls";
// import { getToken, getSessionId, getUserId, saveFormData, getFormData } from "./sessionUtils";

// const TitleHolderDetails = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   const token = getToken();
//   const sessionIdFromUrl = searchParams.get("sessionId");

//   // Save sessionId from URL into sessionStorage
//   useEffect(() => {
//     if (sessionIdFromUrl) {
//       sessionStorage.setItem("sessionId", sessionIdFromUrl);
//       console.log("Session ID stored in sessionStorage:", sessionIdFromUrl);
//     }
//   }, [sessionIdFromUrl]);

//   const formik = useFormik({
//     initialValues: getFormData("TitleHolderDetails") || {
//       titleHolderName: "",
//       titleHolderRelationType: "",
//       titleHolderRelativeName: "",
//       titleHolderResidenceType: "",
//       titleHolderDoorNumber: "",
//       titleHolderStreetName: "",
//       titleHolderCityName: "",
//       titleHolderMandalName: "",
//       titleHolderDistrictName: "",
//       titleHolderPincode: ""
//     },

//     validate: (values) => {
//       const errors = {};
//       if (!values.titleHolderName) errors.titleHolderName = "*required*";
//       if (!values.titleHolderRelationType) errors.titleHolderRelationType = "*required*";
//       if (!values.titleHolderRelativeName) errors.titleHolderRelativeName = "*required*";
//       if (!values.titleHolderResidenceType) errors.titleHolderResidenceType = "*required*";
//       if (!values.titleHolderDoorNumber) errors.titleHolderDoorNumber = "*required*";
//       if (!values.titleHolderStreetName) errors.titleHolderStreetName = "*required*";
//       if (!values.titleHolderCityName) errors.titleHolderCityName = "*required*";
//       if (!values.titleHolderMandalName) errors.titleHolderMandalName = "*required*";
//       if (!values.titleHolderDistrictName) errors.titleHolderDistrictName = "*required*";
//       if (!values.titleHolderPincode) {
//         errors.titleHolderPincode = "*required*";
//       } else if (!/^\d{6}$/.test(values.titleHolderPincode)) {
//         errors.titleHolderPincode = "Pincode must be exactly 6 digits";
//       }
//       return errors;
//     },

//     onSubmit: async (values) => {
//       const sessionId = getSessionId();
//       const userId = getUserId();

//       if (!token || !sessionId || !userId) {
//         alert("Session or token missing. Please login again.");
//         return;
//       }

//       setLoading(true);

//       const payload = {
//         ...values,
//         session_id: sessionId,
//         user_id: userId
//       };

//       try {
//         const response = await fetch(TitleHolderDetails_api, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//           },
//           body: JSON.stringify(payload)
//         });

//         console.log("Status:", response.status);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);
//           saveFormData("TitleHolderDetails", values); // Save locally
//           onNext(); // Navigate to next page
//         } else if (response.status === 401) {
//           alert("Unauthorized. Please login again.");
//         } else {
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//         alert("Network error. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   });

//   // Auto-save form data to sessionStorage on value change
//   useEffect(() => {
//     saveFormData("TitleHolderDetails", formik.values);
//   }, [formik.values]);

//   // Prefill form from sessionStorage on mount
//   useEffect(() => {
//     const savedData = getFormData("TitleHolderDetails");
//     if (savedData) formik.setValues(savedData);
//   }, []);

//   // Prefill form from backend session data
//   useEffect(() => {
//     const sessionId = getSessionId();
//     if (sessionId) {
//       fetch(`http://localhost:3000/api/session/create-session/${sessionId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
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
//   }, [token]);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", paddingBottom: "50px" }}>
//       <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
//         <h3 className="text-center">Title Holder Details</h3>

//         <Form onSubmit={formik.handleSubmit}>
//           {[
//             { label: "Title Holder Name", name: "titleHolderName", type: "text" },
//             { label: "Title Holder Relation Type", name: "titleHolderRelationType", type: "select", options: ["S/O","W/O","D/O","C/O","H/O"] },
//             { label: "Title Holder Relative Name", name: "titleHolderRelativeName", type: "text" },
//             { label: "Title Holder Residence Type", name: "titleHolderResidenceType", type: "select", options: ["Flat","House"] },
//             { label: "Title Holder Door Number", name: "titleHolderDoorNumber", type: "text" },
//             { label: "Title Holder Street Name", name: "titleHolderStreetName", type: "text" },
//             { label: "Title Holder City Name", name: "titleHolderCityName", type: "text" },
//             { label: "Title Holder Mandal Name", name: "titleHolderMandalName", type: "text" },
//             { label: "Title Holder District Name", name: "titleHolderDistrictName", type: "text" },
//             { label: "Title Holder Pincode", name: "titleHolderPincode", type: "text" }
//           ].map((field) => (
//             <div key={field.name} className="row align-items-center mb-3">
//               <div className="col-12 col-md-6">
//                 <Form.Label className="fs-3">{field.label}</Form.Label>
//               </div>
//               <div className="col-12 col-md-6">
//                 {field.type === "select" ? (
//                   <Form.Select
//                     name={field.name}
//                     value={formik.values[field.name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
//                   >
//                     <option value="">Select</option>
//                     {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                   </Form.Select>
//                 ) : (
//                   <Form.Control
//                     type={field.type}
//                     name={field.name}
//                     value={formik.values[field.name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
//                   />
//                 )}
//                 {formik.touched[field.name] && formik.errors[field.name] && (
//                   <div className="text-danger fw-bold fs-5">{formik.errors[field.name]}</div>
//                 )}
//               </div>
//             </div>
//           ))}

//           <div className="text-center mt-4">
//             <Button variant="secondary" className="me-3" onClick={() => window.history.back()}>Back</Button>
//             <Button type="submit" variant="primary">{loading ? "Loading..." : "Next"}</Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default TitleHolderDetails;
