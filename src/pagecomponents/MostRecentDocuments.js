import React from "react";
import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
const MostRecentDocument =({onNext})=>{
     const formik = useFormik({
         initialValues:{
             selectDeedType:"",
             dateofRegistration:"",
             documentNumber:"",
             nameofSubregistrarOffice:"",
             locationOfSubregistrarOffice:"",
             subregistrarOfficeMandal:"",
            subregistrarOfficeDistrict:"",
            subregistrarOfficeLocalAuthority:"" 
       },
       onSubmit:(values)=>{
        console.log("formik",values)
        onNext();
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
           return(
        <div>
            <h2 className="text-center">Most Recent Document Details </h2>
            <div 
            style={{height:"100vh",paddingLeft:"20px",paddingTop:"10px",overflowX:"hidden" }}>

                <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="SelectDeedType">
                   
                <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                    <div className="col-12 col-lg-5">
                        <Form.Label>
                        SelectDeedType  
                        </Form.Label>
                    </div>
                        <div style={{ width:"350px"}}>
                            <Form.Select name="selectDeedType"
                             value={formik.values.selectDeedType}
                             onChange={formik.handleChange} style={{fontSize:"25px"}}>
                            <option value=""> select</option>
                            <option value="sale deed">sale deed </option>
                            <option value="gift deed">gift deed </option>
                            <option value="will deed">will deed </option>
                            <option value="relinquishment deed">relinquishment deed </option>
                            <option value="mortgage deed">mortgage deed </option>
                            <option value="partition deed">partition deed </option>
                            </Form.Select>
                            {/* //errors view on webpage */}
                            {formik.errors.selectDeedType?<div className="text-danger fs-5 ">{formik.errors.selectDeedType}</div>:null}
                        </div>
                </div>
                </Form.Group>
                             <Form.Group controlId="DateOfRegistartion">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                              DateOfRegistartion  
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="date" name="dateofRegistration"
                            value={formik.values.dateofRegistration} 
                            onChange={formik.handleChange}style={{fontSize:"25px"}}/>
                            {formik.errors.dateofRegistration?<div className="text-danger fs-5 ">{formik.errors.dateofRegistration}</div>:null} 
                            
                            
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Document Number">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                             Document Number
                            </Form.Label>
                            
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="documentNumber"
                             
                            value={formik.values.documentNumber}
                            onChange={formik.handleChange}style={{fontSize:"25px"}} />
                            {formik.errors.documentNumber?<div className="text-danger fs-5 ">{formik.errors.documentNumber}</div>:null}
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId=" Name Of Subregristrar Office ">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                             Name Of Subregristrar Office 
                            </Form.Label>
                            {/* errors */}
                           
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="nameofSubregistrarOffice"
                               value={formik.values.nameofSubregistrarOffice} 
                               onChange={formik.handleChange}style={{fontSize:"25px"}}/>
                               {formik.errors.nameofSubregistrarOffice?<div className="text-danger  fs-5 ">{formik.errors.nameofSubregistrarOffice}</div>:null}
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Location Of Subregristrar Office">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                             Location Of Subregristrar Office 
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="locationOfSubregistrarOffice"
                             value={formik.values.locationOfSubregistrarOffice}
                             onChange={formik.handleChange}style={{fontSize:"25px"}} />
                              {formik.errors.locationOfSubregistrarOffice?<div className="text-danger  fs-5 ">{formik.errors.locationOfSubregistrarOffice}</div>:null}
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Subregristrar Office Mandal">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                             Subregristrar Office Mandal
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="subregistrarOfficeMandal"
                             value={formik.values.subregistrarOfficeMandal} 
                             onChange={formik.handleChange}style={{fontSize:"25px"}}/>
                              {formik.errors.subregistrarOfficeMandal?<div className="text-danger  fs-5 ">{formik.errors.subregistrarOfficeMandal}</div>:null}
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Subregristrar Office District">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                             Subregristrar Office District 
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="subregistrarOfficeDistrict"
                            value={formik.values.subregistrarOfficeDistrict} 
                            onChange={formik.handleChange}style={{fontSize:"25px"}}/>
                             {formik.errors.subregistrarOfficeDistrict?<div className="text-danger  fs-5 ">{formik.errors.subregistrarOfficeDistrict}</div>:null}
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="Subregristrar Office Local Authority">
                        <div className="d-flex flex-column flex-md-row flex-lg-row fs-3 mb-3">
                            <div className="col-12 col-lg-5">
                             <Form.Label>
                             Subregristrar Office Local Authority  
                            </Form.Label>
                            </div>

                            <div style={{width:"350px"}}>
                            <Form.Control type="text" name="subregistrarOfficeLocalAuthority" 
                                value={formik.values.subregistrarOfficeLocalAuthority} 
                                onChange={formik.handleChange}style={{fontSize:"25px"}}/>
                                 {formik.errors.subregistrarOfficeLocalAuthority?<div className="text-danger fs-5">{formik.errors.subregistrarOfficeLocalAuthority}</div>:null}
                            </div>
                        </div>

                    </Form.Group>
                    
                  
                  
                <div className='d-flex justify-content-center pt-5' >
                 <Button type="submit">Next</Button> {/* made changes here */}
                </div>
                    </Form>
                   
            </div>
        </div>
      
       
     )

     
    
    
 
    
       
        

}



export default MostRecentDocument;