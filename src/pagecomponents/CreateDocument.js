import React from "react";
import Button from 'react-bootstrap/Button'
//import {LoanPoposerDetails} from "../pagecomponents/LoanProposerDetails";
import LoanPoposerDetails from '../pagecomponents/LoanProposerDetails'; 
const createDocument = () =>{
    return (
         
             <div> 
                <h3 className="text-center">  New document </h3>
 
            <div className="d-flex flex-row " style={{backgroundColor:"gray", height:"100vh"}}>
                <div className="px-1 py-2"  style={{backgroundColor:"#bac3d1",width:"20vw" }}>
                {/* create each button for each section */}
                
                <Button className="w-100 m-1  fs-5"> Loan Proposer Details</Button>
                
                <Button className="w-100 m-1 fs-5"> Loan Proposer Details</Button> 

                </div>

                <div className="px-3 text-white" style={{backgroundColor:"#354257",width:"80vw" }}>  

                    <LoanPoposerDetails/>  {/*  page component used in this create document component  */}
                </div>
             
            </div> 
             
             
             </div>
            

            
    )
}
export default createDocument;