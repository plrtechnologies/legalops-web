import React, { useState, useEffect} from "react";
import { useFormik } from 'formik';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { TitleHolderDetails_api } from "../apiUrls";

const TitleHolderDetails = ({ onNext }) => {
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues:JSON.parse(sessionStorage.getItem("TitleHoldersData")) ||  {
            titleHolderName: "",
            titleHolderRelationType: "",
            titleHolderRelativeName: "",
            titleHolderResidenceType: "",
            titleHolderDoorNumber: "",
            titleHolderStreetName: "",
            titleHolderCityName: "",
            titleHolderMandalName: "",
            titleHolderDistrictName: "",
            titleHolderPincode: ""
        },
        // onSubmit: (values) => {
        //     console.log('formsubmit', values)
        //     onNext();
        // },
        onSubmit: async (values) => {
            console.log('Form Submitted:', values);

            // Set loading state to true
            //setLoading(true);

            // Replace with your actual API endpoint
            // const apiUrl = TitleHolderDetails_api;

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
            if (!values.titleHolderName) {
                errors.titleHolderName = "*required*"
            }
            if (!values.titleHolderRelationType) {
                errors.titleHolderRelationType = "*required*";
            }
            if (!values.titleHolderRelativeName) {
                errors.titleHolderRelativeName = "*required*";
            }
            if (!values.titleHolderResidenceType) {
                errors.titleHolderResidenceType = "*required*";
            }
            if (!values.titleHolderDoorNumber) {
                errors.titleHolderDoorNumber = "*required*";
            }
            if (!values.titleHolderStreetName) {
                errors.titleHolderStreetName = "*required*";
            }

            if (!values.titleHolderCityName) {
                errors.titleHolderCityName = "*required*";
            }
            if (!values.titleHolderMandalName) {
                errors.titleHolderMandalName = "*required*";
            }
            if (!values.titleHolderDistrictName) {
                errors.titleHolderDistrictName = "*required*";
            }
            if (!values.titleHolderPincode) {
                errors.titleHolderPincode = "*required*";
            }
            return errors;
        }
    });

    // Save form data to sessionStorage on change
               useEffect(() => {
                 sessionStorage.setItem("TitleHolderDetails", JSON.stringify(formik.values));
             }, [formik.values]);
           
             // Retrieve form data from sessionStorage on component mount
             useEffect(() => {
                 const savedData = JSON.parse(sessionStorage.getItem("TitleHolderDetails"));
                 if (savedData) {
                     formik.setValues(savedData);
                 }
             }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", paddingBottom: "50px" }}>
            <div style={{ width: "100%", maxWidth: "800px", padding: "20px", overflowY: "auto" }}>
                <h3 className="text-center">Title Holder Details</h3>
                <Form onSubmit={formik.handleSubmit}>
                    <div className="d-flex flex-column pt-3 pb-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderName"
                                    value={formik.values.titleHolderName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.TitleHolderName && <div className="text-danger fw-bold">{formik.errors.TitleHolderName}</div>} */}
                        
                                {formik.touched.   titleHolderName && formik.errors.   titleHolderName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderName}</div>
                            )}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Relation Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                    <Form.Select   
                                name="titleHolderRelationType"
                                value={ formik.values.titleHolderRelationType }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
                                //required 
                                >
                                    <option value="">Select </option>
                                    <option value="S/O">S/O</option>
                                    <option value="W/O">W/O</option>
                                    <option value="D/O">D/O </option>
                                    <option value="C/O">C/O</option>
                                    <option value="H/O">H/O</option>
                            
                            </Form.Select>
                                {/* {formik.errors.TitleHolderRelationType && <div className="text-danger fw-bold">{formik.errors.TitleHolderRelationType}</div>} */}
                                {formik.touched.   titleHolderRelationType && formik.errors.   titleHolderRelationType && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderRelationType}</div>
                            )}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Relative Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderRelativeName"
                                    value={formik.values.TitleHolderRelativeName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {/* {formik.errors.TitleHolderRelativeName && <div className="text-danger fw-bold">{formik.errors.TitleHolderRelativeName}</div>} */}
                                {formik.touched.   titleHolderRelativeName && formik.errors.   titleHolderRelativeName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderRelativeName}</div>
                            )}
                            
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Residence Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                            <Form.Select   
                                name="titleHolderResidenceType"
                                value={ formik.values.titleHolderResidenceType }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                 
                                style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
                                //required 
                                >
                                    <option value="">Select </option>
                                    <option value="Flat">Flat</option>
                                    <option value="House">House</option>
                            </Form.Select>
                                {/* {formik.errors.titleHolderResidenceType && <div className="text-danger fw-bold">{formik.errors.TitleHolderResidenceType}</div>} */}
                                {formik.touched.   titleHolderResidenceType && formik.errors.   titleHolderResidenceType && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderResidenceType}</div>
                            )}
                           
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Door Number</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderDoorNumber"
                                    value={formik.values.titleHolderDoorNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.titleHolderDoorNumber && <div className="text-danger fw-bold">{formik.errors.TitleHolderDoorNumber}</div>} */}
                            
                                {formik.touched.  titleHolderDoorNumber && formik.errors.  titleHolderDoorNumber && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  titleHolderDoorNumber}</div>
                            )}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Street Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderStreetName"
                                    value={formik.values.titleHolderStreetName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.TitleHolderStreetName && <div className="text-danger fw-bold">{formik.errors.TitleHolderStreetName}</div>} */}
                                {formik.touched.   titleHolderStreetName && formik.errors.   titleHolderStreetName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderStreetName}</div>
                            )}
                            
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder City Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderCityName"
                                    value={formik.values.titleHolderCityName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.TitleHolderCityName && <div className="text-danger fw-bold">{formik.errors.TitleHolderCityName}</div>} */}
                                {formik.touched.   titleHolderCityName && formik.errors.   titleHolderCityName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderCityName}</div>
                            )}
                           
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Mandal Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderMandalName"
                                    value={formik.values.titleHolderMandalName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.TitleHolderMandalName && <div className="text-danger fw-bold">{formik.errors.TitleHolderMandalName}</div>} */}
                            
                                {formik.touched.  titleHolderMandalName && formik.errors.  titleHolderMandalName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  titleHolderMandalName}</div>
                            )}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder District Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderDistrictName"
                                    value={formik.values.TitleHolderDistrictName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.TitleHolderDistrictName && <div className="text-danger fw-bold">{formik.errors.TitleHolderDistrictName}</div>} */}
                                {formik.touched.   titleHolderDistrictName && formik.errors.   titleHolderDistrictName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.   titleHolderDistrictName}</div>
                            )}
                          
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Pincode</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="titleHolderPincode"
                                    value={formik.values.TitleHolderPincode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {/* {formik.errors.TitleHolderPincode && <div className="text-danger fw-bold">{formik.errors.TitleHolderPincode}</div>} */}
                     
                                {formik.touched.  titleHolderRelativeName && formik.errors.  titleHolderRelativeName && (
                            <div className="text-danger fw-bold fs-5">{formik.errors.  titleHolderRelativeName}</div>
                            )}
                            </div>
                        </div>

                    
                    </div>

                    {/* <div className="text-center">
                        <Button type="submit" variant="primary" className="mt-3">Next</Button>
                    </div> */}
                    <div className="text-center">
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

export default TitleHolderDetails;
