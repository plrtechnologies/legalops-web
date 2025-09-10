import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";  
import { Propertyboundaries_api } from "../apiUrls";

const PropertyBoundaries = ({ onNext }) => {
    // State to handle loading state for API call
    const [loading, setLoading] = useState(false);
     const navigate = useNavigate();  // Initialize navigate
    const formik = useFormik({
        initialValues:  JSON.parse(sessionStorage.getItem("PropertyBoundariesData")) ||{
            eastBoundaryType: "",
            eastBoundaryExtent: "",
            eastBoundaryOwner: "",
            westBoundaryType: "",
            westBoundaryExtent: "",
            westBoundaryOwner: "",
            northBoundaryType: "",
            northBoundaryExtent: "",
            northBoundaryOwner: "",
            southBoundaryType: "",
            southBoundaryExtent: "",
            southBoundaryOwner: "",
        },
        onSubmit: async (values) => {
            console.log('Form Submitted:', values);

            // Set loading state to true
            //setLoading(true);

            // Replace with your actual API endpoint
            // const apiUrl = Propertyboundaries_api;

            // try {
            //     const response = await fetch(apiUrl, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(values),
            //     });

            //     if (response.ok) {
            //         const data = await response.json();
            //         console.log("API response:", data);

            //         // After a successful API call, call onNext
                    onNext();
            //     } else {
            //         // Handle API error
            //         console.error("API Error:", response.statusText);
            //         // Optionally show an error message to the user
            //     }
            // } catch (error) {
            //     console.error("Error during API call:", error);
            //     // Optionally show an error message to the user
            // } finally {
            //     // Set loading state to false
            //     setLoading(false);
            // }
        },

        validate: (values) => {
            let errors = {};
            if (!values.eastBoundaryType) {
                errors.eastBoundaryType = "*required*";
            }

            if (!values.eastBoundaryExtent) {
                errors.eastBoundaryExtent = "*required*";
            }
            if (!values.eastBoundaryOwner) {
                errors.eastBoundaryOwner = "*required*";
            }
            if (!values.westBoundaryType) {
                errors.westBoundaryType = "*required*";
            }
            if (!values.westBoundaryExtent) {
                errors.westBoundaryExtent = "*required*";
            }
            if (!values.westBoundaryOwner) {
                errors.westBoundaryOwner = "*required*";
            }

            if (!values.northBoundaryType) {
                errors.northBoundaryType = "*required*";
            }
            if (!values.northBoundaryExtent) {
                errors.northBoundaryExtent = "*required*";
            }
            if (!values.northBoundaryOwner) {
                errors.northBoundaryOwner = "*required*";
            }
            if (!values.southBoundaryType) {
                errors.southBoundaryType = "*required*";
            }
            if (!values.southBoundaryExtent) {
                errors.southBoundaryExtent = "*required*";
            }
            if (!values.southBoundaryOwner) {   
                errors.southBoundaryOwner = "*required*";
            }
            return errors;
        }
    });

// Save form data to sessionStorage on change
           useEffect(() => {
             sessionStorage.setItem("PropertyBoundaries", JSON.stringify(formik.values));
         }, [formik.values]);
       
         // Retrieve form data from sessionStorage on component mount
         useEffect(() => {
             const savedData = JSON.parse(sessionStorage.getItem("PropertyBoundaries"));
             if (savedData) {
                 formik.setValues(savedData);
             }
         }, []);


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", paddingBottom: "50px" }}>
            <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
                <h3 className="text-center">Property Boundaries</h3>
                <Form onSubmit={formik.handleSubmit}>
                    {/* East Boundary Section */}
                    <h3 className="text-center">EAST</h3>
                    <div className="d-flex flex-column pt-3 pb-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">East Boundary Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="eastBoundaryType"
                                    value={formik.values.eastBoundaryType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.eastBoundaryType && <div className="text-danger fw-bold">{formik.errors.eastBoundaryType}</div>} */}

                                {formik.touched. eastBoundaryType && formik.errors. eastBoundaryType && (
                               <div className="text-danger fw-bold fs-5">{formik.errors. eastBoundaryType}</div>
                         
                         )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">East Boundary Extent</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="eastBoundaryExtent"
                                    value={formik.values.eastBoundaryExtent}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.eastBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.eastBoundaryExtent}</div>} */}
                                {formik.touched. eastBoundaryExtent && formik.errors. eastBoundaryExtent && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. eastBoundaryExtent}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">East Boundary Owner</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="eastBoundaryOwner"
                                    value={formik.values.eastBoundaryOwner}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.eastBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.eastBoundaryOwner}</div>} */}
                                {formik.touched. eastBoundaryOwner && formik.errors. eastBoundaryOwner && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. eastBoundaryOwner}</div>
                        )}  
                            </div>
                        </div>
                    </div>

                    {/* West Boundary Section */}
                    <h3 className="text-center">WEST</h3>
                    <div className="d-flex flex-column pt-3 pb-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">West Boundary Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="westBoundaryType"
                                    value={formik.values.westBoundaryType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.westBoundaryType && <div className="text-danger fw-bold">{formik.errors.westBoundaryType}</div>} */}
                                {formik.touched. westBoundaryType && formik.errors. westBoundaryType && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. westBoundaryType}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">West Boundary Extent</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="westBoundaryExtent"
                                    value={formik.values.westBoundaryExtent}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.westBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.westBoundaryExtent}</div>} */}
                                {formik.touched. westBoundaryExtent && formik.errors. westBoundaryExtent && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. westBoundaryExtent}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">West Boundary Owner</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="westBoundaryOwner"
                                    value={formik.values.westBoundaryOwner}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.westBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.westBoundaryOwner}</div>} */}
                                {formik.touched. westBoundaryOwner && formik.errors. westBoundaryOwner && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. westBoundaryOwner}</div>
                        )}  
                            </div>
                        </div>
                    </div>

                    {/* North Boundary Section */}
                    <h3 className="text-center">NORTH</h3>
                    <div className="d-flex flex-column pt-3 pb-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">North Boundary Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="northBoundaryType"
                                    value={formik.values.northBoundaryType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.northBoundaryType && <div className="text-danger fw-bold">{formik.errors.northBoundaryType}</div>} */}
                                {formik.touched. northBoundaryType && formik.errors. northBoundaryType && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. northBoundaryType}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">North Boundary Extent</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="northBoundaryExtent"
                                    value={formik.values.northBoundaryExtent}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.northBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.northBoundaryExtent}</div>} */}
                                {formik.touched. northBoundaryExtent && formik.errors. northBoundaryExtent && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. northBoundaryExtent}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">North Boundary Owner</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="northBoundaryOwner"
                                    value={formik.values.northBoundaryOwner}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.northBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.northBoundaryOwner}</div>} */}
                                {formik.touched. northBoundaryOwner && formik.errors. northBoundaryOwner && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. northBoundaryOwner}</div>
                        )}  
                            </div>
                        </div>
                    </div>

                    {/* South Boundary Section */}
                    <h3 className="text-center">SOUTH</h3>
                    <div className="d-flex flex-column pt-3 pb-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">South Boundary Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="southBoundaryType"
                                    value={formik.values.southBoundaryType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.southBoundaryType && <div className="text-danger fw-bold">{formik.errors.southBoundaryType}</div>} */}
                                {formik.touched. southBoundaryType && formik.errors. southBoundaryType && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. southBoundaryType}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">South Boundary Extent</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="southBoundaryExtent"
                                    value={formik.values.southBoundaryExtent}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.southBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.southBoundaryExtent}</div>} */}
                                {formik.touched. southBoundaryExtent && formik.errors. southBoundaryExtent && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. southBoundaryExtent}</div>
                        )}  
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">South Boundary Owner</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="southBoundaryOwner"
                                    value={formik.values.southBoundaryOwner}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.southBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.southBoundaryOwner}</div>} */}
                                {formik.touched. southBoundaryOwner && formik.errors. southBoundaryOwner && (
                            <div className="text-danger fw-bold fs-5">{formik.errors. southBoundaryOwner}</div>
                        )}  
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">

                         {/* Back Button */}
                         <Button
                            variant="secondary"
                            className="mt-3 me-3"
                            onClick={() => navigate(-1)}  // Navigate back
                        >
                            Back
                        </Button>
                        
                        <Button
                            type="submit"
                            variant="primary"
                            className="mt-3"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Next"}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PropertyBoundaries;