// import { useFormik } from "formik";
// import React, { useState }  from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/esm/Button';
// import { Login_api } from "../apiUrls";
// import { setToken } from "../auth";


// const   Login =({ onNext })=>{
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const navigate = useNavigate();
//   const  formik = useFormik({
//       initialValues:{
//         email:"",
//         password:""
//       },
//       // onSubmit:(values)=>{
//       //   console.log("form submit", formik.values)
//       // },
//       onSubmit: async (values) => {
//         setLoading(true);
//         setErrorMsg("");
//         const apiUrl = Login_api;
//         try {
//           const response = await fetch(apiUrl, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email: values.email, password: values.password })
//           });
//           if (response.ok) {
//             const data = await response.json();
//             if (data && data.token) {
//               setToken(data.token);
//               // Optionally store user info in localStorage or context
//               if (data.user) {
//                 localStorage.setItem('user', JSON.stringify(data.user));
//                 if (data.user.user_id) {
//                   sessionStorage.setItem('user_id', data.user.user_id);
//                 }
//               }
//               if (onNext) {
//                 onNext();
//               } else {
//                 navigate("/");
//               }
//             } else {
//               setErrorMsg(data && data.message ? data.message : "Invalid credentials");
//             }
//           } else {
//             const data = await response.json().catch(() => null);
//             setErrorMsg(data && data.message ? data.message : "Invalid credentials");
//           }
//         } catch (err) {
//           setErrorMsg("An error occurred. Please try again.");
//         } finally {
//           setLoading(false);
//         }
//       },
//       validate:(values)=>{
//         let errors ={};
//         if (!values.email) {
//           errors.email = "Email is required";
//         } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
//           errors.email = "Invalid email address";
//         }
//         if (!values.password) {
//           errors.password = "Password is required";
//         } else if (values.password.length < 6) {
//           errors.password = "Password must be at least 6 characters";
//         }
//         return errors;
//       }

//    })
    



//     return(
//       <div style={{ minHeight: "82vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//         <div style={{ height: 32 }} />
//         <h1 className="text-center text-primary" style={{ marginBottom: 0 }}>Login</h1>
//         <div className="d-flex justify-content-center align-items-center w-100" style={{ flex: 1 }}>
//           <div className="col col-md-6 col-lg-10"
//             style={{
//               border: '2px solid #007bff',
//               borderRadius: '10px',
//               padding: '20px',
//               width: '400px',
//               backgroundColor: '#f8f9fa',
//               marginBottom: "84px",
//               boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
//             }}>
//             <Form autoComplete="off" onSubmit={formik.handleSubmit}>
//               {errorMsg && <div className="text-danger text-center mb-2">{errorMsg}</div>}
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label className="fs-4">Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email address" name="email"
//                   value={formik.values.email} onChange={formik.handleChange} />
//                 {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formGroupPassword">
//                 <Form.Label className="fs-4">Password</Form.Label>
//                 <div style={{ position: "relative" }}>
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     name="password"
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                   />
//                   <span
//                     onClick={() => setShowPassword((prev) => !prev)}
//                     style={{
//                       position: "absolute",
//                       right: 10,
//                       top: "50%",
//                       transform: "translateY(-50%)",
//                       cursor: "pointer",
//                       color: "#007bff"
//                     }}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                 </div>
//                 {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
//               </Form.Group>
//               <p>If you don't have an account <Link to="/Signup">Signup</Link> here</p>
//               <div className="text-center">
//                 <Button
//                   type="submit"
//                   variant="primary"
//                   className="mt-3"
//                   disabled={loading}
//                 >
//                   {loading ? "Loading..." : "Login"}
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     )
// }

// export default   Login;
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Login_api } from "../apiUrls"; // Updated API URL
import { setToken } from "../auth";

const Login = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMsg("");

      const apiUrl = Login_api; // ✅ Use .env API

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email, password: values.password })
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.token) {
            setToken(data.token);

            if (data.user) {
              localStorage.setItem('user', JSON.stringify(data.user));
              if (data.user.user_id) {
                sessionStorage.setItem('user_id', data.user.user_id);
              }
            }

            if (onNext) {
              onNext();
            } else {
              navigate("/"); // Redirect after login
            }
          } else {
            setErrorMsg(data?.message || "Invalid credentials");
          }
        } else {
          const data = await response.json().catch(() => null);
          setErrorMsg(data?.message || "Invalid credentials");
        }
      } catch (err) {
        setErrorMsg("Network error. Please check your backend.");
      } finally {
        setLoading(false);
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      return errors;
    }
  });

  return (
    <div style={{ minHeight: "82vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ height: 32 }} />
      <h1 className="text-center text-primary" style={{ marginBottom: 0 }}>Login</h1>
      <div className="d-flex justify-content-center align-items-center w-100" style={{ flex: 1 }}>
        <div className="col col-md-6 col-lg-10"
          style={{
            border: '2px solid #007bff',
            borderRadius: '10px',
            padding: '20px',
            width: '400px',
            backgroundColor: '#f8f9fa',
            marginBottom: "84px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
          }}>
          <Form autoComplete="off" onSubmit={formik.handleSubmit}>
            {errorMsg && <div className="text-danger text-center mb-2">{errorMsg}</div>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-4">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="fs-4">Password</Form.Label>
              <div style={{ position: "relative" }}>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <span
                  onClick={() => setShowPassword(prev => !prev)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#007bff"
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
            </Form.Group>

            <p>If you don't have an account <Link to="/Signup">Signup</Link> here</p>
            <div className="text-center">
              <Button type="submit" variant="primary" className="mt-3" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
