import React from "react";
import Button from 'react-bootstrap/Button'
//import LoanProposerDetails from "./LoanProposerDetails";

const LoanProposerAndTitleHolder =()=>{

    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop:"0px"}} >
           <h3>is the title holder  
           same as the loan proposer?
           </h3>
           <div className="d-flex justify-content-center">
            <Button> YES</Button>
            <Button> NO</Button>
           </div>
        </div>
    )
}

export default LoanProposerAndTitleHolder;