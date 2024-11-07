import { useFormik } from 'formik';
//import React, {useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';


 const LoanProposerDetails=({ onNext })=>{
    const  formik = useFormik({
        initialValues:{
        loanProposerName:"",
        loanProposerRelationType:"",
        loanProposerRelativeName:"",
        loanProposerResidenceType:"",
        loanProposerDoorNumber:"",
        loanProposerStreetName:"",     
        loanProposerCityName:"",
        loanProposerMandalName:"",
        loanProposerDistrictName:"",
        loanProposerPincode:""
       },
       onSubmit:(values)=>{
      //filtering the value where exceptional 
      const filteredValues = {};
      const exceptions = ["loanProposerStreetName"]; // Define your exception fields here
      
      for (const key in values) {
         if (!exceptions.includes(key) || values[key].trim() !== "") {
            filteredValues[key] = values[key];
         }
      }

          console.log('formsubmit', values)
          onNext();
   },
       validate:(values)=>{
        let errors ={};
        if(!values.loanProposerName){
            errors.loanProposerName = "*required*"
        }
       
         if (!values.loanProposerRelationType) {
            errors.loanProposerRelationType = "*required*";
         } 
         if (!values.loanProposerRelativeName) {
                errors.loanProposerRelativeName = "*required*";
        }
        if (!values.loanProposerResidenceType) {
                errors.loanProposerResidenceType = "*required*";
        }
        if (!values.loanProposerDoorNumber) {
        errors.loanProposerDoorNumber = "*required*";
        }
        if (!values.loanProposerStreetName) {
            errors.loanProposerStreetName = "*required*";
        }

   //    if (values.loanProposerStreetName && values.loanProposerStreetName.trim() === "") {
   //       errors.loanProposerStreetName = "*required*";
   //   }
        if (!values.loanProposerCityName){
             errors.loanProposerCityName = "*required*";
        }
        if (!values.loanProposerMandalName) {
            errors.loanProposerMandalName = "*required*";
        }
        if (!values.loanProposerDistrictName) {
            errors.loanProposerDistrictName = "*required*";
        }
        if (!values.loanProposerPincode) {
            errors.loanProposerPincode = "*required*";
        }else if (!/^\d{6}$/.test(values.loanProposerPincode)) {
            errors.loanProposerPincode = "Pincode must be exactly 6 digits";
        }
         return errors;         
       }
      
      });

     


    return(
        <div>
        <h3 className='text-center'> Loan Proposer Details   </h3>

        <div style={{height:"100vh", paddingLeft:"50px",paddingTop:"10px",overflowX:"hidden"  }} >
            <Form onSubmit={formik.handleSubmit}> 

                 <Form.Group controlId="LoanProposeName">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12 ' style={{ width:"420px"}}>
                          <Form.Label className="fs-3" >Loan Proposer Name </Form.Label>
                        </div>
                        <div className='col-12  ' >
                          <Form.Control  
                           type='text'
                           name="loanProposerName"
                           value={formik.values.loanProposerName }
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                            
                          />
                          {/* this shows an error message  */}
                           {formik.errors.loanProposerName?<div className="text-danger fw-bold">{formik.errors.loanProposerName}</div>:null}
                       </div>       
                 </div>
                 </Form.Group>
                 
                
                 <Form.Group controlId="LoanProposeRelationType">
                    <div className='d-flex  flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12  ' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Relation Type </Form.Label>
                        </div>
                        <div  className='col-12  '>
                        <Form.Select   
                           name="loanProposerRelationType"
                           value={ formik.values.loanProposerRelationType }
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px", borderColor: "black", fontSize:"20px" }}
                           //required 
                           >
                            <option value="">Select </option>
                            <option value="S/O">S/O</option>
                            <option value="W/O">W/O</option>
                            <option value="D/O">D/O </option>
                            <option value="C/O">C/O</option>
                            <option value="H/O">H/O</option>
                            
                            </Form.Select>
                            {formik.errors.loanProposerRelationType ? <div className="text-danger fw-bold">{formik.errors.loanProposerRelationType}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposeRelativeName">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Relative Name</Form.Label>
                        </div>
                        <div className='col-12  '>
                          <Form.Control 
                           type='text'
                           name="loanProposerRelativeName"
                           value={formik.values.loanProposerRelativeName}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                           //required
                          />
                           {formik.errors.loanProposerRelativeName  ? <div className="text-danger fw-bold">{formik.errors.loanProposerRelativeName}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposerResidenceType">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Residence Type</Form.Label>
                        </div>
                        <div className='col-12'>
                        <Form.Select as="select" aria-label="Default select example"
                           name="loanProposerResidenceType"
                           value={formik.values.loanProposerResidenceType}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                           //required
                           >
                            <option value="">Select </option>
                            <option value="Flat">Flat</option>
                            <option value="House">House</option>
                              
                            </Form.Select> 
                            {formik.errors.loanProposerResidenceType ? <div className="text-danger fw-bold">{formik.errors.loanProposerResidenceType}</div>:null}     
                     </div>
                     </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposerDoorNumber">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Door Number</Form.Label>
                        </div>
                        <div className='col-12'>
                          <Form.Control 
                           type='text'
                           name="loanProposerDoorNumber"
                           value={formik.values.loanProposerDoorNumber}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                           {formik.errors.loanProposerDoorNumber  ? <div className="text-danger fw-bold">{formik.errors.loanProposerDoorNumber}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>
                   
                 <Form.Group controlId="LoanProposeStreetName">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Street Name</Form.Label>
                        </div>
                        <div className='col-12'>
                          <Form.Control 
                           type='text'
                           name="loanProposerStreetName"
                           value={formik.values.loanProposerStreetName}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                           {formik.errors.loanProposerStreetName?<div className="text-danger fw-bold">{formik.errors.loanProposerStreetName}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposeCityName">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer City  Name</Form.Label>
                        </div>
                        <div className='col-12'>
                          <Form.Control 
                           type='text'
                           name="loanProposerCityName"
                           value={formik.values.loanProposerCityName}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                           {formik.errors.loanProposerCityName ? <div className="text-danger fw-bold">{formik.errors.loanProposerCityName}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>
                   
                 <Form.Group controlId="LoanProposerMandalName">
                 <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{width:'420px'}}>
                          <Form.Label className="fs-3"  >Loan Proposer Mandal Name</Form.Label>
                        </div>
                        <div className='col-12'>
                          <Form.Control 
                           type='text'
                           name="loanProposerMandalName"
                           value={formik.values.loanProposerMandalName}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black",fontSize:"20px" }}
                          />
                           {formik.errors.loanProposerMandalName  ? <div className="text-danger fw-bold">{formik.errors.loanProposerMandalName}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>


                 <Form.Group controlId="LoanProposeDistrictName">
                 <div className='d-flex  flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer District Name</Form.Label>
                        </div>
                        <div className='col-12'>
                          <Form.Control 
                           type='text'
                           name="loanProposerDistrictName"
                           value={formik.values.loanProposerDistrictName}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px",     borderColor: "black" , fontSize:"20px"}}
                          />
                           {formik.errors.loanProposerDistrictName  ? <div className="text-danger fw-bold">{formik.errors.loanProposerDistrictName}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>   
              
            
                 <Form.Group controlId="LoanProposePincode">
                 <div className='d-flex  flex-column flex-md-row flex-lg-row align-items-center' >
                       <div className='col-12' style={{width:'420px'}}>
                          <Form.Label className="fs-3"  >Loan Proposer Pincode</Form.Label>
                        </div>
                        <div className='col-12'>
                          <Form.Control 
                           type='text'
                           name="loanProposerPincode"
                           value={formik.values.loanProposerPincode}
                           onChange={formik.handleChange}
                        //    onBlur={handleBlur}
                           style={{ width:"300px", height: "40px",     borderColor: "black" , fontSize:"20px"}}
                          />
                           {formik.errors.loanProposerPincode  ? <div className="text-danger fw-bold">{formik.errors.loanProposerPincode}</div>:null}
                       </div> 
                 </div>
                 </Form.Group>

           
            <div className='d-flex justify-content-center pt-5' >
                 <Button type="submit"  >Next</Button> {/* made changes here */}
            </div>
            </Form>
        </div>
        </div>
    )
}
export default LoanProposerDetails;