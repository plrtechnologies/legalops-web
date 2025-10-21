import React, { useState } from "react";
import { Tabs, Tab, Button, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate , useSearchParams} from "react-router-dom";
import { CREATE_LINK_DOCUMENT_API } from "../apiUrls";
import { getToken } from "../auth";

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
  const [savedDocIds, setSavedDocIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  // Function to load documents from localStorage
  const loadDocumentsFromStorage = () => {
    const loadedDocs = [];
    const loadedValues = {};
    const savedIds = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('linkdoc_')) {
        const docId = key.replace('linkdoc_', '');
        savedIds.push(docId);
        try {
          const payload = JSON.parse(localStorage.getItem(key));
          // Map selectDeedType to PascalCase documentType for both switches
          let documentType = '';
          switch ((payload.selectDeedType || '').toLowerCase()) {
            case 'giftdeed': documentType = 'GiftDeed'; break;
            case 'mortgagedeed': documentType = 'MortgageDeed'; break;
            case 'noticedocument': documentType = 'HouseTaxDemandNotice'; break;
            case 'receiptdocument': documentType = 'HouseTaxReceipt'; break;
            case 'partitiondeed': documentType = 'PartitionDeed'; break;
            case 'relinquishdeed': documentType = 'RelinquishmentDeed'; break;
            case 'willdeed': documentType = 'WillDeed'; break;
            case 'ec': documentType = 'EncumbranceCertificate'; break;
            case 'saledeed': documentType = 'SaleDeed'; break;
            default: documentType = ''; break;
          }
          let registrationDate = '';
          let documentNumber = '';
          let issuingAuthority = '';
          switch (documentType) {
            case 'GiftDeed':
              registrationDate = payload.giftRegistrationDate || payload.registrationDate || '';
              documentNumber = payload.giftDocNumber || payload.documentNumber || '';
              issuingAuthority = payload.giftIssuingAuthority || payload.issuingAuthority || '';
              break;
            case 'MortgageDeed':
              registrationDate = payload.mortgageRegistrationDate || payload.registrationDate || '';
              documentNumber = payload.mortgageDocNumber || payload.documentNumber || '';
              issuingAuthority = payload.mortgageIssuingAuthority || payload.issuingAuthority || '';
              break;
            case 'PartitionDeed':
              registrationDate = payload.partitionRegistrationDate || payload.registrationDate || '';
              documentNumber = payload.partitionDocNumber || payload.documentNumber || '';
              issuingAuthority = payload.partitionIssuingAuthority || payload.issuingAuthority || '';
              break;
            case 'RelinquishmentDeed':
              registrationDate = payload.relinquishRegistrationDate || payload.registrationDate || '';
              documentNumber = payload.relinquishDocNumber || payload.documentNumber || '';
              issuingAuthority = payload.relinquishIssuingAuthority || payload.issuingAuthority || '';
              break;
            case 'WillDeed':
              registrationDate = payload.willRegistrationDate || payload.registrationDate || '';
              documentNumber = payload.willDocNumber || payload.documentNumber || '';
              issuingAuthority = payload.willIssuingAuthority || payload.issuingAuthority || '';
              break;
            case 'SaleDeed':
              registrationDate = payload.saleRegistrationDate || payload.registrationDate || '';
              documentNumber = payload.saleDocNumber || payload.documentNumber || '';
              issuingAuthority = payload.saleIssuingAuthority || payload.issuingAuthority || '';
              break;
            default:
              break;
          }
          // Map restored values to the correct field keys for the form
          let docFields = { documentType, ...payload };
          // Set the correct keys for each document type
          switch (documentType) {
            case 'GiftDeed':
            case 'SaleDeed':
            case 'RelinquishmentDeed':
            case 'MortgageDeed':
            case 'WillDeed':
              docFields = {
                ...docFields,
                registrationDate: registrationDate,
                documentNumber: documentNumber,
                issuingAuthority: issuingAuthority
              };
              break;
            case 'PartitionDeed':
              docFields = {
                ...docFields,
                registrationDate: registrationDate,
                documentNumber: documentNumber,
                issuingAuthority: issuingAuthority,
                precipientName: payload.partitionRecipientName || payload.precipientName || ''
              };
              break;
            default:
              docFields = { ...docFields };
          }
          loadedDocs.push(docId);
          loadedValues[docId] = docFields;
        } catch (e) { /* ignore parse errors */ }
      }
    }
    if (loadedDocs.length > 0) {
      setDocuments(loadedDocs);
      setActiveTab(loadedDocs[0]);
      formik.setValues(loadedValues);
      setSavedDocIds(savedIds);
    }
  };

  // Load on mount: if user is logged in (session/token present) clear previous link documents,
  // otherwise restore any saved draft documents from localStorage.
  React.useEffect(() => {
    const sessionId = searchParams.get("session_id") || sessionStorage.getItem("sessionId");
    const token = getToken() || sessionStorage.getItem("token");
    if (sessionId && token) {
      // User is logged in - clear any previously saved link documents
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('linkdoc_')) keysToRemove.push(key);
      }
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      setDocuments(["doc-1"]);
      setActiveTab("doc-1");
      setSavedDocIds([]);
      // formik is not yet initialized here (declared later), so we don't call formik.setValues()
    } else {
      // Not logged in - restore any saved drafts
      loadDocumentsFromStorage();
    }
    // eslint-disable-next-line
  }, []);

  // Reload on page visibility change (e.g., back navigation)
  React.useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        loadDocumentsFromStorage();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const formik = useFormik({
    initialValues: {
      "doc-1": { documentType: "" },
    },
    onSubmit: handleNext,
    enableReinitialize: true,
  });

  // Utility to clear all linkdoc_* keys from localStorage and reset state
  const clearLinkDocumentsFromStorage = () => {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('linkdoc_')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    setDocuments(["doc-1"]);
    setActiveTab("doc-1");
    setSavedDocIds([]);
    formik.setValues({ "doc-1": { documentType: "" } });
  };

  // Check for session expiration and clear documents if expired
  React.useEffect(() => {
    const sessionId = searchParams.get("session_id") || sessionStorage.getItem("sessionId");
    const token = getToken() || sessionStorage.getItem("token");
    if (!sessionId || !token) {
      clearLinkDocumentsFromStorage();
    }
  }, [searchParams, getToken]);

  // Also clear saved link documents when a login happens (session/token become present).
  // This covers login events in the same tab (immediate check) and other tabs (storage event).
  React.useEffect(() => {
    const checkAndClearOnLogin = () => {
      const sessionId = searchParams.get("session_id") || sessionStorage.getItem("sessionId");
      const token = getToken() || sessionStorage.getItem("token");
      if (sessionId && token) {
        clearLinkDocumentsFromStorage();
      }
    };

    // run immediately (covers login before component mounts)
    checkAndClearOnLogin();

    // listen for storage events (other tabs)
    const onStorage = (e) => {
      if (e.key === 'token' || e.key === 'sessionId') {
        checkAndClearOnLogin();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [searchParams]);

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

    const session_id = searchParams.get("session_id") || sessionStorage.getItem("sessionId");
  const user_id = sessionStorage.getItem("user_id");

  // Map form values to API payload for each document type
  function mapPayload(doc) {
    switch ((doc.documentType || '').toLowerCase()) {
      case 'giftdeed':
        return {
          selectDeedType: 'giftdeed',
          giftDocType: doc.giftDocType || '',
          donorName: doc.donorName || '',
          doneeName: doc.doneeName || '',
          giftRegistrationDate: doc.registrationDate || '',
          giftDocNumber: doc.documentNumber || '',
          giftIssuingAuthority: doc.issuingAuthority || ''
        };
      case 'mortgagedeed':
        return {
          selectDeedType: 'mortgagedeed',
          mortgageDocType: doc.mortgageDocType || '',
          mortgagorName: doc.mortgagorName || '',
          mortgageeName: doc.mortgageeName || '',
          mortgageRegistrationDate: doc.registrationDate || '',
          mortgageDocNumber: doc.documentNumber || '',
          mortgageIssuingAuthority: doc.issuingAuthority || ''
        };
      case 'noticedocument':
        return {
          selectDeedType: 'noticedocument',
          noticeDocType: doc.noticeDocType || '',
          noticeIssuingAuthority: doc.noticeIssuingAuthority || '',
          noticeDoorNumberOnReceipt: doc.DoorNumberOnReceipt || '',
          noticeAssessmentNumberOnReceipt: doc.assessmentNumberOnRecept || '',
          amountDue: doc.amountDue || '',
          amountDueInFavourOf: doc.amountDueInFavourOf || ''
        };
      case 'receiptdocument':
        return {
          selectDeedType: 'receiptdocument',
          receiptDocType: doc.receiptDocType || '',
          receiptIssuingAuthority: doc.ReceiptIssuingAuthority || '',
          receiptDoorNumberOnReceipt: doc.DoorNumberOnReceipt || '',
          receiptAssessmentNumberOnReceipt: doc.assessmentNumberOnRecept || '',
          amountPaid: doc.amountPaid || '',
          amountPaidInFavourOf: doc.amountPaidInFavourOf || ''
        };
      case 'partitiondeed':
        return {
          selectDeedType: 'partitiondeed',
          partitionDocType: doc.partitionDocType || '',
          partitionerName: doc.partitionerName || '',
          partitionRecipientName: doc.precipientName || doc.partitionRecipientName || doc.precipientName || '',
          partitionRegistrationDate: doc.registrationDate || '',
          partitionDocNumber: doc.documentNumber || '',
          partitionIssuingAuthority: doc.issuingAuthority || ''
        };
      case 'relinquishdeed':
        return {
          selectDeedType: 'relinquishdeed',
          relinquishDocType: doc.relinquishDocType || '',
          relinquisherName: doc.relinquisherName || '',
          relinquishRecipientName: doc.recipientName || '',
          relinquishRegistrationDate: doc.registrationDate || '',
          relinquishDocNumber: doc.documentNumber || '',
          relinquishIssuingAuthority: doc.issuingAuthority || ''
        };
      case 'willdeed':
        return {
          selectDeedType: 'willdeed',
          willDocType: doc.willDocType || '',
          testatorName: doc.testatorName || '',
          beneficiaryName: doc.beneficiaryName || '',
          willRegistrationDate: doc.registrationDate || '',
          willDocNumber: doc.documentNumber || '',
          willIssuingAuthority: doc.issuingAuthority || ''
        };
      case 'ec':
        return {
          selectDeedType: 'ec',
          ecDocType: doc.ecDocType || '',
          ecIssuingAuthority: doc.ecIssuingAuthority || '',
          ecStatementNumber: doc.ecstatementNumber || '',
          fromDate: doc.fromDate || '',
          toDate: doc.toDate || ''
        };
      case 'saledeed':
      default:
        return {
          selectDeedType: 'saledeed',
          saleDocType: doc.saleDocType || '',
          sellerName: doc.sellerName || '',
          buyerName: doc.buyerName || '',
          saleRegistrationDate: doc.registrationDate || '',
          saleDocNumber: doc.documentNumber || '',
          saleIssuingAuthority: doc.issuingAuthority || ''
        };
    }
  }

  async function handleNext() {
    setLoading(true);
    const docStatus = getDocStatus();
    const allValid = isAllValid(docStatus);
    if (!allValid) {
      const firstErrorIdx = docStatus.findIndex((s) => s === "error");
      if (firstErrorIdx !== -1) setActiveTab(documents[firstErrorIdx]);
      setLoading(false);
      return;
    }
    const token = getToken() || sessionStorage.getItem("token");
    if (!token || !user_id || !session_id) {
      alert("Authentication required. Please login or start a session.");
      navigate("/login");
      setLoading(false);
      return;
    }
    // For each document, map and store in localStorage, then call API sequentially
    const successfulDocIds = [];
    try {
      for (const docId of documents) {
        const doc = { ...formik.values[docId] };
        if (doc && doc.documentType) {
          doc.documentType = doc.documentType.toLowerCase();
        }
        const payload = {
          ...mapPayload(doc),
          session_id: session_id || "",
          user_id: user_id || ""
        };
        localStorage.setItem(`linkdoc_${docId}`, JSON.stringify(payload));
        console.log(`Submitting document ${docId}:`, payload);
        const res = await fetch(CREATE_LINK_DOCUMENT_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          successfulDocIds.push(docId);
        }
      }
      if (successfulDocIds.length > 0) {
        setSavedDocIds((prev) => Array.from(new Set([...prev, ...successfulDocIds])));
      }
      if (successfulDocIds.length === documents.length) {
        if (onNext) onNext();
        else navigate("/review-document");
      } else {
        alert("Failed to create one or more link documents");
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
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
                            type={fieldKey.toLowerCase().includes('registrationdate') ? 'date' : 'text'}
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
                      <Button
                        variant="danger"
                        onClick={() => removeDocument(docId)}
                        size="sm"
                        disabled={savedDocIds.includes(docId)}
                      >
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
              <>
                <Button
                  type="submit"
                  variant={allValid ? "success" : "secondary"}
                  onClick={formik.handleSubmit}
                  disabled={!allValid || loading}
                >
                  {loading ? "Processing..." : "Next"}
                </Button>
                {loading && <div style={{ color: '#fff', marginTop: 10 }}>Loading...</div>}
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default LinkDocuments;