// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import LoanProposerDetails from '../pagecomponents/LoanProposerDetails'; 
// import LoanProposerAndTitleHolder from '../pagecomponents/LoanProposerAndTitleHolder';
// import MostRecentDocuments from "../pagecomponents/MostRecentDocuments";
// import PropertyBoundaries from "../pagecomponents/PropertyBoundaries";
// //import TitleHolderDetails from "../pagecomponents/TitleHolderDetails";  // Assuming this is your next component

// const CreateDocument = () => {
//     const [currentPage, setCurrentPage] = useState("LoanProposerDetails");

//     const renderComponent = () => {
//         switch (currentPage) {
//             case 'LoanProposerDetails':
//                 return <LoanProposerDetails onNext={() => setCurrentPage('LoanProposerAndTitleHolder')} />;
//             case 'LoanProposerAndTitleHolder':
//                 return (
//                     <LoanProposerAndTitleHolder
//                         onOptionSelect={(option) =>
//                             setCurrentPage(option === "YES" ? "MostRecentDocuments" : "SomeOtherPage")
//                         }
//                     />
//                 );
//             case "MostRecentDocuments":
//                 return <MostRecentDocuments onNext={() => setCurrentPage('PropertyBoundaries')} />;
//             case "PropertyBoundaries":
//                 return <PropertyBoundaries />;
//             case "SomeOtherPage":
//                 return <div>Some other page content</div>;
//             default:
//                 return <LoanProposerDetails onNext={() => setCurrentPage('LoanProposerAndTitleHolder')} />;
//         }
//     };

//     return (
//         <div>
//             <h3 className="text-center">New Document</h3>
//             <div className="d-flex flex-row flex-lg-row" style={{ backgroundColor: "gray", height: "100%", overflowX: "hidden" }}>
//                 <div className="px-3 py-2 d-none d-md-block d-lg-block" style={{ backgroundColor: "#bac3d1", width: "25vw", height: "120vh" }}>
//                     <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('LoanProposerDetails')}>Loan Proposer Details</Button>
//                     <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('LoanProposerAndTitleHolder')}>Loan And Title Holder</Button>
//                     <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('MostRecentDocuments')}>Most Recent Documents</Button>
//                     <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('SomeOtherPage')}>Some Other Page</Button>
//                     <Button className="w-100 m-1 fs-5">dummy page Details</Button> 
//                     <Button className="w-100 m-1 fs-5">dummy page Details</Button> 
//                     <Button className="w-100 m-1 fs-5">dummy page Details</Button> 
//                     <Button className="w-100 m-1 fs-5">dummy page Details</Button> 
//                     <Button className="w-100 m-1 fs-5">dummy page Details</Button> 
//                     <Button className="w-100 m-1 fs-5">dummy page Details</Button> 
//                 </div>
//                 <div className="text-white d-flex flex-column w-100" style={{ backgroundColor: "#354257", flexGrow: 1 }}>
//                     {renderComponent()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateDocument;
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import LoanProposerDetails from '../pagecomponents/LoanProposerDetails'; 
import LoanProposerAndTitleHolder from '../pagecomponents/LoanProposerAndTitleHolder';
import MostRecentDocuments from "../pagecomponents/MostRecentDocuments";
import PropertyBoundaries from "../pagecomponents/PropertyBoundaries";
import TitleHolderDetails from "../pagecomponents/TitleHolderDetails";  // Assuming this is your next component
import PropertyDetails from "../pagecomponents/PropertyDetails";

const CreateDocument = () => {
    const [currentPage, setCurrentPage] = useState("LoanProposerDetails");

    // This function renders the appropriate component based on currentPage state
    const renderComponent = () => {
        switch (currentPage) {
            case 'LoanProposerDetails':
                return <LoanProposerDetails onNext={() => setCurrentPage('LoanProposerAndTitleHolder')} />;
            case 'LoanProposerAndTitleHolder':
                return (
                    <LoanProposerAndTitleHolder
                        onOptionSelect={(option) => {
                            // If the user selects YES, go directly to MostRecentDocuments
                            if (option === "YES") {
                                setCurrentPage('MostRecentDocuments');
                            } else {
                                // If the user selects NO, go to TitleHolderDetails
                                setCurrentPage('TitleHolderDetails');
                            }
                        }}
                    />
                );
            case "TitleHolderDetails":
                return (
                    <TitleHolderDetails onNext={() => setCurrentPage('MostRecentDocuments')} />
                );
            case "MostRecentDocuments":
                return <MostRecentDocuments onNext={() => setCurrentPage('PropertyDetails')} />;
            // created propert details pages 
            case "PropertyDetails":
                return <PropertyDetails onNext={()=> setCurrentPage("PropertyBoundaries")}/> 

            case "PropertyBoundaries":
                return <PropertyBoundaries />;
            default:
                return <LoanProposerDetails onNext={() => setCurrentPage('LoanProposerAndTitleHolder')} />;
        }
    };

    return (
        <div>
            <h3 className="text-center">New Document</h3>
            <div className="d-flex flex-row flex-lg-row" style={{ backgroundColor: "gray", height: "100%", overflowX: "hidden" }}>
                <div className="px-3 py-2 d-none d-md-block d-lg-block" style={{ backgroundColor: "#bac3d1", width: "25vw", height: "150vh" }}>
                    <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('LoanProposerDetails')}>Loan Proposer Details</Button>
                    <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('LoanProposerAndTitleHolder')}>Loan And Title Holder</Button>
                    <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('MostRecentDocuments')}>Most Recent Documents</Button>
                    <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('PropertyDetails')} >PropertyDetails</Button>
                    <Button className="w-100 m-1 fs-5" onClick={() => setCurrentPage('SomeOtherPage')}>Some Other Page</Button>
                    {/* Remove or replace dummy buttons with real content */}
                    <Button className="w-100 m-1 fs-5">dummy page Details</Button>
                    <Button className="w-100 m-1 fs-5">dummy page Details</Button>
                    <Button className="w-100 m-1 fs-5">dummy page Details</Button>
                    <Button className="w-100 m-1 fs-5">dummy page Details</Button>
                </div>
                <div className="text-white d-flex flex-column w-100" style={{ backgroundColor: "#354257", flexGrow: 1 }}>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default CreateDocument;
