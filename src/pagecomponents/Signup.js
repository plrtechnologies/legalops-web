import { useFormik } from "formik";
import React from "react";
 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const  Signup =()=>{
   const  formik = useFormik({
      initialValues:{
        name:"",
        email:"",
        password:"",
        confirmPassword:""
      },
      onSubmit:(values)=>{
        console.log("form submit", formik.values)
      },
      validate:(values)=>{
         let errors ={};     
         
         if (!values.name){    // if name is empty while submitting, it will show error 
             errors.name= "Name is required"
         }
         if (!values.email) {   
          errors.email = "Email is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
          errors.email = "Invalid email address";
        }
        
         
        // Password Validation
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be at least 6 characters";
        }

        // Confirm Password Validation
        if (!values.confirmPassword) {
          errors.confirmPassword = "Confirm Password is required";
        } else if (values.password && values.password.length >= 6) {
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
          }
        }

      return errors;

      }

   })
    return(
        <div>
            <h1 className="text-center text-primary"> Signup   </h1>   {/*just here creating another page */}

              <div className="d-flex justify-content-center"  > 
              <div className="col col-md-6 col-lg-10" 
                    style={{
                            border: '2px solid #007bff',
                            borderRadius: '10px',
                            padding: '20px',
                            width: '400px',
                            backgroundColor: '#f8f9fa',
                            marginBottom:"84px"
                        }}>
                 <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="forname">
                        <Form.Label className="fs-4">Name </Form.Label>
                        <Form.Control   type="text" placeholder="Enter name" name="name"  
                         value={formik.values.name}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur} />
                         {formik.errors.name?<div className="text-danger">{formik.errors.name}</div>:null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-4">Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"
                         value={formik.values.email} 
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}/>
                         {formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
                    </Form.Group>
 
                    <Form.Group className="mb-3" controlId="Password">
                        <Form.Label className="fs-4">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                         value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                         {formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label className="fs-4">confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirmPassword" name="confirmPassword"
                         value={formik.values.confirmPassword}
                          onChange={formik.handleChange} 
                          onBlur={formik.handleBlur}/>
                         {formik.errors.confirmPassword?<div className="text-danger">{formik.errors.confirmPassword}</div>:null}
                    </Form.Group>
                    
                     {/* <p> If you have an account   <Link to="/Login">Login</Link> here</p>   */}
                    <Button type="submit"> Signup</Button>
                </Form>  
                   
              </div>
              </div>

        </div>
    )
}

export default  Signup;
