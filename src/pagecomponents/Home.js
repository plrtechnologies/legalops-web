import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate();    //navigate to loan proposer page
    const createDocument =()=>{
        console.log("loan triggred")
        navigate("/LoanProposerDetails");
    }   
    return(
        <div style={{height:'89vh', backgroundImage:`url('/backgroundHomeImage.jpeg')`,backgroundSize:"cover"}} className="d-flex justify-content-center align-items-center">
            <div>
                <Button variant="outline-danger me-5 px-4" size="lg"   >
                    Unfinished Document
                </Button>

                <Button variant="outline-success px-5 " size="lg" onClick={createDocument} >
                    Create Document
                </Button>
            </div>
        </div>
    )   
}
export default Home;