import React from "react";
import { useFormik } from 'formik';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

const TitleHolderDetails = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            TitleHolderName: "",
            TitleHolderRelationType: "",
            TitleHolderRelativeName: "",
            TitleHolderResidenceType: "",
            TitleHolderDoorNumber: "",
            TitleHolderStreetName: "",
            TitleHolderCityName: "",
            TitleHolderMandalName: "",
            TitleHolderDistrictName: "",
            TitleHolderPincode: ""
        },
        onSubmit: (values) => {
            console.log('formsubmit', values)
            onNext();
        },

        validate: (values) => {
            let errors = {};
            if (!values.TitleHolderName) {
                errors.TitleHolderName = "*required*"
            }
            if (!values.TitleHolderRelationType) {
                errors.TitleHolderRelationType = "*required*";
            }
            if (!values.TitleHolderRelativeName) {
                errors.TitleHolderRelativeName = "*required*";
            }
            if (!values.TitleHolderResidenceType) {
                errors.TitleHolderResidenceType = "*required*";
            }
            if (!values.TitleHolderDoorNumber) {
                errors.TitleHolderDoorNumber = "*required*";
            }
            if (!values.TitleHolderStreetName) {
                errors.TitleHolderStreetName = "*required*";
            }

            if (!values.TitleHolderCityName) {
                errors.TitleHolderCityName = "*required*";
            }
            if (!values.TitleHolderMandalName) {
                errors.TitleHolderMandalName = "*required*";
            }
            if (!values.TitleHolderDistrictName) {
                errors.TitleHolderDistrictName = "*required*";
            }
            if (!values.TitleHolderPincode) {
                errors.TitleHolderPincode = "*required*";
            }
            return errors;
        }
    });

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
                                    name="TitleHolderName"
                                    value={formik.values.TitleHolderName}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderName && <div className="text-danger fw-bold">{formik.errors.TitleHolderName}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Relation Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                    <Form.Select   
                                name="TitleHolderRelationType"
                                value={ formik.values.TitleHolderRelationType }
                                onChange={formik.handleChange}
                                //    onBlur={handleBlur}
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
                                {formik.errors.TitleHolderRelationType && <div className="text-danger fw-bold">{formik.errors.TitleHolderRelationType}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Relative Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderRelativeName"
                                    value={formik.values.TitleHolderRelativeName}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.TitleHolderRelativeName && <div className="text-danger fw-bold">{formik.errors.TitleHolderRelativeName}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Residence Type</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                            <Form.Select   
                                name="TitleHolderResidenceType"
                                value={ formik.values.TitleHolderResidenceType }
                                onChange={formik.handleChange}
                                //    onBlur={handleBlur}
                                style={{ width:"100%", height: "40px", borderColor: "black", fontSize:"20px" }}
                                //required 
                                >
                                    <option value="">Select </option>
                                    <option value="Flat">Flat</option>
                                    <option value="House">House</option>
                            </Form.Select>
                                {formik.errors.TitleHolderResidenceType && <div className="text-danger fw-bold">{formik.errors.TitleHolderResidenceType}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Door Number</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderDoorNumber"
                                    value={formik.values.TitleHolderDoorNumber}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderDoorNumber && <div className="text-danger fw-bold">{formik.errors.TitleHolderDoorNumber}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Street Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderStreetName"
                                    value={formik.values.TitleHolderStreetName}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderStreetName && <div className="text-danger fw-bold">{formik.errors.TitleHolderStreetName}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder City Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderCityName"
                                    value={formik.values.TitleHolderCityName}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderCityName && <div className="text-danger fw-bold">{formik.errors.TitleHolderCityName}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Mandal Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderMandalName"
                                    value={formik.values.TitleHolderMandalName}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderMandalName && <div className="text-danger fw-bold">{formik.errors.TitleHolderMandalName}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder District Name</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderDistrictName"
                                    value={formik.values.TitleHolderDistrictName}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderDistrictName && <div className="text-danger fw-bold">{formik.errors.TitleHolderDistrictName}</div>}
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Label className="fs-3">Title Holder Pincode</Form.Label>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="TitleHolderPincode"
                                    value={formik.values.TitleHolderPincode}
                                    onChange={formik.handleChange}
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.TitleHolderPincode && <div className="text-danger fw-bold">{formik.errors.TitleHolderPincode}</div>}
                            </div>
                        </div>

                    
                    </div>

                    <div className="text-center">
                        <Button type="submit" variant="primary" className="mt-3">Next</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default TitleHolderDetails;
