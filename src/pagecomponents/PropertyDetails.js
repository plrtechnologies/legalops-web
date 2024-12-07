 
// export default PropertyDetails;
import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

const PropertyDetails = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      propertyDoorNumber: "",
      nearbyDoor: "", // Yes or No (radio buttons)
      propertyAssessmentNumber: "",
      propertySurveyNumber: "",
      ExtentOfProperty: "",
      propertyType: "",  
      propertyNature: "", 
    },
    onSubmit: (values) => {
      console.log("Property Details Submitted:", values);
      onNext();
    },
    validate: (values) => {
      let errors = {};
      if (!values.propertyDoorNumber) {
        errors.propertyDoorNumber = "*required*";
      }
      if (!values.nearbyDoor) {
        errors.nearbyDoor = "*required*";
      }
      if (!values.propertyAssessmentNumber) {
        errors.propertyAssessmentNumber = "*required*";
      }
      if (!values.propertySurveyNumber) {
        errors.propertySurveyNumber = "*required*";
      }
      if (!values.ExtentOfProperty) {
        errors.ExtentOfProperty = "*required*";
      }
      if (!values.propertyType) {
        errors.propertyType = "*required*";
      }
      if (!values.propertyNature) {
        errors.propertyNature = "*required*";
      }
      return errors;
    },
  });

  return (
    <div>
      <h3 className="text-center">Property Details</h3>
      <div
        style={{
          height: "100vh",
          paddingLeft: "50px",
          paddingTop: "10px",
          overflowX: "hidden",
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          {/* Property Door Number */}
          <Form.Group controlId="propertyDoorNumber">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Property Door Number</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="propertyDoorNumber"
                  value={formik.values.propertyDoorNumber}
                  onChange={formik.handleChange}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.errors.propertyDoorNumber && (
                  <div className="text-danger fw-bold">
                    {formik.errors.propertyDoorNumber}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Is Nearby Door */}
          <Form.Group controlId="nearbyDoor">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Is Nearby Door Number?</Form.Label>
              </div>
              <div className="d-flex flex-row col-12">
                <Form.Check className="me-3"
                  type="radio"
                  label="Yes"
                  name="nearbyDoor"
                  value="Yes"
                  checked={formik.values.nearbyDoor === "Yes"}
                  onChange={formik.handleChange}
                />
                <Form.Check 
                  type="radio"
                  label="No"
                  name="nearbyDoor"
                  value="No"
                  checked={formik.values.nearbyDoor === "No"}
                  onChange={formik.handleChange}
                />
                {formik.errors.nearbyDoor && (
                  <div className="text-danger fw-bold">
                    {formik.errors.nearbyDoor}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Property Assessment Number */}
          <Form.Group controlId="propertyAssessmentNumber">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">
                  Property Assessment Number
                </Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="propertyAssessmentNumber"
                  value={formik.values.propertyAssessmentNumber}
                  onChange={formik.handleChange}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.errors.propertyAssessmentNumber && (
                  <div className="text-danger fw-bold">
                    {formik.errors.propertyAssessmentNumber}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Property Survey Number */}
          <Form.Group controlId="propertySurveyNumber">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Property Survey Number</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="propertySurveyNumber"
                  value={formik.values.propertySurveyNumber}
                  onChange={formik.handleChange}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.errors.propertySurveyNumber && (
                  <div className="text-danger fw-bold">
                    {formik.errors.propertySurveyNumber}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Extent Of Property */}
          <Form.Group controlId="ExtentOfProperty">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Total Extent of Property</Form.Label>
              </div>
              <div className="col-12">
                <Form.Control
                  type="text"
                  name="ExtentOfProperty"
                  value={formik.values.ExtentOfProperty}
                  onChange={formik.handleChange}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                />
                {formik.errors.ExtentOfProperty && (
                  <div className="text-danger fw-bold">
                    {formik.errors.ExtentOfProperty}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Property Type */}
          <Form.Group controlId="propertyType">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Select Property Type</Form.Label>
              </div>
              <div className="col-12">
                <Form.Select
                  name="propertyType"
                  value={formik.values.propertyType}
                  onChange={formik.handleChange}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="RCC Dhaba House">RCC Dhaba House</option>
                  <option value="Site">Site</option>
                  <option value="Tiled House">Tiled House</option>
                   
                </Form.Select>
                {formik.errors.propertyType && (
                  <div className="text-danger fw-bold">
                    {formik.errors.propertyType}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          {/* Property Nature */}
          <Form.Group controlId="propertyNature">
            <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
              <div className="col-12" style={{ width: "420px" }}>
                <Form.Label className="fs-3">Select Property Nature</Form.Label>
              </div>
              <div className="col-12">
                <Form.Select
                  name="propertyNature"
                  value={formik.values.propertyNature}
                  onChange={formik.handleChange}
                  style={{
                    width: "300px",
                    height: "40px",
                    borderColor: "black",
                    fontSize: "20px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                  
                </Form.Select>
                {formik.errors.propertyNature && (
                  <div className="text-danger fw-bold">
                    {formik.errors.propertyNature}
                  </div>
                )}
              </div>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-center pt-5">
            <Button type="submit">Next</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PropertyDetails;
