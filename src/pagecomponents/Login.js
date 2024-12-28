import { useFormik } from "formik";
import React, { useState }  from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Login_api } from "../apiUrls";


const   Login =({ onNext })=>{
  const [loading, setLoading] = useState(false);
   const  formik = useFormik({
      initialValues:{
        name:"",
        email:"",
        password:""
      },
      // onSubmit:(values)=>{
      //   console.log("form submit", formik.values)
      // },
      onSubmit: async (values) => {
        console.log('Form Submitted:', values);

        setLoading(true);  // Start loading state

        const apiUrl = Login_api;  // Replace with actual API endpoint

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("API response:", data);

                // After a successful API call, call onNext
                onNext();
            } else {
                console.error("API Error:", response.statusText);
                // Optionally handle the error (show a message to the user)
            }
        } catch (error) {
            console.error("Error during API call:", error);
            // Optionally handle the error (show a message to the user)
        } finally {
            setLoading(false);  // End loading state
        }
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
        
        if (!values.name){   
          errors.password= "Password is required"
        }else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
        }
      return errors;

      }

   })
    



    return(
        <div>
            <h1 className="text-center text-primary"   > Login   </h1>   {/*just here creating another page */}

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
                         value={formik.values.name} onChange={formik.handleChange}/>
                         {formik.errors.name?<div className="text-danger">{formik.errors.name}</div>:null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-4">Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"
                         value={formik.values.email} onChange={formik.handleChange}/>
                         {formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
                    </Form.Group>
 
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className="fs-4">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                         value={formik.values.password} onChange={formik.handleChange}/>
                         {formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
                    </Form.Group>
                    
                     <p>If you don't have an account  <Link to="/Signup">signup</Link> here</p>
                     <div className="text-center">
                        <Button
                            type="submit"
                            variant="primary"
                            className="mt-3"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Next"}
                        </Button>
                    </div>
                </Form>  
                   
              </div>
              </div>

        </div>
    )
}

export default   Login;
