import React from "react";
import Button from 'react-bootstrap/Button'
//import LoanProposerDetails from "./LoanProposerDetails";
import { useNavigate } from "react-router-dom";

const LoanProposerAndTitleHolder =({onOptionSelect})=>{
const navigate = useNavigate(); // Initialize the navigate function

    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop:"0px"}} >
           <h3>is the title holder  
           same as the loan proposer?
           </h3>
           <div className="d-flex justify-content-center">
             {/* YES button navigates to a specific page */}
            {/* <Button onClick={() => navigate('/MostRecentDocuments')}> YES</Button> */}
            <Button   onClick={() => onOptionSelect("YES")}>YES</Button>
            <Button> NO</Button>
           </div>
        </div>
    )
}

export default LoanProposerAndTitleHolder;