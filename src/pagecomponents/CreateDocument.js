
import React from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LoanProposerDetails from "../pagecomponents/LoanProposerDetails";
import LoanProposerAndTitleHolder from "../pagecomponents/LoanProposerAndTitleHolder";
import MostRecentDocuments from "../pagecomponents/MostRecentDocuments";
import PropertyBoundaries from "../pagecomponents/PropertyBoundaries";
import TitleHolderDetails from "../pagecomponents/TitleHolderDetails";
import PropertyDetails from "../pagecomponents/PropertyDetails";
import LinkDocuments from "../pagecomponents/LinkDocuments"
import ReviewDocument from "../pagecomponents/ReviewDocument";


const CreateDocument = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case "/CreateDocument/LoanProposerDetails":
        return <LoanProposerDetails onNext={() => navigate("/CreateDocument/LoanProposerAndTitleHolder")} />;
      case "/CreateDocument/LoanProposerAndTitleHolder":
        return (   
          <LoanProposerAndTitleHolder
            onOptionSelect={(option) =>
              option === "YES"
                ? navigate("/CreateDocument/MostRecentDocuments")
                : navigate("/CreateDocument/TitleHolderDetails")
            }
          />
        );
      case "/CreateDocument/TitleHolderDetails":
        return <TitleHolderDetails onNext={() => navigate("/CreateDocument/MostRecentDocuments")} />;
      case "/CreateDocument/MostRecentDocuments":
        return <MostRecentDocuments onNext={() => navigate("/CreateDocument/PropertyDetails")} />;
      case "/CreateDocument/PropertyDetails":
        return <PropertyDetails onNext={() => navigate("/CreateDocument/PropertyBoundaries")} />;
      case "/CreateDocument/PropertyBoundaries":
        return <PropertyBoundaries onNext={()=> navigate("/CreateDocument/LinkDocuments")}/>;
      case "/CreateDocument/LinkDocuments":
          return <LinkDocuments  onNext={()=> navigate("/CreateDocument/ReviewDocument")} />;
      case "/CreateDocument/ReviewDocument":
          return <ReviewDocument />;


      default:
        return <LoanProposerDetails onNext={() => navigate("/CreateDocument/LoanProposerAndTitleHolder")} />;
    
    }
  };

  return (
    <div>
      <h3 className="text-center">New Document</h3>
      <div className="d-flex flex-row flex-lg-row" style={{ backgroundColor: "gray", height: "100%", overflowX: "hidden" }}>
        {/* Sidebar */}
        <div className="px-3 py-2 d-none d-md-block d-lg-block" style={{ backgroundColor: "#bac3d1", width: "25vw", height: "150vh" }}>
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/LoanProposerDetails")}>
            Loan Proposer Details
          </Button>
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/LoanProposerAndTitleHolder")}>
            Loan And Title Holder
          </Button>
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/MostRecentDocuments")}>
            Most Recent Documents
          </Button>
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/PropertyDetails")}>
            Property Details
          </Button>
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/PropertyBoundaries")}>
            Property Boundaries
          </Button>
         
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/LinkDocuments")}>
             Link Documents  
          </Button>
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/ReviewDocument")}>
              Review document
          </Button>

{/* dummy buttons added below for showing ui  */}
          <Button className="w-100 m-1 fs-5" onClick={() => navigate("/CreateDocument/PropertyBoundaries")}>
             Dummy buttons
          </Button>
        </div>

        {/* Main Content */}
        <div className="text-white d-flex flex-column w-100" style={{ backgroundColor: "#354257", flexGrow: 1 }}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default CreateDocument;



  