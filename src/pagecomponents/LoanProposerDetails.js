import React, {useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
 
 

const LoanProposerDetails=()=>{
    const [formData, setFormData] = useState({
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
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };

    return(
        <div >
        <h3 className='text-center'> Loan Proposer Details   </h3>

        <div style={{height:"100vh", paddingLeft:"20px",paddingTop:"10px"  }} >
            <Form onSubmit={handleSubmit}> 

                 <Form.Group controlId="LoanProposeName">
                 <div className='d-flex flex-row align-items-center' >

                 
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3" >Loan Proposer Name </Form.Label>
                        </div>
                        <div >
                          <Form.Control  
                           type='text'
                           name="loanProposerName"
                           value={formData.loanProposerName }
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                           required
                          />
                       </div> 
                       
                 </div>
                 </Form.Group>

                 

                 <Form.Group controlId="LoanProposeRelationType">
                    <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Relation Type </Form.Label>
                        </div>
                        <div  >
                        <Form.Select aria-label="Default select example" 
                           
                           name="loanProposerRelationType"
                           value={formData.loanProposerRelationType }
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px",   borderColor: "black", fontSize:"20px" }}
                           >
                            <option>Select </option>
                            <option value="S/O">S/O</option>
                            <option value="W/O">W/O</option>
                            <option value="D/O">D/O </option>
                            <option value="C/O">C/O</option>
                            <option value="H/O">H/O</option>
                            </Form.Select>
                          
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposeRelativeName">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Relative Name</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerRelativeName"
                           value={formData.loanProposerRelativeName}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposeResidenceType">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Residence Type</Form.Label>
                        </div>
                        <div>
                        <Form.Select as="select" aria-label="Default select example"

                           name="loanProposerResidenceType"
                           value={formData.loanProposerResidenceType }
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                           >
                            <option>Select </option>
                            <option value="Flat">Flat</option>
                            <option value="House">House</option> 
                            </Form.Select>      
                     </div>
                     </div>

                 </Form.Group>

                 <Form.Group controlId="LoanProposerDoorNumber">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Door Number</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerDoorNumber"
                           value={formData.loanProposerDoorNumber}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposeStreetName">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer Street Name</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerStreetName"
                           value={formData.loanProposerStreetName}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                       </div> 
                 </div>
                 </Form.Group>

                 <Form.Group controlId="LoanProposeCityName">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer City  Name</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerCityName"
                           value={formData.loanProposerCityName}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black", fontSize:"20px" }}
                          />
                       </div> 
                 </div>
                 </Form.Group>
                   

                 <Form.Group controlId="LoanProposeMandalName">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{width:'420px'}}>
                          <Form.Label className="fs-3"  >Loan Proposer Mandal Name</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerMandalName"
                           value={formData.loanProposerMandalName}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px" ,   borderColor: "black",fontSize:"20px" }}
                          />
                       </div> 
                 </div>
                 </Form.Group>


                 <Form.Group controlId="LoanProposeDistrictName">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{ width:"420px"}}>
                          <Form.Label className="fs-3"  >Loan Proposer District Name</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerDistrictName"
                           value={formData.loanProposerDistrictName}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px",     borderColor: "black" , fontSize:"20px"}}
                          />
                       </div> 
                 </div>
                 </Form.Group>   
              
                 <Form.Group controlId="LoanProposePincode">
                 <div className='d-flex flex-row align-items-center' >
                       <div style={{width:'420px'}}>
                          <Form.Label className="fs-3"  >Loan Proposer Pincode</Form.Label>
                        </div>
                        <div>
                          <Form.Control 
                           type='text'
                           name="loanProposerPincode"
                           value={formData.loanProposerPincode}
                           onChange={handleChange}
                           style={{ width:"300px", height: "40px",     borderColor: "black" , fontSize:"20px"}}
                          />
                       </div> 
                 </div>
                 </Form.Group>

           
            <div  className='d-flex justify-content-center' >
                 <Button type="submit">Next</Button>{/* made changes here */}
            </div>
            </Form>
        </div>
        </div>
    )
}
export default LoanProposerDetails;