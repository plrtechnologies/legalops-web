import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate(); //navigate to loan proposer page
    const createDocument =()=>{
        console.log("loan triggred")
        navigate("/CreateDocument");
    }   
    return(
        <div style={{height:'100vh', backgroundImage:`url('/frontendimg2.jpg')`,backgroundSize:"cover",backgroundPosition: 'center',
            position: 'relative'}} className="d-flex justify-content-center align-items-center text-center w-100">
            <div className="d-flex flex-column flex-lg-row align-items-center gap-4 ">
                <Button variant="outline-danger px-4 mb-3 mb-lg-0" size="lg" className="fs-4 " style={{ borderWidth: '3px',width:"auto" ,color:"white",fontWeight:"bold"}} > 
                     Session Document
                </Button>

                <Button variant="outline-success px-5" size="lg" className="fs-4" style={{ borderWidth: '3px', width:"auto", color:"white", fontWeight:"bold"}} onClick={createDocument} >
                    Create Document
                </Button>
            </div>
        </div>
    )   
}
export default Home;