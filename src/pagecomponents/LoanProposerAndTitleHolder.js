import React from "react";
import Button from 'react-bootstrap/Button'
//import LoanProposerDetails from "./LoanProposerDetails";
import { useNavigate } from "react-router-dom";

const LoanProposerAndTitleHolder =({onOptionSelect})=>{
const navigate = useNavigate(); // Initialize the navigate function

    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop:"200px"}} >
           <h3>Is The Title Holder  
           Same As The loan Proposer?
           </h3>
           <div className="d-flex justify-content-center">
             {/* YES button navigates to a specific page */}
            {/* <Button onClick={() => navigate('/MostRecentDocuments')}> YES</Button> */}
            <Button style={{width:"100px" , fontWeight:"bold", fontSize:"20px"}} className="mx-3"  onClick={() => onOptionSelect("YES")}>YES</Button>
            <Button style={{width:"100px", fontWeight:"bold", fontSize:"20px"}}> NO</Button>
           </div>
        </div>
    )
}

export default LoanProposerAndTitleHolder;