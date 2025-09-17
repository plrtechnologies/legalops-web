// import { useFormik } from "formik";
// import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/esm/Button';
// import { signup_api } from "../apiUrls";

// const  Signup =({ onNext })=>{
//   const [loading, setLoading] = useState(false);
//    const  formik = useFormik({
//       initialValues:{
//         name:"",
//         email:"",
//         password:"",
//         confirmPassword:""
//       },
//       // onSubmit:(values)=>{
//       //   console.log("form submit", formik.values)
//       // },
//       onSubmit: async (values) => {
//         console.log('Form Submitted:', values);

//         // Set loading state to true
//         setLoading(true);

//         // Replace with your actual API endpoint
//         const apiUrl = signup_api;

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(values),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("API response:", data);

//                 // After a successful API call, call onNext
//                 onNext();
//             } else {
//                 // Handle API error
//                 console.error("API Error:", response.statusText);
//                 // Optionally show an error message to the user
//             }
//         } catch (error) {
//             console.error("Error during API call:", error);
//             // Optionally show an error message to the user
//         } finally {
//             // Set loading state to false
//             setLoading(false);
//         }
//     },
//       validate:(values)=>{
//          let errors ={};     
         
//          if (!values.name){    // if name is empty while submitting, it will show error 
//              errors.name= "Name is required"
//          }
//          if (!values.email) {   
//           errors.email = "Email is required";
//         } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
//           errors.email = "Invalid email address";
//         }
        
         
//         // Password Validation
//         if (!values.password) {
//           errors.password = "Password is required";
//         } else if (values.password.length < 6) {
//           errors.password = "Password must be at least 6 characters";
//         }

//         // Confirm Password Validation
//         if (!values.confirmPassword) {
//           errors.confirmPassword = "Confirm Password is required";
//         } else if (values.password && values.password.length >= 6) {
//           if (values.password !== values.confirmPassword) {
//             errors.confirmPassword = "Passwords do not match";
//           }
//         }

//       return errors;

//       }

//    })
//     return(
//         <div>
//             <h1 className="text-center text-primary"> Signup   </h1>   {/*just here creating another page */}

//               <div className="d-flex justify-content-center"  > 
//               <div className="col col-md-6 col-lg-10" 
//                     style={{
//                             border: '2px solid #007bff',
//                             borderRadius: '10px',
//                             padding: '20px',
//                             width: '400px',
//                             backgroundColor: '#f8f9fa',
//                             marginBottom:"84px"
//                         }}>
//                  <Form autoComplete="off" onSubmit={formik.handleSubmit}>
//                     <Form.Group className="mb-3" controlId="forname">
//                         <Form.Label className="fs-4">Name </Form.Label>
//                         <Form.Control   type="text" placeholder="Enter name" name="name"  
//                          value={formik.values.name}
//                          onChange={formik.handleChange}
//                          onBlur={formik.handleBlur} />
//                          {formik.errors.name?<div className="text-danger">{formik.errors.name}</div>:null}
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label className="fs-4">Email </Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" name="email"
//                          value={formik.values.email} 
//                          onChange={formik.handleChange}
//                          onBlur={formik.handleBlur}/>
//                          {formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
//                     </Form.Group>
 
//                     <Form.Group className="mb-3" controlId="Password">
//                         <Form.Label className="fs-4">Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" name="password"
//                          value={formik.values.password}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}/>
//                          {formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
//                     </Form.Group>
                    
//                     <Form.Group className="mb-3" controlId="confirmPassword">
//                         <Form.Label className="fs-4">confirm Password</Form.Label>
//                         <Form.Control type="password" placeholder="confirmPassword" name="confirmPassword"
//                          value={formik.values.confirmPassword}
//                           onChange={formik.handleChange} 
//                           onBlur={formik.handleBlur}/>
//                          {formik.errors.confirmPassword?<div className="text-danger">{formik.errors.confirmPassword}</div>:null}
//                     </Form.Group>
                    
//                      {/* <p> If you have an account   <Link to="/Login">Login</Link> here</p>   */}
//                     {/* <Button type="submit"> Signup</Button>  */}
//                     <div className="text-center">
//                         <Button
//                             type="submit"
//                             variant="primary"
//                             className="mt-3"
//                             disabled={loading}
//                         >
//                              {loading ? "Loading..." : "Signup"} {/*here i change signup button name instead of "Next"  */}
//                         </Button>
//                     </div>
//                 </Form>  
                   
//               </div>
//               </div>

//         </div>
//     )
// }

// export default  Signup;


// import { useFormik } from "formik";
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/esm/Button";
// import { signup_api } from "../apiUrls";

// const Signup = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
//   const [userId, setUserId] = useState(null);   // ✅ store backend generated user_id

//   const BASE_URL = process.env.REACT_APP_API_URL;   // e.g. http://localhost:3000
//   const SIGNUP_ENDPOINT = "/api/auth/signup";

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },

//     validate: (values) => {
//       let errors = {};

//       // Name
//       if (!values.name) {
//         errors.name = "Name is required";
//       }

//       // Email
//       if (!values.email) {
//         errors.email = "Email is required";
//       } else if (
//         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }

//       // Password
//       if (!values.password) {
//         errors.password = "Password is required";
//       } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters";
//       }

//       // Confirm Password
//       if (!values.confirmPassword) {
//         errors.confirmPassword = "Confirm Password is required";
//       } else if (values.password !== values.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match";
//       }

//       return errors;
//     },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       setLoading(true);

//       try {
//         const response = await fetch(signup_api, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: values.name,
//             email: values.email,
//             password: values.password,
//           }), // ✅ confirmPassword is only for frontend check
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);

//           // ✅ Save backend-generated user_id
//           if (data.user_id) {
//             setUserId(data.user_id);
//             console.log("New User ID:", data.user_id);
//           }

//           // Go to next step if parent component needs it
//           if (onNext) onNext();
//         } else {
//           console.error("API Error:", response.status, response.statusText);
//         }
//       } catch (error) {
//         console.error("Error during API call:", error);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div>
//       <h1 className="text-center text-primary">Signup</h1>

//       <div className="d-flex justify-content-center">
//         <div
//           className="col col-md-6 col-lg-10"
//           style={{
//             border: "2px solid #007bff",
//             borderRadius: "10px",
//             padding: "20px",
//             width: "400px",
//             backgroundColor: "#f8f9fa",
//             marginBottom: "84px",
//           }}
//         >
//           <Form autoComplete="off" onSubmit={formik.handleSubmit}>
//             {/* Name */}
//             <Form.Group className="mb-3" controlId="forname">
//               <Form.Label className="fs-4">Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <div className="text-danger">{formik.errors.name}</div>
//               )}
//             </Form.Group>

//             {/* Email */}
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label className="fs-4">Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <div className="text-danger">{formik.errors.email}</div>
//               )}
//             </Form.Group>

//             {/* Password */}
//             <Form.Group className="mb-3" controlId="Password">
//               <Form.Label className="fs-4">Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <div className="text-danger">{formik.errors.password}</div>
//               )}
//             </Form.Group>

//             {/* Confirm Password */}
//             <Form.Group className="mb-3" controlId="confirmPassword">
//               <Form.Label className="fs-4">Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="confirmPassword"
//                 value={formik.values.confirmPassword}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.confirmPassword &&
//                 formik.errors.confirmPassword && (
//                   <div className="text-danger">
//                     {formik.errors.confirmPassword}
//                   </div>
//                 )}
//             </Form.Group>

//             <div className="text-center">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="mt-3"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Signup"}
//               </Button>
//             </div>
//           </Form>

//           {/* ✅ Display user_id once backend sends it */}
//           {userId && (
//             <p className="text-success text-center mt-3">
//               Your User ID is: <strong>{userId}</strong>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import { useFormik } from "formik";

const BASE_URL = process.env.REACT_APP_API_URL; // e.g., http://localhost:3000
const SIGNUP_ENDPOINT = "/api/auth/signup";

export default function Signup() {
  const [serverError, setServerError] = useState("");
  const [userId, setUserId] = useState(null); // 🔹 store backend generated user_id

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values, { setSubmitting }) => {
      setServerError("");

      // ---------- Simple manual validation ----------
      if (!values.name || !values.email || !values.password || !values.confirmPassword) {
        setServerError("All fields are required.");
        setSubmitting(false);
        return;
      }

      if (values.password !== values.confirmPassword) {
        setServerError("Passwords do not match.");
        setSubmitting(false);
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(values.email)) {
        setServerError("Please enter a valid email address.");
        setSubmitting(false);
        return;
      }
      // ----------------------------------------------

      try {
        const response = await fetch(`${BASE_URL}${SIGNUP_ENDPOINT}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
          }), // confirmPassword only for frontend check
        });

        if (!response.ok) {
          let errorMsg = `Error ${response.status}`;
          try {
            const errData = await response.json();
            if (errData?.error) errorMsg = errData.error;
          } catch {
            // ignore parse error
          }
          setServerError(errorMsg);
          return;
        }

        const data = await response.json();
        console.log("Signup success:", data);

        // ✅ Save backend-generated user_id
        if (data.user && data.user.user_id) {
          setUserId(data.user.user_id);
          console.log("User ID from backend:", data.user.user_id);
          // Optional: localStorage.setItem("user_id", data.user.user_id);
        }

        alert("Signup successful!");
      } catch (err) {
        console.error("Network error:", err);
        setServerError("Unable to connect to server.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </div>

        {serverError && (
          <div style={{ color: "red", marginTop: "10px" }}>{serverError}</div>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Signing up…" : "Signup"}
        </button>
      </form>

      {/* 🔹 Show the user_id that backend sends after signup */}
      {userId && (
        <p style={{ marginTop: "20px", color: "green" }}>
          Your User ID: <strong>{userId}</strong>
        </p>
      )}
    </div>
  );
}
