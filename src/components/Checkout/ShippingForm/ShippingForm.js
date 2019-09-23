import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./ShippingForm.css";

const ShippingForm = () => {
  const displayAddressesDropdown = () => {
    return (
      <DropdownButton
        id="addresses-dropdown"
        title="Addresses"
        className="dropdown"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ShippingFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().required("Zip code is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegExp, "Phone number is not valid"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
  });

  const shippingForm = () => (
    <Formik
      initialValues={{
        name: "",
        address: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
        phone: "",
        email: ""
      }}
      validationSchema={ShippingFormSchema}
    >
      {({ errors, touched }) => {
        return (
          <Form className="mt-4" name="shippingForm">
            <div className="form-group">
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`form-control ${
                  touched.name && errors.name ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                name="address"
                placeholder="Address"
                className={`form-control ${
                  touched.address && errors.address ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="address"
                className="invalid-feedback"
              />
            </div>

            <div className="row">
              <div className="form-group col">
                <Field
                  type="text"
                  name="country"
                  placeholder="Country"
                  className={`form-control ${
                    touched.country && errors.country ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="country"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group col">
                <Field
                  type="text"
                  name="state"
                  placeholder="State"
                  className={`form-control ${
                    touched.state && errors.state ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="state"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className={`form-control ${
                    touched.city && errors.city ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="city"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group col">
                <Field
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  className={`form-control ${
                    touched.zipCode && errors.zipCode ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="zipCode"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group">
              <Field
                type="tel"
                name="phone"
                placeholder="Phone"
                className={`form-control ${
                  touched.phone && errors.phone ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="phone"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <Field
                type="email"
                name="email"
                placeholder="Email for order confirmation"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Shipping</h3>
        </div>
        <div className="col text-right">{displayAddressesDropdown()}</div>
      </div>
      {shippingForm()}
    </div>
  );
};

export default ShippingForm;
