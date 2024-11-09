import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
 
import LoanProposerDetails from '../pagecomponents/LoanProposerDetails'; 
import LoanProposerAndTitleHolder from '../pagecomponents/LoanProposerAndTitleHolder';
const CreateDocument = () => {

    // writing logic here
    const [currentPage,setCurrentPage]= useState("LoanProposerDetails");
    
    const renderComponent = ()=>{
        switch(currentPage){
            case 'LoanPoposerDetails':
                return <LoanProposerDetails onNext={() => setCurrentPage('LoanProposerAndTitleHolder')}/>;
           
            case 'LoanProposerAndTitleHolder': 
                return <LoanProposerAndTitleHolder />;
            default:
                return <LoanProposerDetails onNext={() => setCurrentPage('LoanProposerAndTitleHolder')} />;
        }
    };


    return (
         
             <div > 
                <h3 className="text-center">  New document </h3>
 
            <div className="d-flex flex-row flex-lg-row " style={{backgroundColor:"gray", height:"100%", overflowX: "hidden" }}>
            
                <div className="px-3 py-2 d-none d-md-block d-lg-block"  style={{backgroundColor:"#bac3d1",width:"25vw",height:"120vh",  }}>
                {/* create each button for each section */}
            
                <Button className="w-100 m-1  fs-5"> Loan Proposer Details</Button>
                
                <Button className="w-100 m-1 fs-5"> Loan Proposer Details</Button> 

                <Button className="w-100 m-1 fs-5"> Loan Proposer Details</Button> 
                
                <Button className="w-100 m-1  fs-5"> Loan Proposer Details</Button>
                
                <Button className="w-100 m-1 fs-5">  dummy page Details</Button> 

                <Button className="w-100 m-1 fs-5">  dummy page Details</Button> 

                <Button className="w-100 m-1  fs-5">  dummy page Details</Button>
                
                <Button className="w-100 m-1 fs-5"> dummy page Details</Button> 

                <Button className="w-100 m-1 fs-5"> dummy page Details</Button> 

                <Button className="w-100 m-1 fs-5"> dummy page  Details</Button>

                </div>

                <div className= "text-white d-flex flex-column w-100" style={{backgroundColor:"#354257",flexGrow:1  }}>  
                  {renderComponent()}
                   {/* <LoanProposerDetails/>              
                      <LoanProposerAndTitleHolder/> */}     
                </div>
             
            </div> 
             
             
             </div>
            

            
    )
}
export default CreateDocument;