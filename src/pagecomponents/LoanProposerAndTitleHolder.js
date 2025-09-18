// import React from "react";
// import Button from 'react-bootstrap/Button'
// //import LoanProposerDetails from "./LoanProposerDetails";
// //import { useNavigate } from "react-router-dom";

// const LoanProposerAndTitleHolder =({onOptionSelect})=>{
// //const navigate = useNavigate(); // Initialize the navigate function

//     return(
//         <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop:"200px"}} >
//            <h3>Is The Title Holder  
//            Same As The loan Proposer?
//            </h3>
//            <div className="d-flex justify-content-center">
//              {/* YES button navigates to a specific page */}
//             {/* <Button onClick={() => navigate('/MostRecentDocuments')}> YES</Button> */}
//             <Button style={{width:"100px" , fontWeight:"bold", fontSize:"20px"}} className="mx-3"  onClick={() => onOptionSelect("YES")}>YES</Button>
//             <Button style={{width:"100px", fontWeight:"bold", fontSize:"20px"}} onClick={() => onOptionSelect("NO")}> NO</Button>
//            </div>
//         </div>
//     )
// }

// export default LoanProposerAndTitleHolder;
// LoanProposerAndTitleHolders.js
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LoanProposerAndTitleHolders_api } from "../apiUrls";
import { getToken } from "../auth";

const LoanProposerAndTitleHolders = ({ onNext, onBack }) => {
  const [loading, setLoading] = useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: JSON.parse(sessionStorage.getItem("loanProposerAndTitleHoldersData")) || {
      titleHolderName: "",
      titleHolderRelation: "",
      titleHolderRelativeName: "",
      titleHolderAddress: "",
    },

    onSubmit: async (values) => {
      console.log("Form Submitted:", values);

      const sessionId = sessionStorage.getItem("sessionId");
      const userId = sessionStorage.getItem("user_id");
      const token = getToken(); // Get sessiontoken from cookies

      const dataToSend = {
        ...values,
        session_id: sessionId,
        user_id: userId, // backend expects snake_case
      };

      setLoading(true);
      try {
        const response = await fetch(LoanProposerAndTitleHolders_api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("API response:", data);
          onNext(); // go to next page
        } else {
          console.error("API Error:", response.statusText);
          alert("Unauthorized or API Error. Please login again.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },

    validate: (values) => {
      let errors = {};
      if (!values.titleHolderName) {
        errors.titleHolderName = "*required*";
      }
      if (!values.titleHolderRelation) {
        errors.titleHolderRelation = "*required*";
      }
      if (!values.titleHolderRelativeName) {
        errors.titleHolderRelativeName = "*required*";
      }
      if (!values.titleHolderAddress) {
        errors.titleHolderAddress = "*required*";
      }
      return errors;
    },
  });

  // Save to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem(
      "loanProposerAndTitleHoldersData",
      JSON.stringify(formik.values)
    );
  }, [formik.values]);

  return (
    <div>
      <h3 className="text-center">Loan Proposer & Title Holders</h3>

      <div style={{ minHeight: "100vh", paddingLeft: "50px", paddingTop: "10px" }}>
        <Form onSubmit={formik.handleSubmit}>
          {/* Title Holder Name */}
          <Form.Group controlId="TitleHolderName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Title Holder Name</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="titleHolderName"
                  value={formik.values.titleHolderName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                />
                {formik.touched.titleHolderName && formik.errors.titleHolderName && (
                  <div className="text-danger fw-bold">{formik.errors.titleHolderName}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Title Holder Relation */}
          <Form.Group controlId="TitleHolderRelation">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Title Holder Relation</Form.Label>
              </div>
              <div className="col-12">
                <Form.Select
                  name="titleHolderRelation"
                  value={formik.values.titleHolderRelation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                >
                  <option value="">Select</option>
                  <option value="S/O">S/O</option>
                  <option value="W/O">W/O</option>
                  <option value="D/O">D/O</option>
                  <option value="C/O">C/O</option>
                </Form.Select>
                {formik.touched.titleHolderRelation && formik.errors.titleHolderRelation && (
                  <div className="text-danger fw-bold">{formik.errors.titleHolderRelation}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Relative Name */}
          <Form.Group controlId="TitleHolderRelativeName">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Relative Name</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="titleHolderRelativeName"
                  value={formik.values.titleHolderRelativeName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", height: "40px", borderColor: "black", fontSize: "20px" }}
                />
                {formik.touched.titleHolderRelativeName &&
                  formik.errors.titleHolderRelativeName && (
                    <div className="text-danger fw-bold">{formik.errors.titleHolderRelativeName}</div>
                  )}
              </div>
            </div>
          </Form.Group>

          {/* Address */}
          <Form.Group controlId="TitleHolderAddress">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Address</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="titleHolderAddress"
                  value={formik.values.titleHolderAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px", borderColor: "black", fontSize: "20px" }}
                />
                {formik.touched.titleHolderAddress && formik.errors.titleHolderAddress && (
                  <div className="text-danger fw-bold">{formik.errors.titleHolderAddress}</div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Buttons */}
          <div className="text-center mt-4">
            <Button
              variant="secondary"
              onClick={onBack}
              className="me-3"
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? "Saving..." : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoanProposerAndTitleHolders;
