// import React, { useState, useEffect} from "react";
// import { Tab, Tabs, Button, Form, FormGroup, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const LinkDocuments = () => {
//   const navigate = useNavigate(); // initialize navigation
//   const [sessionId, setSessionId] = useState(""); // store the sessionId
//   const [documents, setDocuments] = useState([]);
//   const [activeKey, setActiveKey] = useState("");
//   const [formData, setFormData] = useState({});



//   // **🔹 Load Session ID and Form Data on Page Load**
//   useEffect(() => {
//     let storedSessionId = sessionStorage.getItem("sessionId");

//     if (!storedSessionId) {
//       console.error("No session ID found! Redirecting to previous page...");
//       navigate("/loan-proposer"); // Redirect if session ID is missing
//       return;
//     }

//     setSessionId(storedSessionId);
//     console.log("Retrieved session ID:", storedSessionId); //  Debugging log


//     // Load stored form data
//     const storedData = sessionStorage.getItem(`linkDocuments-${storedSessionId}`);
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//    // }, []);
//       // Load stored documents list
//     const storedDocuments = sessionStorage.getItem(`documents-${storedSessionId}`);
//     if (storedDocuments) {
//       setDocuments(JSON.parse(storedDocuments));
//     }
//   }, [navigate]);
//   // Function to add a new document
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const newDocument = {
//       id: newDocId,
//       title: `Document ${documents.length + 1}`,
//     };
//     setDocuments([...documents, newDocument]);
//     setActiveKey(newDocId);

//     // Initialize form data for the new document
//     setFormData({
//       ...formData,
//       [newDocId]: {
//         documentType: "",
//         sellerName: "",
//         buyerName: "",
//         donorName: "",
//         doneeName: "",
//         relinquisherName: "",
//         recipientName: "",
//         registrationDate: "",
//         documentNumber: "",
//         issuingAuthority: "",
//         fileUpload: null,
//       },
//     });
    
//   };
 
 

//   // Function to remove the currently active document
//   const removeActiveDocument = () => {
//     if (!activeKey) return;

//     const updatedDocuments = documents.filter((doc) => doc.id !== activeKey);
//     const rearrangedDocuments = updatedDocuments.map((doc, index) => ({
//       ...doc,
//       id: `doc-${index + 1}`,
//       title: `Document ${index + 1}`,
//     }));
//     setDocuments(rearrangedDocuments);

//     // Remove form data associated with the removed document
//     const updatedFormData = { ...formData };
//     delete updatedFormData[activeKey];
//     setFormData(updatedFormData);

//     setActiveKey(
//       rearrangedDocuments.length > 0 ? rearrangedDocuments[0].id : ""
//     );
//   };

//   // Function to save data and navigate to the next page
// const handleNext = () => {
//   sessionStorage.setItem(`linkDocuments-${sessionId}`, JSON.stringify(formData));
//   navigate("/next-page"); // Replace "next-page" with your actual next page route
// };

//   // Handle change in form input fields
//   const handleChange = (e, docId) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [docId]: {
//         ...formData[docId],
//         [name]: type === "file" ? files[0] : value,
//       },
//     });
//   };

//   return (
//     <div>
//       <Tabs
//         id="document-tabs"
//         activeKey={activeKey}
//         onSelect={(k) => setActiveKey(k)}
//         className="mb-3"
//       >
//         {documents.map((doc) => (
//           <Tab key={doc.id} eventKey={doc.id} title={doc.title}>
//             <Form>
//               {/* Document Type Field */}
//               <FormGroup as={Row} controlId="DocType" className="mb-4">
//                 <Form.Label column sm="6">
//                   Select Document Type:
//                 </Form.Label>
//                 <Col sm="6">
//                   <Form.Select
//                     aria-label="Select document type"
//                     name="documentType"
//                     value={formData[doc.id]?.documentType || ""}
//                     onChange={(e) => handleChange(e, doc.id)}
//                   >
//                     <option value="">Select</option>
//                     <option value="GiftDeed">Gift Deed</option>
//                     <option value="SaleDeed">Sale Deed</option>
//                     <option value="RelinquishmentDeed">
//                       Relinquishment Deed
//                     </option>
//                     <option value="PartitionDeed">Partition Deed</option>
//                     <option value="MortgageDeed">Mortgage Deed</option>
//                     <option value="WillDeed">Will Deed</option>
//                     <option value="EncumbranceCertificate">
//                       Encumbrance Certificate
//                     </option>
//                     <option value="HouseTaxReceipt">House Tax Receipt</option>
//                     <option value="HouseTaxDemandNotice">
//                       House Tax Demand Notice
//                     </option>
//                   </Form.Select>
//                 </Col>
//               </FormGroup>

//               {/* Conditional Fields for SaleDeed */}
//               {formData[doc.id]?.documentType === "SaleDeed" && (
//                 <>
//                   {/* Seller Name Field */}
//                   <FormGroup as={Row} controlId="SellerName" className="mb-4">
//                     <Form.Label column sm="6">
//                       Seller Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="sellerName"
//                         value={formData[doc.id]?.sellerName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter seller name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* Buyer Name Field */}
//                   <FormGroup as={Row} controlId="BuyerName" className="mb-4">
//                     <Form.Label column sm="6">
//                       Buyer Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="buyerName"
//                         value={formData[doc.id]?.buyerName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter buyer name"
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}

//               {/* Conditional Fields for GiftDeed */}
//               {formData[doc.id]?.documentType === "GiftDeed" && (
//                 <>
//                   {/* Donor Name Field */}
//                   <FormGroup as={Row} controlId="DonorName" className="mb-4">
//                     <Form.Label column sm="6">
//                       Donor Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="donorName"
//                         value={formData[doc.id]?.donorName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter donor name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* Donee Name Field */}
//                   <FormGroup as={Row} controlId="DoneeName" className="mb-4">
//                     <Form.Label column sm="6">
//                       Donee Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="doneeName"
//                         value={formData[doc.id]?.doneeName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter donee name"
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}
//               {/* Conditional Fields for RelinquishmentDeed */}
//               {formData[doc.id]?.documentType === "RelinquishmentDeed" && (
//                 <>
//                   {/* Relinquisher Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="RelinquisherName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Relinquisher Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="relinquisherName"
//                         value={formData[doc.id]?.relinquisherName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter relinquisher name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* Recipient Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="RecipientName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Recipient Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="recipientName"
//                         value={formData[doc.id]?.recipientName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter recipient name"
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}
//               {/* Conditional Fields for PartitionDeed */}
//               {formData[doc.id]?.documentType === "PartitionDeed" && (
//                 <>
//                   {/* partitioner Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="partitionerName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Partitioner Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="partitionerName"
//                         value={formData[doc.id]?.partitionerName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter partitioner name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* Recipient Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="PRecipientName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Recipient Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="precipientName"
//                         value={formData[doc.id]?.precipientName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter precipient name"
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}
//               {/* Conditional Fields for MortgageDeed */}
//               {formData[doc.id]?.documentType === "MortgageDeed" && (
//                 <>
//                   {/* MortgageDeed Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="mortgagorName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Mortgagor Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="mortgagorName"
//                         value={formData[doc.id]?.partitionerName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter mortgagor name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* Mortgagee Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="MortgageeName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Mortgagee Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="mortgageeName"
//                         value={formData[doc.id]?.mortgageeName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter mortgagee name"
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}
//               {/* Conditional Fields for Willdeed */}
//               {formData[doc.id]?.documentType === "WillDeed" && (
//                 <>
//                   {/* Testator Name Field */}
//                   <FormGroup as={Row} controlId="testatorName" className="mb-4">
//                     <Form.Label column sm="6">
//                       Testator Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="testatorName"
//                         value={formData[doc.id]?.testatorName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter testator name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* Benificiary Name Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="BenificiaryName"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Benificiary Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="benificiaryName"
//                         value={formData[doc.id]?.benificiaryName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter benificiary name"
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}

//               {/* Additional Fields to Show Only When a Document Type is Selected */}
//               {formData[doc.id]?.documentType &&
//                 formData[doc.id]?.documentType !== "EncumbranceCertificate" &&
//                 formData[doc.id]?.documentType !== "HouseTaxDemandNotice" &&
//                 formData[doc.id]?.documentType !== "HouseTaxReceipt" && (
//                   <>
//                     {/* Registration Date Field */}
//                     <FormGroup
//                       as={Row}
//                       controlId="RegistrationDate"
//                       className="mb-4"
//                     >
//                       <Form.Label column sm="6">
//                         Registration Date:
//                       </Form.Label>
//                       <Col sm="6">
//                         <Form.Control
//                           type="date"
//                           name="registrationDate"
//                           value={formData[doc.id]?.registrationDate || ""}
//                           onChange={(e) => handleChange(e, doc.id)}
//                         />
//                       </Col>
//                     </FormGroup>

//                     {/* Document Number Field */}
//                     <FormGroup
//                       as={Row}
//                       controlId="DocumentNumber"
//                       className="mb-4"
//                     >
//                       <Form.Label column sm="6">
//                         Document Number:
//                       </Form.Label>
//                       <Col sm="6">
//                         <Form.Control
//                           type="text"
//                           name="documentNumber"
//                           value={formData[doc.id]?.documentNumber || ""}
//                           onChange={(e) => handleChange(e, doc.id)}
//                           placeholder="Enter document number"
//                         />
//                       </Col>
//                     </FormGroup>

//                     {/* Issuing Authority Field */}
//                     <FormGroup
//                       as={Row}
//                       controlId="IssuingAuthority"
//                       className="mb-4"
//                     >
//                       <Form.Label column sm="6">
//                         Issuing Authority:
//                       </Form.Label>
//                       <Col sm="6">
//                         <Form.Control
//                           type="text"
//                           name="issuingAuthority"
//                           value={formData[doc.id]?.issuingAuthority || ""}
//                           onChange={(e) => handleChange(e, doc.id)}
//                           placeholder="Enter issuing authority"
//                         />
//                       </Col>
//                     </FormGroup>

//                     {/* File Upload Field */}
//                     <FormGroup as={Row} controlId="FileUpload" className="mb-4">
//                       <Form.Label column sm="6">
//                         Original/PhotoCopy:
//                       </Form.Label>
//                       <Col sm="6">
//                         <Form.Control
//                           type="file"
//                           name="fileUpload"
//                           onChange={(e) => handleChange(e, doc.id)}
//                         />
//                       </Col>
//                     </FormGroup>
//                   </>
//                 )}

//               {/* Conditional Fields for EncumbranceCertificate */}
//               {formData[doc.id]?.documentType === "EncumbranceCertificate" && (
//                 <>
//                   {/* EC Issuing Authority Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="ECIssuingAuthority"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       EC Issuing Authority:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="ecIssuingAuthority"
//                         value={formData[doc.id]?.ecIssuingAuthority || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter ecIssuingAuthority"
//                       />
//                     </Col>
//                   </FormGroup>

//                   {/* EC Statement Number Field */}
//                   <FormGroup
//                     as={Row}
//                     controlId="ECStatementNumber"
//                     className="mb-4"
//                   >
//                     <Form.Label column sm="6">
//                       Benificiary Name:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="ecstatementNumber"
//                         value={formData[doc.id]?.ecstatementNumber || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         placeholder="Enter ecstatementNumber"
//                       />
//                     </Col>
//                   </FormGroup>
//                   {/* From Date Field */}
//                   <FormGroup as={Row} controlId="FromDate" className="mb-4">
//                     <Form.Label column sm="6">
//                       From Date:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="date"
//                         name="fromDate"
//                         value={formData[doc.id]?.fromDate || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                       />
//                     </Col>
//                   </FormGroup>
//                   {/* To Date Field */}
//                   <FormGroup as={Row} controlId="ToDate" className="mb-4">
//                     <Form.Label column sm="6">
//                       To Date:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="date"
//                         name="toDate"
//                         value={formData[doc.id]?.toDate || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                       />
//                     </Col>
//                   </FormGroup>
//                   {/* File Upload Field */}
//                   <FormGroup as={Row} controlId="FileUpload" className="mb-4">
//                     <Form.Label column sm="6">
//                       Original/PhotoCopy:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="file"
//                         name="fileUpload"
//                         onChange={(e) => handleChange(e, doc.id)}
//                       />
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}
//             </Form>
//             {/* Conditional Fields for HouseTaxDemandNotice */}
//             {formData[doc.id]?.documentType === "HouseTaxDemandNotice" && (
//               <>
//                 {/* NoticeIssueAuthority Name Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="NoticeIssueAuthority"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Notice Issue Authority:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="NoticeIssueAuthority"
//                       value={formData[doc.id]?.NoticeIssueAuthority || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Notice Issue Authority"
//                     />
//                   </Col>
//                 </FormGroup>

//                 {/*  DoorNumberOnReceipt Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="DoorNumberOnReceipt"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Door Number On Receipt:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="DoorNumberOnReceipt"
//                       value={formData[doc.id]?.DoorNumberOnReceipt || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Door Number On Receipt"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/*  AssessmentNumberOnReceipt Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="AssessmentNumberOnReceipt"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Assessment Number On Receipt:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="AssessmentNumberOnReceipt"
//                       value={formData[doc.id]?.AssessmentNumberOnReceipt || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Assessment Number On Receipt"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/*  AmountDue Field */}
//                 <FormGroup as={Row} controlId="AmountDue" className="mb-4">
//                   <Form.Label column sm="6">
//                     Amount Due:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="AmountDue"
//                       value={formData[doc.id]?.AmountDue || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Amount Due"
//                     />
//                   </Col>
//                 </FormGroup>

//                 {/*  AmountDueInFavourOf Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="AmountDueInFavourOf"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Amount Due In Favour Of:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="AmountDueInFavourOf"
//                       value={formData[doc.id]?.AmountDueInFavourOf || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Amount Due In Favour Of"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/* File Upload Field */}
//                 <FormGroup as={Row} controlId="FileUpload" className="mb-4">
//                   <Form.Label column sm="6">
//                     Original/PhotoCopy:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="file"
//                       name="fileUpload"
//                       onChange={(e) => handleChange(e, doc.id)}
//                     />
//                   </Col>
//                 </FormGroup>
//               </>
//             )}
//             {/* Conditional Fields for HouseTaxReceipt */}
//             {formData[doc.id]?.documentType === "HouseTaxReceipt" && (
//               <>
//                 {/* ReceiptIssuingAuthority Name Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="ReceiptIssuingAuthority"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Receipt Issuing Authority:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="ReceiptIssuingAuthority"
//                       value={formData[doc.id]?.ReceiptIssuingAuthority || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Receipt Issuing Authority"
//                     />
//                   </Col>
//                 </FormGroup>

//                 {/* DoorNumberOnReceipt Name Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="DoorNumberOnReceipt"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Door Number On Receipt:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="DoorNumberOnReceipt"
//                       value={formData[doc.id]?.DoorNumberOnReceipt || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Door Number On Receipt"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/*  AssessmentNumberOnReceipt Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="AssessmentNumberOnReceipt"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Assessment Number On Receipt:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="AssessmentNumberOnReceipt"
//                       value={formData[doc.id]?.AssessmentNumberOnReceipt || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Assessment Number On Receipt"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/*  AmountDue Field */}
//                 <FormGroup as={Row} controlId="AmountDue" className="mb-4">
//                   <Form.Label column sm="6">
//                     Amount Due:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="AmountDue"
//                       value={formData[doc.id]?.AmountDue || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Amount Due"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/*  AmountDueInFavourOf Field */}
//                 <FormGroup
//                   as={Row}
//                   controlId="AmountDueInFavourOf"
//                   className="mb-4"
//                 >
//                   <Form.Label column sm="6">
//                     Amount Due In Favour Of:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="text"
//                       name="AmountDueInFavourOf"
//                       value={formData[doc.id]?.AmountDueInFavourOf || ""}
//                       onChange={(e) => handleChange(e, doc.id)}
//                       placeholder="Enter Amount Due In Favour Of"
//                     />
//                   </Col>
//                 </FormGroup>
//                 {/* File Upload Field */}
//                 <FormGroup as={Row} controlId="FileUpload" className="mb-4">
//                   <Form.Label column sm="6">
//                     Original/PhotoCopy:
//                   </Form.Label>
//                   <Col sm="6">
//                     <Form.Control
//                       type="file"
//                       name="fileUpload"
//                       onChange={(e) => handleChange(e, doc.id)}
//                     />
//                   </Col>
//                 </FormGroup>
//               </>
//             )}
//           </Tab>
//         ))}
//       </Tabs>
//       {documents.length === 0 && (
//         <p className="text-center text-muted">
//           No documents available. Click "Add Document" to create one.
//         </p>
//       )}
//       <div className="d-flex justify-content-center gap-3 mt-3">
//         <Button variant="primary" onClick={addDocument}>
//           Add Document
//         </Button>
//         <Button
//           variant="danger" onClick={removeActiveDocument} disabled={!activeKey}
//         >
//           Remove Current Document
//         </Button>

//         <Button variant="success" onClick={handleNext}>
//         Next
//        </Button>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;

//----------------------------------------

// import React, { useState, useEffect } from "react";
// import { Tab, Tabs, Button, Form, FormGroup, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const LinkDocuments = () => {
//   const navigate = useNavigate(); // Initialize navigation
//   const [sessionId, setSessionId] = useState(""); // Store session ID
//   const [documents, setDocuments] = useState([]);
//   const [activeKey, setActiveKey] = useState("");
//   const [formData, setFormData] = useState({});
//   const [errors, setErrors] = useState({}); // Store validation errors

//   // **🔹 Load Session ID and Form Data on Page Load**
//   useEffect(() => {
//     let storedSessionId = sessionStorage.getItem("sessionId");

//     if (!storedSessionId) {
//       console.error("No session ID found! Redirecting to previous page...");
//       navigate("/loan-proposer"); // Redirect if session ID is missing
//       return;
//     }

//     setSessionId(storedSessionId);

//     // Load stored form data
//     const storedData = sessionStorage.getItem(`linkDocuments-${storedSessionId}`);
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//   }, []);

//   // **🔹 Function to Add a New Document**
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const newDocument = {
//       id: newDocId,
//       title: `Document ${documents.length + 1}`,
//     };

//     setDocuments([...documents, newDocument]);
//     setActiveKey(newDocId);

//     // Initialize form data for the new document
//     setFormData((prev) => ({
//       ...prev,
//       [newDocId]: {
//         documentType: "",
//         sellerName: "",
//         buyerName: "",
//         donorName: "",
//         doneeName: "",
//         relinquisherName: "",
//         recipientName: "",
//         registrationDate: "",
//         documentNumber: "",
//         issuingAuthority: "",
//         fileUpload: null,
//       },
//     }));
//   };

//   // **🔹 Function to Remove Active Document**
//   const removeActiveDocument = () => {
//     if (!activeKey) return;

//     const updatedDocuments = documents.filter((doc) => doc.id !== activeKey);
//     const rearrangedDocuments = updatedDocuments.map((doc, index) => ({
//       ...doc,
//       id: `doc-${index + 1}`,
//       title: `Document ${index + 1}`,
//     }));

//     setDocuments(rearrangedDocuments);

//     // Remove form data for the deleted document
//     setFormData((prev) => {
//       const updatedFormData = { ...prev };
//       delete updatedFormData[activeKey];
//       return updatedFormData;
//     });

//     setActiveKey(rearrangedDocuments.length > 0 ? rearrangedDocuments[0].id : "");
//   };

//   // **🔹 Handle Input Change and Save to Session Storage**
//   const handleChange = (e, docId) => {
//     const { name, value, type, files } = e.target;

//     const updatedFormData = {
//       ...formData,
//       [docId]: {
//         ...formData[docId],
//         [name]: type === "file" ? files[0] : value,
//       },
//     };

//     setFormData(updatedFormData);
//     sessionStorage.setItem(`linkDocuments-${sessionId}`, JSON.stringify(updatedFormData)); // Save to session storage
//   };

//   // **🔹 Validate Form Fields Before Proceeding**
//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((docId) => {
//       const doc = formData[docId];

//       if (!doc.documentType) newErrors[docId] = { documentType: "* Required" };

//       if (doc.documentType === "SaleDeed") {
//         if (!doc.sellerName) newErrors[docId] = { ...newErrors[docId], sellerName: "* Required" };
//         if (!doc.buyerName) newErrors[docId] = { ...newErrors[docId], buyerName: "* Required" };
//       }

//       if (doc.documentType === "GiftDeed") {
//         if (!doc.donorName) newErrors[docId] = { ...newErrors[docId], donorName: "* Required" };
//         if (!doc.doneeName) newErrors[docId] = { ...newErrors[docId], doneeName: "* Required" };
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if no errors
//   };

//   // **🔹 Handle Next Button Click**
//   const handleNext = () => {
//     if (validateForm()) {
//       navigate("/next-page"); // Redirect to the next page
//     }
//   };

//   return (
//     <div>
//       <Tabs id="document-tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)} className="mb-3">
//         {documents.map((doc) => (
//           <Tab key={doc.id} eventKey={doc.id} title={doc.title}>
//             <Form>
//               {/* Document Type */}
//               <FormGroup as={Row} controlId="DocType" className="mb-4">
//                 <Form.Label column sm="6">Select Document Type:</Form.Label>
//                 <Col sm="6">
//                   <Form.Select
//                     name="documentType"
//                     value={formData[doc.id]?.documentType || ""}
//                     onChange={(e) => handleChange(e, doc.id)}
//                     style={{ borderColor: errors[doc.id]?.documentType ? "red" : "" }}
//                   >
//                     <option value="">Select</option>
//                     <option value="GiftDeed">Gift Deed</option>
//                     <option value="SaleDeed">Sale Deed</option>
//                     <option value="RelinquishmentDeed">Relinquishment Deed</option>
//                   </Form.Select>
//                   {errors[doc.id]?.documentType && <div className="text-danger">{errors[doc.id].documentType}</div>}
//                 </Col>
//               </FormGroup>

//               {/* Conditional Fields */}
//               {formData[doc.id]?.documentType === "SaleDeed" && (
//                 <>
//                   <FormGroup as={Row} controlId="SellerName" className="mb-4">
//                     <Form.Label column sm="6">Seller Name:</Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name="sellerName"
//                         value={formData[doc.id]?.sellerName || ""}
//                         onChange={(e) => handleChange(e, doc.id)}
//                         style={{ borderColor: errors[doc.id]?.sellerName ? "red" : "" }}
//                       />
//                       {errors[doc.id]?.sellerName && <div className="text-danger">{errors[doc.id].sellerName}</div>}
//                     </Col>
//                   </FormGroup>
//                 </>
//               )}
//             </Form>
//           </Tab>
//         ))}
//       </Tabs>

//       {/* Show Message if No Documents */}
//       {documents.length === 0 && <p className="text-center text-muted">No documents available. Click "Add Document" to create one.</p>}

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 mt-3">
//         <Button variant="primary" onClick={addDocument}>Add Document</Button>
//         <Button variant="danger" onClick={removeActiveDocument} disabled={!activeKey}>Remove Current Document</Button>
//         <Button variant="success" onClick={handleNext} disabled={documents.length === 0}>Next</Button>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;

//----------------------------------------

 

// -----------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Button, Form, ListGroup, Row, Col, Container } from "react-bootstrap";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";

// const LinkDocuments = () => {
//   const navigate = useNavigate();
//   const [documents, setDocuments] = useState([]);
//   const [activeDoc, setActiveDoc] = useState(null);
//   const [sessionId, setSessionId] = useState("");

//   useEffect(() => {
//     const storedSessionId = sessionStorage.getItem("sessionId");
//     if (!storedSessionId) {
//       navigate("/loan-proposer");
//       return;
//     }
//     setSessionId(storedSessionId);
    
//     const storedDocs = JSON.parse(sessionStorage.getItem(`documents-${storedSessionId}`)) || [];
//     setDocuments(storedDocs);
//   }, [navigate]);

//   const addDocument = () => {
//     const newDoc = {
//       id: `doc-${documents.length + 1}`,
//       title: `Document ${documents.length + 1}`,
//       documentType: "",
//       sellerName: "",
//       buyerName: "",
//     };
//     setDocuments([...documents, newDoc]);
//     setActiveDoc(newDoc);
//   };

//   const removeDocument = (id) => {
//     const updatedDocs = documents.filter((doc) => doc.id !== id);
//     setDocuments(updatedDocs);
//     setActiveDoc(updatedDocs.length > 0 ? updatedDocs[0] : null);
//   };

//   const formik = useFormik({
//     initialValues: activeDoc || {},
//     enableReinitialize: true,
//     onSubmit: (values) => {
//       const updatedDocs = documents.map((doc) =>
//         doc.id === activeDoc.id ? { ...doc, ...values } : doc
//       );
//       setDocuments(updatedDocs);
//       sessionStorage.setItem(`documents-${sessionId}`, JSON.stringify(updatedDocs));
//       navigate("/next-page");
//     },
//   });

//   return (
//     <Container fluid className="d-flex" style={{ height: "100vh" }}>
//       {/* Sidebar */}
//       <div className="p-3 bg-light border" style={{ width: "250px" }}>
//         <h5>Documents</h5>
//         <ListGroup>
//           {documents.map((doc) => (
//             <ListGroup.Item
//               key={doc.id}
//               action
//               active={activeDoc?.id === doc.id}
//               onClick={() => setActiveDoc(doc)}
//             >
//               {doc.title}
//               <Button
//                 variant="danger"
//                 size="sm"
//                 className="float-end"
//                 onClick={() => removeDocument(doc.id)}
//               >
//                 X
//               </Button>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//         <Button variant="primary" className="mt-3 w-100" onClick={addDocument}>
//           Add Document
//         </Button>
//       </div>
      
//       {/* Main Form */}
//       <div className="p-4 flex-grow-1">
//         {activeDoc ? (
//           <Form onSubmit={formik.handleSubmit}>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Label>Document Type</Form.Label>
//                 <Form.Select
//                   name="documentType"
//                   value={formik.values.documentType || ""}
//                   onChange={formik.handleChange}
//                 >
//                   <option value="">Select</option>
//                   <option value="GiftDeed">Gift Deed</option>
//                   <option value="SaleDeed">Sale Deed</option>
//                 </Form.Select>
//               </Col>
//             </Row>

//             {/* Conditional Fields */}
//             {formik.values.documentType === "SaleDeed" && (
//               <>
//                 <Row className="mb-3">
//                   <Col>
//                     <Form.Label>Seller Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="sellerName"
//                       value={formik.values.sellerName || ""}
//                       onChange={formik.handleChange}
//                     />
//                   </Col>
//                 </Row>
//                 <Row className="mb-3">
//                   <Col>
//                     <Form.Label>Buyer Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="buyerName"
//                       value={formik.values.buyerName || ""}
//                       onChange={formik.handleChange}
//                     />
//                   </Col>
//                 </Row>
//               </>
//             )}

//             <Button type="submit" variant="success" className="mt-3">
//               Next
//             </Button>
//           </Form>
//         ) : (
//           <p>Select a document to edit or add a new one.</p>
//         )}
//       </div>
//     </Container>
//   );
// };

// // export default LinkDocuments;

 
 //---------------------------------------------------
 //-------------------------------------------------------
 
//below code is working code 

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // **🔹 Initialize Formik**
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},

//     onSubmit: (values) => {
//       console.log("Form Submitted:", values);
//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(values));
//       onNext(); // Proceed to next step
//     },
//   });

//   // **🔹 Save form data to sessionStorage on change**
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // **🔹 Define Fields for Each Document Type**
//   const documentFields = {
//     GiftDeed: {
//       donorName: "",
//       doneeName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     SaleDeed: {
//       sellerName: "",
//       buyerName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     RelinquishmentDeed: {
//       relinquisherName: "",
//       recipientName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     PartitionDeed: {
//       partitionerName: "",
//       precipientName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     MortgageDeed: {
//       mortgagorName: "",
//       mortgageeName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     WillDeed: {
//       testatorName: "",
//       benificiaryName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     EncumbranceCertificate: {
//       ecIssuingAuthority: "",
//       ecstatementNumber: "",
//       fromDate: "",
//       toDate: "",
       
//     },
//     HouseTaxReceipt: {
//       ReceiptIssuingAuthority: "",
//       DoorNumberOnReceipt: "",
//       assessmentNumberOnRecept:"",
//        amountPaid: "",
//        amountPaidInFavourOf: "",
//     },
//     HouseTaxDemandNotice: {
//       NoticeIssueAuthority: "",
//       DoorNumberOnReceipt: "",
//       assessmentNumberOnRecept:"",
//       amountDue: "",
//       amountDueInFavourOf: "",
       
//     },
//   };

//   // **🔹 Add a New Document**
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     setDocuments([...documents, newDocId]);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" }, // Start with only documentType
//     });

//     sessionStorage.setItem("documents", JSON.stringify([...documents, newDocId]));
//   };

//   // **🔹 Remove a Document**
//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // **🔹 Handle Document Type Change**
//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   return (
//     <div style={{   height: "100vh", overflowx: "scroll"  }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px"    }}>
//         <Form onSubmit={formik.handleSubmit}>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               {/* **🔹 Document Type Selection** */}
//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {/* **🔹 Render Relevant Fields** */}
//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4 ">
//                     <Form.Label column sm="6">{fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:</Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               {/* **🔹 Remove Document Button** */}
//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           {/* **🔹 Add Document Button** */}
//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="submit" variant="success">
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;


// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // **🔹 Initialize Formik**
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},

//     onSubmit: () => {
//       // Disabled default form submit
//     },
//   });

//   // **🔹 Save form data to sessionStorage on change**
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // **🔹 Define Fields for Each Document Type**
//   const documentFields = {
//     GiftDeed: {
//       donorName: "",
//       doneeName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     SaleDeed: {
//       sellerName: "",
//       buyerName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     RelinquishmentDeed: {
//       relinquisherName: "",
//       recipientName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     PartitionDeed: {
//       partitionerName: "",
//       precipientName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     MortgageDeed: {
//       mortgagorName: "",
//       mortgageeName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     WillDeed: {
//       testatorName: "",
//       benificiaryName: "",
//       registrationDate: "",
//       documentNumber: "",
//       issuingAuthority: "",
//     },
//     EncumbranceCertificate: {
//       ecIssuingAuthority: "",
//       ecstatementNumber: "",
//       fromDate: "",
//       toDate: "",
//     },
//     HouseTaxReceipt: {
//       ReceiptIssuingAuthority: "",
//       DoorNumberOnReceipt: "",
//       assessmentNumberOnRecept: "",
//       amountPaid: "",
//       amountPaidInFavourOf: "",
//     },
//     HouseTaxDemandNotice: {
//       NoticeIssueAuthority: "",
//       DoorNumberOnReceipt: "",
//       assessmentNumberOnRecept: "",
//       amountDue: "",
//       amountDueInFavourOf: "",
//     },
//   };

//   // **🔹 Add a New Document**
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     setDocuments([...documents, newDocId]);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" }, // Start with only documentType
//     });

//     sessionStorage.setItem("documents", JSON.stringify([...documents, newDocId]));
//   };

//   // **🔹 Remove a Document**
//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // **🔹 Handle Document Type Change**
//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   // **🔹 Handle Next (API Call)**
//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const currentDocId = documents[documents.length - 1]; // last added document
//     const currentDocData = formik.values[currentDocId];

//     if (!currentDocData?.documentType) {
//       alert("Please select document type for the current document!");
//       return;
//     }

//     const token = sessionStorage.getItem("token");
//     const session_id = sessionStorage.getItem("sessionId");
//     const user_id = sessionStorage.getItem("user_id");

//     const dataToSend = {
//       session_id,
//       user_id,
//       ...currentDocData,
//     };

//     try {
//       const response = await fetch("/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) throw new Error("API Error");

//       const data = await response.json();
//       console.log("API Response:", data);

//       // Save all documents in sessionStorage
//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       // Move to next step
//       if (onNext) onNext();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save document, please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               {/* Document Type Selection */}
//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {/* Render Relevant Fields */}
//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() +
//                         fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}
//                       :
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               {/* Remove Document Button */}
//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           {/* Add Document & Next Buttons */}
//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

 

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},

//     onSubmit: () => {
//       // Disabled default submit
//     },
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Document fields template
//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   // Add new document
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     setDocuments([...documents, newDocId]);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify([...documents, newDocId]));
//   };

//   // Remove document
//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // Handle document type change
//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   // Handle Next (API call for last added document)
//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const currentDocId = documents[documents.length - 1];
//     const currentDocData = formik.values[currentDocId];

//     if (!currentDocData?.documentType) {
//       alert("Please select document type for the current document!");
//       return;
//     }

//     const token = sessionStorage.getItem("token");
//     const session_id = sessionStorage.getItem("sessionId");
//     const user_id = sessionStorage.getItem("user_id");

//     if (!token || !session_id || !user_id) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     const dataToSend = { session_id, user_id, ...currentDocData };

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);
//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() +
//                         fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}
//                       :
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;

//==================

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {
//       // Disabled default submit
//     },
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Document fields template
//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   // Add new document
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     setDocuments([...documents, newDocId]);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify([...documents, newDocId]));
//   };

//   // Remove document
//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // Handle document type change
//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   // Handle Next (API call for last added document)
//   const handleNext = async () => {
//     console.log("Documents:", documents);
//     console.log("Formik values:", formik.values);

//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const currentDocId = documents[documents.length - 1];
//     const currentDocData = formik.values[currentDocId];

//     if (!currentDocData?.documentType) {
//       alert("Please select document type for the current document!");
//       return;
//     }

//     const token = sessionStorage.getItem("token");
//     const session_id = sessionStorage.getItem("sessionId");
//     const user_id = sessionStorage.getItem("user_id");

//     console.log("Token:", token, "Session ID:", session_id, "User ID:", user_id);

//     if (!token || !session_id || !user_id) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     const dataToSend = { session_id, user_id, ...currentDocData };
//     console.log("Data to send:", dataToSend);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       console.log("Fetch called, response status:", response.status);

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);
//       const data = await response.json();
//       console.log("API Response:", data);

//       // Save all documents in sessionStorage
//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       // Move to next step
//       if (onNext) onNext();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() +
//                         fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}
//                       :
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;


// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {
//       // Disabled default submit
//     },
//   });

//   // Auto-save form data to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Template for all document types
//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   // Add a new document
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     setDocuments([...documents, newDocId]);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify([...documents, newDocId]));
//   };

//   // Remove a document
//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // Handle document type change
//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   // Handle Next: send all documents in one API call
//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     // Filter only documents with a selected type
//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     const token = sessionStorage.getItem("token");
//     const session_id = sessionStorage.getItem("sessionId");
//     const user_id = sessionStorage.getItem("user_id");

//     if (!token || !session_id || !user_id) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     const payload = { session_id, user_id, documents: documentsToSend };

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               {/* Document Type Selection */}
//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {/* Render Relevant Fields */}
//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() +
//                         fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}
//                       :
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               {/* Remove Document Button */}
//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           {/* Add Document & Next Buttons */}
//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;
//====================
//=======================


// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Ensure token/sessionId/userId are available
//   const [auth, setAuth] = useState({
//     token: sessionStorage.getItem("token") || null,
//     sessionId: sessionStorage.getItem("sessionId") || null,
//     userId: sessionStorage.getItem("user_id") || null,
//   });

//   useEffect(() => {
//     // Update auth state if sessionStorage changes
//     setAuth({
//       token: sessionStorage.getItem("token"),
//       sessionId: sessionStorage.getItem("sessionId"),
//       userId: sessionStorage.getItem("user_id"),
//     });
//     console.log("DEBUG: Auth Info", {
//       token: sessionStorage.getItem("token"),
//       sessionId: sessionStorage.getItem("sessionId"),
//       userId: sessionStorage.getItem("user_id"),
//     });
//   }, []);

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     // Filter only documents with a selected type
//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // Authentication check
//     if (!auth.token || !auth.sessionId || !auth.userId) {
//       alert("Authentication required. Please login.");
//       console.error("DEBUG: Token =", auth.token);
//       console.error("DEBUG: Session ID =", auth.sessionId);
//       console.error("DEBUG: User ID =", auth.userId);
//       return;
//     }

//     const payload = {
//       session_id: auth.sessionId,
//       user_id: auth.userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${auth.token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import { getToken } from "../auth";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     // Filter only documents with a selected type
//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // ✅ Read latest token/sessionId/userId from sessionStorage
    
//     //const token = sessionStorage.getItem("token");
//      const token = getToken();
//     const sessionId = sessionStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id");

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       console.error("DEBUG: Token =", token);
//       console.error("DEBUG: Session ID =", sessionId);
//       console.error("DEBUG: User ID =", userId);
//       return;
//     }

//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;

// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     // Normalize payload
//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType)
//       .map((doc) => {
//         const normalized = {};
//         Object.keys(doc).forEach((k) => {
//           normalized[k] = doc[k] || ""; // no undefined or null
//         });
//         return normalized;
//       });

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // Read latest token/sessionId/userId from sessionStorage
//     const token = sessionStorage.getItem("token");
//     const sessionId = sessionStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id");

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       console.error("DEBUG: Token =", token);
//       console.error("DEBUG: Session ID =", sessionId);
//       console.error("DEBUG: User ID =", userId);
//       return;
//     }

//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;












// import { useFormik } from "formik";
// import React, { useState, useEffect } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import { getToken } from "../auth"; // Make sure getToken reads from localStorage/sessionStorage

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // ✅ Read token, sessionId, and userId safely from storage
//     const token = getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
//     const sessionId = sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//     console.log("DEBUG: Token =", token);
//     console.log("DEBUG: Session ID =", sessionId);
//     console.log("DEBUG: User ID =", userId);

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;


 



// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { Button, Form, Row, Col } from "react-bootstrap"; // ✅ Correct import
// import { getToken } from "../auth"; // Make sure getToken reads from localStorage/sessionStorage

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // ✅ Read token, sessionId, and userId safely from storage
//     const token = getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
//     const sessionId = sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//     console.log("DEBUG: Token =", token);
//     console.log("DEBUG: Session ID =", sessionId);
//     console.log("DEBUG: User ID =", userId);

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;




//  import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import { getToken } from "../auth"; // make sure this returns token from storage

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // ✅ Read token, sessionId, and userId safely from storage
//     const token =
//       getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
//     const sessionId =
//       sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
//     const userId =
//       sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//     console.log("DEBUG: Token =", token);
//     console.log("DEBUG: Session ID =", sessionId);
//     console.log("DEBUG: User ID =", userId);

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     // 🔑 According to Swagger: send only selectDeedType, not whole array
//     const payload = {
//       selectDeedType: documentsToSend[0].documentType || "any"
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map(
//                   (fieldKey) => (
//                     <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                       <Form.Label column sm="6">
//                         {fieldKey
//                           .charAt(0)
//                           .toUpperCase() +
//                           fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}
//                         :
//                       </Form.Label>
//                       <Col sm="6">
//                         <Form.Control
//                           type="text"
//                           name={`${docId}.${fieldKey}`}
//                           value={formik.values[docId]?.[fieldKey] || ""}
//                           onChange={formik.handleChange}
//                           placeholder={`Enter ${fieldKey}`}
//                         />
//                       </Col>
//                     </Form.Group>
//                   )
//                 )}

//               <Button
//                 variant="danger"
//                 onClick={() => removeDocument(docId)}
//                 className="mt-2"
//               >
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;


// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { Button, Form, Row, Col } from "react-bootstrap"; // ✅ Correct import
// import { getToken } from "../auth"; // Make sure getToken reads from localStorage/sessionStorage

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // ✅ Read token, sessionId, and userId safely from storage
//     const token = getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
//     const sessionId = sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//     console.log("DEBUG: Token =", token);
//     console.log("DEBUG: Session ID =", sessionId);
//     console.log("DEBUG: User ID =", userId);

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     // ✅ Correct payload including session_id and user_id
//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;


// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { Button, Form, Row, Col } from "react-bootstrap"; // ✅ Correct import
// import { getToken } from "../auth"; // Make sure getToken reads from localStorage/sessionStorage

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // ✅ Read token, sessionId, and userId safely from storage
//     const token = getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
//     const sessionId = sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//     console.log("DEBUG: Token =", token);
//     console.log("DEBUG: Session ID =", sessionId);
//     console.log("DEBUG: User ID =", userId);

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     // ✅ Correct payload including session_id and user_id
//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;



// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import { getToken } from "../auth"; // Make sure this reads from localStorage/sessionStorage

// const LinkDocuments = ({ onNext }) => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(sessionStorage.getItem("documents")) || []
//   );

//   // Formik initialization
//   const formik = useFormik({
//     initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
//     onSubmit: () => {},
//   });

//   // Auto-save form data to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
//   }, [formik.values]);

//   // Fields for each document type
//   const documentFields = {
//     GiftDeed: { donorName: "", doneeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     SaleDeed: { sellerName: "", buyerName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     RelinquishmentDeed: { relinquisherName: "", recipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     PartitionDeed: { partitionerName: "", precipientName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     MortgageDeed: { mortgagorName: "", mortgageeName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     WillDeed: { testatorName: "", benificiaryName: "", registrationDate: "", documentNumber: "", issuingAuthority: "" },
//     EncumbranceCertificate: { ecIssuingAuthority: "", ecstatementNumber: "", fromDate: "", toDate: "" },
//     HouseTaxReceipt: { ReceiptIssuingAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountPaid: "", amountPaidInFavourOf: "" },
//     HouseTaxDemandNotice: { NoticeIssueAuthority: "", DoorNumberOnReceipt: "", assessmentNumberOnRecept:"", amountDue: "", amountDueInFavourOf: "" },
//   };

//   // Add new document
//   const addDocument = () => {
//     const newDocId = `doc-${documents.length + 1}`;
//     const updatedDocs = [...documents, newDocId];
//     setDocuments(updatedDocs);

//     formik.setValues({
//       ...formik.values,
//       [newDocId]: { documentType: "" },
//     });

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // Remove document
//   const removeDocument = (docId) => {
//     const updatedDocs = documents.filter((id) => id !== docId);
//     setDocuments(updatedDocs);

//     const updatedValues = { ...formik.values };
//     delete updatedValues[docId];
//     formik.setValues(updatedValues);

//     sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
//   };

//   // Handle document type selection
//   const handleDocTypeChange = (e, docId) => {
//     const docType = e.target.value;
//     formik.setValues({
//       ...formik.values,
//       [docId]: { documentType: docType, ...documentFields[docType] },
//     });
//   };

//   // Send documents to backend
//   const handleNext = async () => {
//     if (documents.length === 0) {
//       alert("Please add at least one document!");
//       return;
//     }

//     // Build array of document objects
//     const documentsToSend = documents
//       .map((docId) => formik.values[docId])
//       .filter((doc) => doc?.documentType);

//     if (documentsToSend.length === 0) {
//       alert("Please select document type for at least one document!");
//       return;
//     }

//     // Get token, sessionId, and userId
//     const token = getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
//     const sessionId = sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
//     const userId = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//     console.log("DEBUG: Token =", token);
//     console.log("DEBUG: Session ID =", sessionId);
//     console.log("DEBUG: User ID =", userId);

//     if (!token || !sessionId || !userId) {
//       alert("Authentication required. Please login.");
//       return;
//     }

//     // ✅ Correct payload format
//     const payload = {
//       session_id: sessionId,
//       user_id: userId,
//       documents: documentsToSend,
//     };

//     console.log("DEBUG: Sending payload:", payload);

//     try {
//       const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`API Error: ${response.status}`);

//       const data = await response.json();
//       console.log("API Response:", data);

//       sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));

//       if (onNext) onNext();
//     } catch (err) {
//       console.error("Error sending documents:", err);
//       alert("Failed to save document. Please try again.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", overflowX: "scroll" }}>
//       <h3 className="text-center mt-3">Link Documents</h3>

//       <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
//         <Form>
//           {documents.map((docId) => (
//             <div key={docId} className="mb-4 p-3 border rounded">
//               <h5>{docId}</h5>

//               <Form.Group controlId={`${docId}-documentType`}>
//                 <Form.Label>Document Type:</Form.Label>
//                 <Form.Select
//                   name={`${docId}.documentType`}
//                   value={formik.values[docId]?.documentType || ""}
//                   onChange={(e) => handleDocTypeChange(e, docId)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(documentFields).map((type) => (
//                     <option key={type} value={type}>
//                       {type.replace(/([A-Z])/g, " $1").trim()}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>

//               {formik.values[docId]?.documentType &&
//                 Object.keys(documentFields[formik.values[docId]?.documentType]).map((fieldKey) => (
//                   <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
//                     <Form.Label column sm="6">
//                       {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:
//                     </Form.Label>
//                     <Col sm="6">
//                       <Form.Control
//                         type="text"
//                         name={`${docId}.${fieldKey}`}
//                         value={formik.values[docId]?.[fieldKey] || ""}
//                         onChange={formik.handleChange}
//                         placeholder={`Enter ${fieldKey}`}
//                       />
//                     </Col>
//                   </Form.Group>
//                 ))}

//               <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
//                 Remove Document
//               </Button>
//             </div>
//           ))}

//           <div className="text-center">
//             <Button variant="primary" onClick={addDocument} className="me-3">
//               Add Document
//             </Button>
//             <Button type="button" variant="success" onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LinkDocuments;


import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col } from "react-bootstrap";
import { getToken } from "../auth";

const LinkDocuments = ({ onNext }) => {
  const [documents, setDocuments] = useState(
    JSON.parse(sessionStorage.getItem("documents")) || []
  );

  const formik = useFormik({
    initialValues: JSON.parse(sessionStorage.getItem("linkDocumentsData")) || {},
    onSubmit: () => {},
  });

  useEffect(() => {
    sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
  }, [formik.values]);

  const documentFields = {
    GiftDeed: { donor_name: "", donee_name: "", registration_date: "", document_number: "", issuing_authority: "" },
    SaleDeed: { seller_name: "", buyer_name: "", registration_date: "", document_number: "", issuing_authority: "" },
    RelinquishmentDeed: { relinquisher_name: "", recipient_name: "", registration_date: "", document_number: "", issuing_authority: "" },
    PartitionDeed: { partitioner_name: "", precipient_name: "", registration_date: "", document_number: "", issuing_authority: "" },
    MortgageDeed: { mortgagor_name: "", mortgagee_name: "", registration_date: "", document_number: "", issuing_authority: "" },
    WillDeed: { testator_name: "", beneficiary_name: "", registration_date: "", document_number: "", issuing_authority: "" },
    EncumbranceCertificate: { ec_issuing_authority: "", ec_statement_number: "", from_date: "", to_date: "" },
    HouseTaxReceipt: { receipt_issuing_authority: "", door_number_on_receipt: "", assessment_number_on_receipt: "", amount_paid: "", amount_paid_in_favour_of: "" },
    HouseTaxDemandNotice: { notice_issue_authority: "", door_number_on_receipt: "", assessment_number_on_receipt: "", amount_due: "", amount_due_in_favour_of: "" },
  };

  const addDocument = () => {
    const newDocId = `doc-${documents.length + 1}`;
    const updatedDocs = [...documents, newDocId];
    setDocuments(updatedDocs);

    formik.setValues({
      ...formik.values,
      [newDocId]: { document_type: "" },
    });

    sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
  };

  const removeDocument = (docId) => {
    const updatedDocs = documents.filter((id) => id !== docId);
    setDocuments(updatedDocs);

    const updatedValues = { ...formik.values };
    delete updatedValues[docId];
    formik.setValues(updatedValues);

    sessionStorage.setItem("documents", JSON.stringify(updatedDocs));
  };

  const handleDocTypeChange = (e, docId) => {
    const docType = e.target.value;
    formik.setValues({
      ...formik.values,
      [docId]: { document_type: docType, ...documentFields[docType] },
    });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) return `20${parts[2]}-${parts[1]}-${parts[0]}`;
    return dateStr;
  };

  const handleNext = async () => {
    if (documents.length === 0) {
      alert("Please add at least one document!");
      return;
    }

    const documentsToSend = documents
      .map((docId) => {
        const doc = formik.values[docId];
        if (!doc?.document_type) return null;

        // Format date fields
        const formattedDoc = { ...doc };
        Object.keys(formattedDoc).forEach((key) => {
          if (key.includes("date")) formattedDoc[key] = formatDate(formattedDoc[key]);
        });

        return formattedDoc;
      })
      .filter(Boolean);

    if (documentsToSend.length === 0) {
      alert("Please select document type for at least one document!");
      return;
    }

    const token = getToken() || localStorage.getItem("token") || sessionStorage.getItem("token");
    const sessionId = sessionStorage.getItem("sessionId") || localStorage.getItem("sessionId");
    const userId = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

    if (!token || !sessionId || !userId) {
      alert("Authentication required. Please login.");
      return;
    }

    const payload = {
      session_id: sessionId,
      user_id: userId,
      documents: documentsToSend,
    };

    console.log("DEBUG: Sending payload:", payload);

    try {
      const response = await fetch("http://localhost:3000/api/linkdoc/create-linkdoc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      console.log("API Response:", data);

      sessionStorage.setItem("linkDocumentsData", JSON.stringify(formik.values));
      alert("Documents saved successfully!");

      if (onNext) onNext();
    } catch (err) {
      console.error("Error sending documents:", err);
      alert("Failed to save document. Please check all fields and try again.");
    }
  };

  return (
    <div style={{ height: "100vh", overflowX: "scroll" }}>
      <h3 className="text-center mt-3">Link Documents</h3>
      <div style={{ height: "100vh", overflowY: "auto", overflowX: "auto", padding: "20px" }}>
        <Form>
          {documents.map((docId) => (
            <div key={docId} className="mb-4 p-3 border rounded">
              <h5>{docId}</h5>
              <Form.Group controlId={`${docId}-documentType`}>
                <Form.Label>Document Type:</Form.Label>
                <Form.Select
                  name={`${docId}.document_type`}
                  value={formik.values[docId]?.document_type || ""}
                  onChange={(e) => handleDocTypeChange(e, docId)}
                >
                  <option value="">Select</option>
                  {Object.keys(documentFields).map((type) => (
                    <option key={type} value={type}>
                      {type.replace(/([A-Z])/g, " $1").trim()}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {formik.values[docId]?.document_type &&
                Object.keys(documentFields[formik.values[docId]?.document_type]).map((fieldKey) => (
                  <Form.Group as={Row} key={fieldKey} className="mb-3 mt-3 fs-4">
                    <Form.Label column sm="6">
                      {fieldKey.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name={`${docId}.${fieldKey}`}
                        value={formik.values[docId]?.[fieldKey] || ""}
                        onChange={formik.handleChange}
                        placeholder={`Enter ${fieldKey.replace(/_/g, " ")}`}
                      />
                    </Col>
                  </Form.Group>
                ))}

              <Button variant="danger" onClick={() => removeDocument(docId)} className="mt-2">
                Remove Document
              </Button>
            </div>
          ))}

          <div className="text-center">
            <Button variant="primary" onClick={addDocument} className="me-3">
              Add Document
            </Button>
            <Button type="button" variant="success" onClick={handleNext}>
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LinkDocuments;
