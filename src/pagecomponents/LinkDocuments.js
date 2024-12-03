import React, { useState } from "react";
import { Tab, Tabs, Button, Form, FormGroup, Row, Col } from "react-bootstrap";

const LinkDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [activeKey, setActiveKey] = useState("");
  const [formData, setFormData] = useState({});

  // Function to add a new document
  const addDocument = () => {
    const newDocId = `doc-${documents.length + 1}`;
    const newDocument = {
      id: newDocId,
      title: `Document ${documents.length + 1}`,
    };
    setDocuments([...documents, newDocument]);
    setActiveKey(newDocId);

    // Initialize form data for the new document
    setFormData({
      ...formData,
      [newDocId]: {
        documentType: "",
        sellerName: "",
        buyerName: "",
        donorName: "",
        doneeName: "",
        relinquisherName: "",
        recipientName: "",
        registrationDate: "",
        documentNumber: "",
        issuingAuthority: "",
        fileUpload: null,
      },
    });
  };

  // Function to remove the currently active document
  const removeActiveDocument = () => {
    if (!activeKey) return;

    const updatedDocuments = documents.filter((doc) => doc.id !== activeKey);
    const rearrangedDocuments = updatedDocuments.map((doc, index) => ({
      ...doc,
      id: `doc-${index + 1}`,
      title: `Document ${index + 1}`,
    }));
    setDocuments(rearrangedDocuments);

    // Remove form data associated with the removed document
    const updatedFormData = { ...formData };
    delete updatedFormData[activeKey];
    setFormData(updatedFormData);

    setActiveKey(
      rearrangedDocuments.length > 0 ? rearrangedDocuments[0].id : ""
    );
  };

  // Handle change in form input fields
  const handleChange = (e, docId) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [docId]: {
        ...formData[docId],
        [name]: type === "file" ? files[0] : value,
      },
    });
  };

  return (
    <div>
      <Tabs
        id="document-tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mb-3"
      >
        {documents.map((doc) => (
          <Tab key={doc.id} eventKey={doc.id} title={doc.title}>
            <Form>
              {/* Document Type Field */}
              <FormGroup as={Row} controlId="DocType" className="mb-4">
                <Form.Label column sm="6">
                  Select Document Type:
                </Form.Label>
                <Col sm="6">
                  <Form.Select
                    aria-label="Select document type"
                    name="documentType"
                    value={formData[doc.id]?.documentType || ""}
                    onChange={(e) => handleChange(e, doc.id)}
                  >
                    <option value="">Select</option>
                    <option value="GiftDeed">Gift Deed</option>
                    <option value="SaleDeed">Sale Deed</option>
                    <option value="RelinquishmentDeed">
                      Relinquishment Deed
                    </option>
                    <option value="PartitionDeed">Partition Deed</option>
                    <option value="MortgageDeed">Mortgage Deed</option>
                    <option value="WillDeed">Will Deed</option>
                    <option value="EncumbranceCertificate">
                      Encumbrance Certificate
                    </option>
                    <option value="HouseTaxReceipt">House Tax Receipt</option>
                    <option value="HouseTaxDemandNotice">
                      House Tax Demand Notice
                    </option>
                  </Form.Select>
                </Col>
              </FormGroup>

              {/* Conditional Fields for SaleDeed */}
              {formData[doc.id]?.documentType === "SaleDeed" && (
                <>
                  {/* Seller Name Field */}
                  <FormGroup as={Row} controlId="SellerName" className="mb-4">
                    <Form.Label column sm="6">
                      Seller Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="sellerName"
                        value={formData[doc.id]?.sellerName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter seller name"
                      />
                    </Col>
                  </FormGroup>

                  {/* Buyer Name Field */}
                  <FormGroup as={Row} controlId="BuyerName" className="mb-4">
                    <Form.Label column sm="6">
                      Buyer Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="buyerName"
                        value={formData[doc.id]?.buyerName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter buyer name"
                      />
                    </Col>
                  </FormGroup>
                </>
              )}

              {/* Conditional Fields for GiftDeed */}
              {formData[doc.id]?.documentType === "GiftDeed" && (
                <>
                  {/* Donor Name Field */}
                  <FormGroup as={Row} controlId="DonorName" className="mb-4">
                    <Form.Label column sm="6">
                      Donor Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="donorName"
                        value={formData[doc.id]?.donorName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter donor name"
                      />
                    </Col>
                  </FormGroup>

                  {/* Donee Name Field */}
                  <FormGroup as={Row} controlId="DoneeName" className="mb-4">
                    <Form.Label column sm="6">
                      Donee Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="doneeName"
                        value={formData[doc.id]?.doneeName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter donee name"
                      />
                    </Col>
                  </FormGroup>
                </>
              )}
              {/* Conditional Fields for RelinquishmentDeed */}
              {formData[doc.id]?.documentType === "RelinquishmentDeed" && (
                <>
                  {/* Relinquisher Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="RelinquisherName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Relinquisher Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="relinquisherName"
                        value={formData[doc.id]?.relinquisherName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter relinquisher name"
                      />
                    </Col>
                  </FormGroup>

                  {/* Recipient Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="RecipientName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Recipient Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="recipientName"
                        value={formData[doc.id]?.recipientName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter recipient name"
                      />
                    </Col>
                  </FormGroup>
                </>
              )}
              {/* Conditional Fields for PartitionDeed */}
              {formData[doc.id]?.documentType === "PartitionDeed" && (
                <>
                  {/* partitioner Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="partitionerName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Partitioner Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="partitionerName"
                        value={formData[doc.id]?.partitionerName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter partitioner name"
                      />
                    </Col>
                  </FormGroup>

                  {/* Recipient Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="PRecipientName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Recipient Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="precipientName"
                        value={formData[doc.id]?.precipientName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter precipient name"
                      />
                    </Col>
                  </FormGroup>
                </>
              )}
              {/* Conditional Fields for MortgageDeed */}
              {formData[doc.id]?.documentType === "MortgageDeed" && (
                <>
                  {/* MortgageDeed Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="mortgagorName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Mortgagor Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="mortgagorName"
                        value={formData[doc.id]?.partitionerName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter mortgagor name"
                      />
                    </Col>
                  </FormGroup>

                  {/* Mortgagee Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="MortgageeName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Mortgagee Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="mortgageeName"
                        value={formData[doc.id]?.mortgageeName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter mortgagee name"
                      />
                    </Col>
                  </FormGroup>
                </>
              )}
              {/* Conditional Fields for Willdeed */}
              {formData[doc.id]?.documentType === "WillDeed" && (
                <>
                  {/* Testator Name Field */}
                  <FormGroup as={Row} controlId="testatorName" className="mb-4">
                    <Form.Label column sm="6">
                      Testator Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="testatorName"
                        value={formData[doc.id]?.testatorName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter testator name"
                      />
                    </Col>
                  </FormGroup>

                  {/* Benificiary Name Field */}
                  <FormGroup
                    as={Row}
                    controlId="BenificiaryName"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Benificiary Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="benificiaryName"
                        value={formData[doc.id]?.benificiaryName || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter benificiary name"
                      />
                    </Col>
                  </FormGroup>
                </>
              )}

              {/* Additional Fields to Show Only When a Document Type is Selected */}
              {formData[doc.id]?.documentType &&
                formData[doc.id]?.documentType !== "EncumbranceCertificate" &&
                formData[doc.id]?.documentType !== "HouseTaxDemandNotice" &&
                formData[doc.id]?.documentType !== "HouseTaxReceipt" && (
                  <>
                    {/* Registration Date Field */}
                    <FormGroup
                      as={Row}
                      controlId="RegistrationDate"
                      className="mb-4"
                    >
                      <Form.Label column sm="6">
                        Registration Date:
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          type="date"
                          name="registrationDate"
                          value={formData[doc.id]?.registrationDate || ""}
                          onChange={(e) => handleChange(e, doc.id)}
                        />
                      </Col>
                    </FormGroup>

                    {/* Document Number Field */}
                    <FormGroup
                      as={Row}
                      controlId="DocumentNumber"
                      className="mb-4"
                    >
                      <Form.Label column sm="6">
                        Document Number:
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          type="text"
                          name="documentNumber"
                          value={formData[doc.id]?.documentNumber || ""}
                          onChange={(e) => handleChange(e, doc.id)}
                          placeholder="Enter document number"
                        />
                      </Col>
                    </FormGroup>

                    {/* Issuing Authority Field */}
                    <FormGroup
                      as={Row}
                      controlId="IssuingAuthority"
                      className="mb-4"
                    >
                      <Form.Label column sm="6">
                        Issuing Authority:
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          type="text"
                          name="issuingAuthority"
                          value={formData[doc.id]?.issuingAuthority || ""}
                          onChange={(e) => handleChange(e, doc.id)}
                          placeholder="Enter issuing authority"
                        />
                      </Col>
                    </FormGroup>

                    {/* File Upload Field */}
                    <FormGroup as={Row} controlId="FileUpload" className="mb-4">
                      <Form.Label column sm="6">
                        Original/PhotoCopy:
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          type="file"
                          name="fileUpload"
                          onChange={(e) => handleChange(e, doc.id)}
                        />
                      </Col>
                    </FormGroup>
                  </>
                )}

              {/* Conditional Fields for EncumbranceCertificate */}
              {formData[doc.id]?.documentType === "EncumbranceCertificate" && (
                <>
                  {/* EC Issuing Authority Field */}
                  <FormGroup
                    as={Row}
                    controlId="ECIssuingAuthority"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      EC Issuing Authority:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="ecIssuingAuthority"
                        value={formData[doc.id]?.ecIssuingAuthority || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter ecIssuingAuthority"
                      />
                    </Col>
                  </FormGroup>

                  {/* EC Statement Number Field */}
                  <FormGroup
                    as={Row}
                    controlId="ECStatementNumber"
                    className="mb-4"
                  >
                    <Form.Label column sm="6">
                      Benificiary Name:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        name="ecstatementNumber"
                        value={formData[doc.id]?.ecstatementNumber || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                        placeholder="Enter ecstatementNumber"
                      />
                    </Col>
                  </FormGroup>
                  {/* From Date Field */}
                  <FormGroup as={Row} controlId="FromDate" className="mb-4">
                    <Form.Label column sm="6">
                      From Date:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="date"
                        name="fromDate"
                        value={formData[doc.id]?.fromDate || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                      />
                    </Col>
                  </FormGroup>
                  {/* To Date Field */}
                  <FormGroup as={Row} controlId="ToDate" className="mb-4">
                    <Form.Label column sm="6">
                      To Date:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="date"
                        name="toDate"
                        value={formData[doc.id]?.toDate || ""}
                        onChange={(e) => handleChange(e, doc.id)}
                      />
                    </Col>
                  </FormGroup>
                  {/* File Upload Field */}
                  <FormGroup as={Row} controlId="FileUpload" className="mb-4">
                    <Form.Label column sm="6">
                      Original/PhotoCopy:
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control
                        type="file"
                        name="fileUpload"
                        onChange={(e) => handleChange(e, doc.id)}
                      />
                    </Col>
                  </FormGroup>
                </>
              )}
            </Form>
            {/* Conditional Fields for HouseTaxDemandNotice */}
            {formData[doc.id]?.documentType === "HouseTaxDemandNotice" && (
              <>
                {/* NoticeIssueAuthority Name Field */}
                <FormGroup
                  as={Row}
                  controlId="NoticeIssueAuthority"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Notice Issue Authority:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="NoticeIssueAuthority"
                      value={formData[doc.id]?.NoticeIssueAuthority || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Notice Issue Authority"
                    />
                  </Col>
                </FormGroup>

                {/*  DoorNumberOnReceipt Field */}
                <FormGroup
                  as={Row}
                  controlId="DoorNumberOnReceipt"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Door Number On Receipt:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="DoorNumberOnReceipt"
                      value={formData[doc.id]?.DoorNumberOnReceipt || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Door Number On Receipt"
                    />
                  </Col>
                </FormGroup>
                {/*  AssessmentNumberOnReceipt Field */}
                <FormGroup
                  as={Row}
                  controlId="AssessmentNumberOnReceipt"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Assessment Number On Receipt:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="AssessmentNumberOnReceipt"
                      value={formData[doc.id]?.AssessmentNumberOnReceipt || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Assessment Number On Receipt"
                    />
                  </Col>
                </FormGroup>
                {/*  AmountDue Field */}
                <FormGroup as={Row} controlId="AmountDue" className="mb-4">
                  <Form.Label column sm="6">
                    Amount Due:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="AmountDue"
                      value={formData[doc.id]?.AmountDue || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Amount Due"
                    />
                  </Col>
                </FormGroup>

                {/*  AmountDueInFavourOf Field */}
                <FormGroup
                  as={Row}
                  controlId="AmountDueInFavourOf"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Amount Due In Favour Of:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="AmountDueInFavourOf"
                      value={formData[doc.id]?.AmountDueInFavourOf || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Amount Due In Favour Of"
                    />
                  </Col>
                </FormGroup>
                {/* File Upload Field */}
                <FormGroup as={Row} controlId="FileUpload" className="mb-4">
                  <Form.Label column sm="6">
                    Original/PhotoCopy:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="file"
                      name="fileUpload"
                      onChange={(e) => handleChange(e, doc.id)}
                    />
                  </Col>
                </FormGroup>
              </>
            )}
            {/* Conditional Fields for HouseTaxReceipt */}
            {formData[doc.id]?.documentType === "HouseTaxReceipt" && (
              <>
                {/* ReceiptIssuingAuthority Name Field */}
                <FormGroup
                  as={Row}
                  controlId="ReceiptIssuingAuthority"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Receipt Issuing Authority:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="ReceiptIssuingAuthority"
                      value={formData[doc.id]?.ReceiptIssuingAuthority || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Receipt Issuing Authority"
                    />
                  </Col>
                </FormGroup>

                {/* DoorNumberOnReceipt Name Field */}
                <FormGroup
                  as={Row}
                  controlId="DoorNumberOnReceipt"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Door Number On Receipt:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="DoorNumberOnReceipt"
                      value={formData[doc.id]?.DoorNumberOnReceipt || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Door Number On Receipt"
                    />
                  </Col>
                </FormGroup>
                {/*  AssessmentNumberOnReceipt Field */}
                <FormGroup
                  as={Row}
                  controlId="AssessmentNumberOnReceipt"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Assessment Number On Receipt:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="AssessmentNumberOnReceipt"
                      value={formData[doc.id]?.AssessmentNumberOnReceipt || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Assessment Number On Receipt"
                    />
                  </Col>
                </FormGroup>
                {/*  AmountDue Field */}
                <FormGroup as={Row} controlId="AmountDue" className="mb-4">
                  <Form.Label column sm="6">
                    Amount Due:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="AmountDue"
                      value={formData[doc.id]?.AmountDue || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Amount Due"
                    />
                  </Col>
                </FormGroup>
                {/*  AmountDueInFavourOf Field */}
                <FormGroup
                  as={Row}
                  controlId="AmountDueInFavourOf"
                  className="mb-4"
                >
                  <Form.Label column sm="6">
                    Amount Due In Favour Of:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="AmountDueInFavourOf"
                      value={formData[doc.id]?.AmountDueInFavourOf || ""}
                      onChange={(e) => handleChange(e, doc.id)}
                      placeholder="Enter Amount Due In Favour Of"
                    />
                  </Col>
                </FormGroup>
                {/* File Upload Field */}
                <FormGroup as={Row} controlId="FileUpload" className="mb-4">
                  <Form.Label column sm="6">
                    Original/PhotoCopy:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="file"
                      name="fileUpload"
                      onChange={(e) => handleChange(e, doc.id)}
                    />
                  </Col>
                </FormGroup>
              </>
            )}
          </Tab>
        ))}
      </Tabs>
      {documents.length === 0 && (
        <p className="text-center text-muted">
          No documents available. Click "Add Document" to create one.
        </p>
      )}
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button variant="primary" onClick={addDocument}>
          Add Document
        </Button>
        <Button
          variant="danger"
          onClick={removeActiveDocument}
          disabled={!activeKey}
        >
          Remove Current Document
        </Button>
      </div>
    </div>
  );
};

export default LinkDocuments;
