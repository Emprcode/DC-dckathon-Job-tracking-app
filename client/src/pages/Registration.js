import React from "react";
import Form from "react-bootstrap/Form";
import Layout from "../components/layouts/Layout";
import CustomInput from "../components/customInput/CustomInput";
import { Button } from "react-bootstrap";

const Registration = () => {
  const inputField = [
    {
      name: "fName",
      type: "text",
      label: "First Name",
      required: true,
      placeholder: "John",
    },
    {
      name: "lName",
      type: "text",
      label: "Last Name",
      required: true,
      placeholder: "Doe",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      placeholder: "doe@gmail.com",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      required: true,
      placeholder: "****",
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      required: true,
      placeholder: "****",
    },
  ];
  return (
    <Layout>
      <div className=" mt-4 p-2 register">
        <div className="register-form">
          <h2 className="fw-bold text-center">Registration</h2>
          <hr />

          <Form className="mt-4  ">
            {inputField.map((item, i) => {
              return <CustomInput key={i} {...item} />;
            })}
            <div className="d-grid">
              <Button variant="info" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
