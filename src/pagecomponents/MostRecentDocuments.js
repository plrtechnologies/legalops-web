import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  
import { Mostrecentdocuments_api } from "../apiUrls";

const MostRecentDocument =({onNext})=>{
    const navigate = useNavigate();  // Initialize navigate
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
         initialValues: JSON.parse(sessionStorage.getItem("MostRecentDocuments")) || {
             selectDeedType:"",
             dateofRegistration:"",
             documentNumber:"",
             nameofSubregistrarOffice:"",
             locationOfSubregistrarOffice:"",
             subregistrarOfficeMandal:"",
            subregistrarOfficeDistrict:"",
            subregistrarOfficeLocalAuthority:"" 
},
    //    onSubmit:(values)=>{
    //     console.log("formik",values)
    //     onNext();
    //    },
    onSubmit: async (values) => {
        console.log('Form Submitted:', values);
        // Step 1: Retrieve the session ID from sessionStorage
      const sessionId = sessionStorage.getItem("sessionID"); // Retrieve session ID
      // Step 2: Prepare the data to be sent to the API
      const dataToSend = {
          ...values,   // All form data
          sessionId: sessionId  // Add session ID
      };

  //comented the api code for testing purpose ............
        // setLoading(true);  // Start loading state
        // const apiUrl = Mostrecentdocuments_api;  // Replace with actual API endpoint
        // try {
        //     const response = await fetch(apiUrl, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(values),
        //     });
        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log("API response:", data);
        //         // After a successful API call, call onNext
                onNext();
        //     } else {
        //         console.error("API Error:", response.statusText);
        //         // Optionally handle the error (show a message to the user)
        //     }
        // } catch (error) {
        //     console.error("Error during API call:", error);
        //     // Optionally handle the error (show a message to the user)
        // } finally {
        //     setLoading(false);  // End loading state
        // }
    },
       validate:(values)=>{
          let errors ={};     //{initially no errrors}
          if(values.selectDeedType===""){
            errors.selectDeedType="*required"
          }
          if(values.dateofRegistration===""){
            errors.dateofRegistration="*required"
          }
          if(values.documentNumber===""){
            errors.documentNumber="*required"
          }
          if(values.nameofSubregistrarOffice===""){
            errors.nameofSubregistrarOffice="*required"
          }
          if(values.locationOfSubregistrarOffice===""){
            errors.locationOfSubregistrarOffice="*required"
          }
          if(values.subregistrarOfficeMandal===""){
            errors.subregistrarOfficeMandal="*required"
          }
          if(values.subregistrarOfficeDistrict===""){
            errors.subregistrarOfficeDistrict="*required"
          }
          if(values.subregistrarOfficeLocalAuthority===""){
            errors.subregistrarOfficeLocalAuthority="*required"
          }
           return errors;
       }
 
       })
  
       // Save form data to sessionStorage on change
           useEffect(() => {
             sessionStorage.setItem("MostRecentDocuments", JSON.stringify(formik.values));
         }, [formik.values]);
       
         // Retrieve form data from sessionStorage on component mount
         useEffect(() => {
             const savedData = JSON.parse(sessionStorage.getItem("MostRecentDocuments"));
             if (savedData) {
                 formik.setValues(savedData);
             }
         }, []);


           return(
        <div>
            <h2 className="text-center">Most Recent Document Details </h2>
            <div 
            style={{height:"100vh",paddingLeft:"20px",paddingTop:"10px",overflowX:"hidden" }}>

                <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="SelectDeedType">
                   
                <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                    <div className="col-12 col-lg-5">
                        <Form.Label className="fs-3">
                        SelectDeedType  
                        </Form.Label>
                    </div>
                        <div style={{ width:"350px"}}>
                            <Form.Select name="selectDeedType"
                             value={formik.values.selectDeedType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{fontSize:"25px"}}>
                            <option value=""> select</option>
                            <option value="sale deed">sale deed </option>
                            <option value="gift deed">gift deed </option>
                            <option value="will deed">will deed </option>
                            <option value="relinquishment deed">relinquishment deed </option>
                            <option value="mortgage deed">mortgage deed </option>
                            <option value="partition deed">partition deed </option>
                            </Form.Select>
                            {/* //errors view on webpage */}
                            {/* {formik.errors.selectDeedType?<div className="text-danger fs-5 ">{formik.errors.selectDeedType}</div>:null} */}
                            {formik.touched.selectDeedType && formik.errors.selectDeedType && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.selectDeedType}</div>
                        )}  
                        </div>
                </div>
                </Form.Group>
                             <Form.Group controlId="DateOfRegistartion">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3">
                              DateOfRegistartion  
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="date" name="dateofRegistration"
                            value={formik.values.dateofRegistration} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{fontSize:"25px"}}/>
                            {/* {formik.errors.dateofRegistration?<div className="text-danger fs-5 ">{formik.errors.dateofRegistration}</div>:null}  */}
                            {formik.touched. dateofRegistration && formik.errors. dateofRegistration && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. dateofRegistration}</div>
                            )}
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Document Number">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3" >
                             Document Number
                            </Form.Label>
                            
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="documentNumber"
                             
                            value={formik.values.documentNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{fontSize:"25px"}} />
                            {/* {formik.errors.documentNumber?<div className="text-danger fs-5 ">{formik.errors.documentNumber}</div>:null} */}
                            {formik.touched. documentNumber && formik.errors. documentNumber && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. documentNumber} </div>
                            )}
                           
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId=" Name Of Subregristrar Office ">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3">
                             Name Of Subregristrar Office 
                            </Form.Label>
                            {/* errors */}
                           
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="nameofSubregistrarOffice"
                               value={formik.values.nameofSubregistrarOffice} 
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               style={{fontSize:"25px"}}/>
                               {/* {formik.errors.nameofSubregistrarOffice?<div className="text-danger  fs-5 ">{formik.errors.nameofSubregistrarOffice}</div>:null} */}
                               {formik.touched.  nameofSubregistrarOffice && formik.errors.  nameofSubregistrarOffice && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  nameofSubregistrarOffice}</div>
                            )}
                            
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Location Of Subregristrar Office">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3">
                             Location Of Subregristrar Office 
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="locationOfSubregistrarOffice"
                             value={formik.values.locationOfSubregistrarOffice}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             style={{fontSize:"25px"}} />
                              {/* {formik.errors.locationOfSubregistrarOffice?<div className="text-danger  fs-5 ">{formik.errors.locationOfSubregistrarOffice}</div>:null} */}
                            {formik.touched.  locationOfSubregistrarOffice && formik.errors.  locationOfSubregistrarOffice && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  locationOfSubregistrarOffice}</div>
                            )}
                            
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Subregristrar Office Mandal">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3">
                             Subregristrar Office Mandal
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="subregistrarOfficeMandal"
                             value={formik.values.subregistrarOfficeMandal} 
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             style={{fontSize:"25px"}}/>
                              {/* {formik.errors.subregistrarOfficeMandal?<div className="text-danger  fs-5 ">{formik.errors.subregistrarOfficeMandal}</div>:null} */}
                              {formik.touched.  subregistrarOfficeMandal && formik.errors.  subregistrarOfficeMandal && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  subregistrarOfficeMandal}</div>
                            )}
                            
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Subregristrar Office District">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3">
                             Subregristrar Office District 
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="subregistrarOfficeDistrict"
                            value={formik.values.subregistrarOfficeDistrict} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{fontSize:"25px"}}/>
                             {/* {formik.errors.subregistrarOfficeDistrict?<div className="text-danger  fs-5 ">{formik.errors.subregistrarOfficeDistrict}</div>:null} */}
                             {formik.touched.  subregistrarOfficeDistrict && formik.errors.  subregistrarOfficeDistrict && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  subregistrarOfficeDistrict}</div>
                            )}
                            
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Subregristrar Office Local Authority">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label className="fs-3">
                             Subregristrar Office Local Authority  
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="subregistrarOfficeLocalAuthority" 
                                value={formik.values.subregistrarOfficeLocalAuthority} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{fontSize:"25px"}}/>
                                 {/* {formik.errors.subregistrarOfficeLocalAuthority?<div className="text-danger fs-5">{formik.errors.subregistrarOfficeLocalAuthority}</div>:null} */}
                                 {formik.touched.  subregistrarOfficeLocalAuthority && formik.errors.  subregistrarOfficeLocalAuthority && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  subregistrarOfficeLocalAuthority}</div>
                            )}
                           
                            </div>
                        </div>

                    </Form.Group>
                  
                <div className="text-center">

                 
                        {/* Back Button */}
                        <Button
                            variant="secondary"
                            className="mt-3 me-3"
                            onClick={() => navigate(-1)}  // Navigate back
                        >
                            Back
                        </Button>
                        
                           <Button
                                type="submit"
                                variant="primary"
                                className="mt-3"
                                disabled={loading}>
                            {loading ? "Loading..." : "Next"}
                                        </Button>
                                    </div>
                    </Form>                   
            </div>
        </div>
      
       
     )

}
export default MostRecentDocument;

 