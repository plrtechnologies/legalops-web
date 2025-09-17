// import { useFormik } from "formik";
// import React, { useState }  from "react";
// import { Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/esm/Button';
// import { Login_api } from "../apiUrls";


// const   Login =({ onNext })=>{
//   const [loading, setLoading] = useState(false);
//    const  formik = useFormik({
//       initialValues:{
//         name:"",
//         email:"",
//         password:""
//       },
//       // onSubmit:(values)=>{
//       //   console.log("form submit", formik.values)
//       // },
//       onSubmit: async (values) => {
//         console.log('Form Submitted:', values);

//         setLoading(true);  // Start loading state

//         const apiUrl = Login_api;  // Replace with actual API endpoint

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
        
//         if (!values.name){   
//           errors.password= "Password is required"
//         }else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters";
//         }
//       return errors;

//       }

//    })
    



//     return(
//         <div>
//             <h1 className="text-center text-primary"   > Login   </h1>   {/*just here creating another page */}

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
//                          value={formik.values.name} onChange={formik.handleChange}/>
//                          {formik.errors.name?<div className="text-danger">{formik.errors.name}</div>:null}
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label className="fs-4">Email </Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" name="email"
//                          value={formik.values.email} onChange={formik.handleChange}/>
//                          {formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
//                     </Form.Group>
 
//                     <Form.Group className="mb-3" controlId="formGroupPassword">
//                         <Form.Label className="fs-4">Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" name="password"
//                          value={formik.values.password} onChange={formik.handleChange}/>
//                          {formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
//                     </Form.Group>
                    
//                      <p>If you don't have an account  <Link to="/Signup">Signup</Link> here</p>
//                      <div className="text-center">
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
                   
//               </div>
//               </div>

//         </div>
//     )
// }

// export default   Login;

//----------------------------------
// modified code 

//  import { useFormik } from "formik";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/esm/Button";
// import Cookies from "js-cookie";
// //import { Login_api } from "../apiUrls";

// //const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// const Login = ({ onNext }) => {
//   const [loading, setLoading] = useState(false);
// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//   const LOGIN_ENDPOINT = process.env.REACT_APP_API_LOGIN;

//   const formik = useFormik({
//     initialValues: { name: "", email: "", password: "" },

//     onSubmit: async (values) => {
//       console.log("Form Submitted:", values);
//       setLoading(true);
//     //const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//       try {
        
//      const response = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`,{
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log("API response:", data);

//           // ✅ Make sure backend sends { token: "..." }
//           const token = data.token;
//           if (token) {
//             Cookies.set("authToken", token, {
//               expires: 7,
//               // 🔹 For local development on http://localhost,
//               //    keep secure:false so cookie is set.
//               secure: process.env.NODE_ENV === "production",
//               sameSite: "strict",
//             });
//           }

//           onNext();
//         } else {
//          // console.error("API Error:", response.statusText);
//         }
//       } 
//       catch (error) {
//         console.error("Error during API call:", error);
//       } finally {
//         setLoading(false);
//       }
//     },

//     validate: (values) => {
//       const errors = {};
//       if (!values.name) errors.name = "Name is required";

//       if (!values.email) {
//         errors.email = "Email is required";
//       } else if (
//         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }

//       if (!values.password) {
//         errors.password = "Password is required";
//       } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters";
//       }
//       return errors;
//     },
//   });

//   return (
//     <div>
//       <h1 className="text-center text-primary">Login</h1>

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
//             <Form.Group className="mb-3" controlId="forname">
//               <Form.Label className="fs-4">Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//               />
//               {formik.errors.name && (
//                 <div className="text-danger">{formik.errors.name}</div>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label className="fs-4">Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//               />
//               {formik.errors.email && (
//                 <div className="text-danger">{formik.errors.email}</div>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGroupPassword">
//               <Form.Label className="fs-4">Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//               />
//               {formik.errors.password && (
//                 <div className="text-danger">{formik.errors.password}</div>
//               )}
//             </Form.Group>

//             <p>
//               If you don't have an account <Link to="/Signup">Signup</Link> here
//             </p>
//             <div className="text-center">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="mt-3"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Next"}
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useFormik } from "formik";

// const BASE_URL = process.env.REACT_APP_API_URL;   // from .env
// const LOGIN_ENDPOINT = "/api/auth/login";

// export default function Login() {
//   const [serverError, setServerError] = useState("");

//   const formik = useFormik({
//     initialValues: {
//       user_id: "",
//       name: "",
//       email: "",
//       password: "",
//     },

//     // ✅ we will do simple validation inside onSubmit
//     onSubmit: async (values, { setSubmitting }) => {
//       setServerError("");

//       // ---------- Simple manual checks ----------
//       if (!values.user_id || !values.name || !values.email || !values.password) {
//         setServerError("All fields (User ID, Name, Email, Password) are required.");
//         setSubmitting(false);
//         return;
//       }
//       // basic email pattern check
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(values.email)) {
//         setServerError("Please enter a valid email address.");
//         setSubmitting(false);
//         return;
//       }
//       // ------------------------------------------

//       try {
//         const response = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values), // includes user_id
//         });

//         if (!response.ok) {
//           let errorMsg = `Error ${response.status}`;
//           try {
//             const data = await response.json();
//             if (data?.message) errorMsg = data.message;
//           } catch {
//             // ignore if not JSON
//           }
//           setServerError(errorMsg);
//           return;
//         }

//         const data = await response.json();
//         console.log("Login success:", data);
//         alert("Login successful!");
//       } catch (err) {
//         console.error("Network error:", err);
//         setServerError("Unable to connect to server.");
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={formik.handleSubmit}>
//         {/* User ID */}
//         <div>
//           <label>User ID</label>
//           <input
//             type="text"
//             name="user_id"
//             onChange={formik.handleChange}
//             value={formik.values.user_id}
//           />
//         </div>

//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             onChange={formik.handleChange}
//             value={formik.values.name}
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//         </div>

//         {serverError && (
//           <div style={{ color: "red", marginTop: "10px" }}>{serverError}</div>
//         )}

//         <button type="submit" disabled={formik.isSubmitting}>
//           {formik.isSubmitting ? "Logging in…" : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }




//new code running good but ui not good 

// import React, { useState } from "react";
// import { useFormik } from "formik";

// const BASE_URL = process.env.REACT_APP_API_URL;   // e.g. http://localhost:3000
// const LOGIN_ENDPOINT = "/api/auth/login";

// export default function Login() {
//   const [serverError, setServerError] = useState("");
//   const [userId, setUserId] = useState(null); // 🔹 to display user_id returned by backend

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },

//     onSubmit: async (values, { setSubmitting }) => {
//       setServerError("");

//       // ---------- Simple manual validation ----------
//       if (!values.name || !values.email || !values.password) {
//         setServerError("Name, Email and Password are required.");
//         setSubmitting(false);
//         return;
//       }

//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(values.email)) {
//         setServerError("Please enter a valid email address.");
//         setSubmitting(false);
//         return;
//       }
//       // ----------------------------------------------

//       try {
//         const response = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         });

//         if (!response.ok) {
//           let errorMsg = `Error ${response.status}`;
//           try {
//             const errData = await response.json();
//             if (errData?.error) errorMsg = errData.error;
//           } catch {
//             // ignore parse error
//           }
//           setServerError(errorMsg);
//           return;
//         }

//          const data = await response.json();
// console.log("JWT Token:", data.token); // now this will show the token
// localStorage.setItem("authToken", data.token);

//         // ✅ Get user_id from backend response
//         if (data.user && data.user.user_id) {
//           setUserId(data.user.user_id);
//           console.log("User ID from backend:", data.user.user_id);
//           // If you want to use it later across pages:
//           // localStorage.setItem("user_id", data.user.user_id);
//         }
//  if (data.token) {
//   localStorage.setItem("authToken", data.token);
//   localStorage.setItem("user_id", data.user.user_id); // optional: store user_id
// }

//         alert("Login successful!");
//       } catch (err) {
//         console.error("Network error:", err);
//         setServerError("Unable to connect to server.");
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             onChange={formik.handleChange}
//             value={formik.values.name}
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//         </div>

//         {serverError && (
//           <div style={{ color: "red", marginTop: "10px" }}>{serverError}</div>
//         )}

//         <button type="submit" disabled={formik.isSubmitting}>
//           {formik.isSubmitting ? "Logging in…" : "Login"}
//         </button>
//       </form>

//       {/* 🔹 Show the user_id that backend sends after login */}
//       {userId && (
//         <p style={{ marginTop: "20px", color: "green" }}>
//           Logged in User ID: <strong>{userId}</strong>
//         </p>
//       )}
//     </div>
//   );
// }


//---------------------------
//------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BASE_URL = process.env.REACT_APP_API_URL;   // e.g. http://localhost:3000
const LOGIN_ENDPOINT = "/api/auth/login";

export default function Login() {
  const navigate = useNavigate(); 
  const [serverError, setServerError] = useState("");
  const [userId, setUserId] = useState(null); // 🔹 to display user_id returned by backend

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: async (values, { setSubmitting }) => {
      setServerError("");

      // ---------- Simple manual validation ----------
      if (!values.name || !values.email || !values.password) {
        setServerError("Name, Email and Password are required.");
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
        const response = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
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
        console.log("JWT Token:", data.token); // now this will show the token
        localStorage.setItem("authToken", data.token);

        // ✅ Get user_id from backend response
        if (data.user && data.user.user_id) {
          setUserId(data.user.user_id);
          console.log("User ID from backend:", data.user.user_id);
          // If you want to use it later across pages:
          // localStorage.setItem("user_id", data.user.user_id);
        }
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("user_id", data.user.user_id); // optional: store user_id
        }

        //alert("Login successful!");
        navigate("/");    
      } catch (err) {
        console.error("Network error:", err);
        setServerError("Unable to connect to server.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <h1 className="text-center text-primary">Login</h1>

      <div className="d-flex justify-content-center">
        <div
          className="col col-md-6 col-lg-10"
          style={{
            border: "2px solid #007bff",
            borderRadius: "10px",
            padding: "20px",
            width: "400px",
            backgroundColor: "#f8f9fa",
            marginBottom: "84px",
          }}
        >
          <Form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="forname">
              <Form.Label className="fs-4">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-4">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="fs-4">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Group>

            {serverError && (
              <div className="text-danger mb-3">{serverError}</div>
            )}

            <p>
              If you don't have an account <Link to="/Signup">Signup</Link> here
            </p>

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="mt-3"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Logging in…" : "Login"}
              </Button>
            </div>
          </Form>

          {/* 🔹 Show the user_id that backend sends after login */}
          {userId && (
            <p style={{ marginTop: "20px", color: "green" }}>
              Logged in User ID: <strong>{userId}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
