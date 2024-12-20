import React from "react";
import { useFormik } from 'formik';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

const PropertyBoundaries = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
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
        onSubmit: (values) => {
            console.log('formsubmit', values)
            onNext();
        },

        validate: (values) => {
            let errors = {};
            if (!values.eastBoundaryType) {
                errors.eastBoundaryType = "*required*"
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.eastBoundaryType && <div className="text-danger fw-bold">{formik.errors.eastBoundaryType}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333"}}
                                />
                                {formik.errors.eastBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.eastBoundaryExtent}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.eastBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.eastBoundaryOwner}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.westBoundaryType && <div className="text-danger fw-bold">{formik.errors.westBoundaryType}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.westBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.westBoundaryExtent}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.westBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.westBoundaryOwner}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.northBoundaryType && <div className="text-danger fw-bold">{formik.errors.northBoundaryType}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.northBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.northBoundaryExtent}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.northBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.northBoundaryOwner}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.southBoundaryType && <div className="text-danger fw-bold">{formik.errors.southBoundaryType}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.southBoundaryExtent && <div className="text-danger fw-bold">{formik.errors.southBoundaryExtent}</div>}
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
                                    style={{ height: "40px", fontSize: "20px", borderColor: "#333333" }}
                                />
                                {formik.errors.southBoundaryOwner && <div className="text-danger fw-bold">{formik.errors.southBoundaryOwner}</div>}
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

export default PropertyBoundaries;
