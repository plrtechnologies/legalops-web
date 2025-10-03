import React, { useState } from "react";
import { Tabs, Tab, Button, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const documentFields = {
  GiftDeed: {
    donorName: "",
    doneeName: "",
    registrationDate: "",
    documentNumber: "",
    issuingAuthority: "",
  },
  SaleDeed: {
    sellerName: "",
    buyerName: "",
    registrationDate: "",
    documentNumber: "",
    issuingAuthority: "",
  },
  RelinquishmentDeed: {
    relinquisherName: "",
    recipientName: "",
    registrationDate: "",
    documentNumber: "",
    issuingAuthority: "",
  },
  PartitionDeed: {
    partitionerName: "",
    precipientName: "",
    registrationDate: "",
    documentNumber: "",
    issuingAuthority: "",
  },
  MortgageDeed: {
    mortgagorName: "",
    mortgageeName: "",
    registrationDate: "",
    documentNumber: "",
    issuingAuthority: "",
  },
  WillDeed: {
    testatorName: "",
    beneficiaryName: "",
    registrationDate: "",
    documentNumber: "",
    issuingAuthority: "",
  },
  EncumbranceCertificate: {
    ecIssuingAuthority: "",
    ecstatementNumber: "",
    fromDate: "",
    toDate: "",
  },
  HouseTaxReceipt: {
    ReceiptIssuingAuthority: "",
    DoorNumberOnReceipt: "",
    assessmentNumberOnRecept: "",
    amountPaid: "",
    amountPaidInFavourOf: "",
  },
  HouseTaxDemandNotice: {
    NoticeIssueAuthority: "",
    DoorNumberOnReceipt: "",
    assessmentNumberOnRecept: "",
    amountDue: "",
    amountDueInFavourOf: "",
  },
};

const LinkDocuments = ({ onNext }) => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState(["doc-1"]);
  const [activeTab, setActiveTab] = useState("doc-1");

  const formik = useFormik({
    initialValues: {
      "doc-1": { documentType: "" },
    },
    onSubmit: handleNext,
    enableReinitialize: true,
  });

  function isDocValid(doc) {
    if (!doc.documentType) return false;
    const fields = documentFields[doc.documentType] || {};
    return Object.keys(fields).every((key) => doc[key] && doc[key].trim() !== "");
  }

  function getDocStatus() {
    return documents.map((docId) => {
      const doc = formik.values[docId] || {};
      if (!doc.documentType) return "error";
      const valid = isDocValid(doc);
      return valid ? "valid" : "error";
    });
  }

  function isAllValid(statusArr) {
    return statusArr.every((status) => status === "valid");
  }

  function handleNext() {
    const docStatus = getDocStatus();
    const allValid = isAllValid(docStatus);
    if (!allValid) {
      const firstErrorIdx = docStatus.findIndex((s) => s === "error");
      if (firstErrorIdx !== -1) setActiveTab(documents[firstErrorIdx]);
      return;
    }
    sessionStorage.setItem("LinkDocuments", JSON.stringify(formik.values));
    if (onNext) onNext();
    else navigate("/next-page");
  }

  const handleDocTypeChange = (e, docId) => {
    const docType = e.target.value;
    formik.setValues({
      ...formik.values,
      [docId]: { documentType: docType, ...documentFields[docType] },
    });
  };

  const addDocument = () => {
    const newDocId = `doc-${documents.length + 1}`;
    setDocuments([...documents, newDocId]);
    setActiveTab(newDocId);
    formik.setValues({
      ...formik.values,
      [newDocId]: { documentType: "" }
    });
  };

  const removeDocument = (docId) => {
    const updatedDocs = documents.filter((id) => id !== docId);
    setDocuments(updatedDocs);
    if (updatedDocs.length > 0) setActiveTab(updatedDocs[0]);
    else setActiveTab("");
    const updatedValues = { ...formik.values };
    delete updatedValues[docId];
    formik.setValues(updatedValues);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#22223b", padding: 0, margin: 0 }}>
      <h2 className="text-center" style={{ color: "#fff", fontWeight: 600, letterSpacing: 1, marginTop: 24, marginBottom: 24 }}>Link Documents</h2>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 0 }}>
        <Tabs
          id="link-documents-tabs"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3 justify-content-start"
          variant="pills"
          style={{ justifyContent: 'flex-start' }}
        >
          {documents.map((docId, idx) => {
            const docStatus = getDocStatus();
            return (
              <Tab
                eventKey={docId}
                key={docId}
                title={
                  <span style={{
                    color: activeTab === docId ? '#fff' : '#22223b',
                    background: activeTab === docId ? '#4a4e69' : '#c9ada7',
                    borderRadius: 8,
                    padding: '6px 18px',
                    fontWeight: activeTab === docId ? 700 : 500,
                    border: activeTab === docId ? '2px solid #22223b' : 'none',
                    transition: 'all 0.2s',
                    display: 'inline-block',
                    position: 'relative',
                  }}>
                    {`Document ${idx + 1}`}
                    <span
                      style={{
                        position: 'absolute',
                        top: 2,
                        right: 2,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: docStatus[idx] === 'valid' ? '#4BB543' : '#d90429',
                        border: '2px solid #fff',
                        display: 'inline-block',
                      }}
                    />
                  </span>
                }
                tabClassName="bg-primary"
              >
                <Form onSubmit={formik.handleSubmit} className="mt-4">
                  <Form.Group controlId={`${docId}-documentType`} className="mb-3">
                    <Form.Label style={{ color: '#fff' }}>Document Type:</Form.Label>
                    <Form.Select
                      name={`${docId}.documentType`}
                      value={formik.values[docId]?.documentType || ""}
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
                  {formik.values[docId]?.documentType &&
                    Object.keys(documentFields[formik.values[docId]?.documentType] || {}).map((fieldKey) => (
                      <Form.Group as={Row} key={fieldKey} className="mb-3 mt-2 fs-5">
                        <Form.Label column sm="5" style={{ color: '#fff' }}>{fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1).replace(/([A-Z])/g, " $1").trim()}:</Form.Label>
                        <Col sm="7">
                          <Form.Control
                            type="text"
                            name={`${docId}.${fieldKey}`}
                            value={formik.values[docId]?.[fieldKey] || ""}
                            onChange={formik.handleChange}
                            placeholder={`Enter ${fieldKey}`}
                          />
                        </Col>
                      </Form.Group>
                    ))}
                  <div className="text-end">
                    {documents.length > 1 && (
                      <Button variant="danger" onClick={() => removeDocument(docId)} size="sm">
                        Remove Document
                      </Button>
                    )}
                  </div>
                </Form>
              </Tab>
            );
          })}
        </Tabs>
        <div className="text-center mt-4">
          <Button variant="primary" onClick={addDocument} className="me-3">
            Add Document
          </Button>
          {(() => {
            const docStatus = getDocStatus();
            const allValid = isAllValid(docStatus);
            return (
              <Button
                type="submit"
                variant={allValid ? "success" : "secondary"}
                onClick={formik.handleSubmit}
                disabled={!allValid}
              >
                Next
              </Button>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default LinkDocuments;