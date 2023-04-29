import React from "react";
import Form from "react-bootstrap/Form";
import Layout from "../components/layouts/Layout";
import CustomInput from "../components/customInput/CustomInput";
import { Button } from "react-bootstrap";
const Login = () => {
  const inputField = [
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
  ];
  return (
    <div>
      <Layout>
        <div className=" mt-5 p-4 login">
          <div className="register-form">
            <h6 className="mb-4">Welcome Back !!</h6>
            <h2 className="fw-bold text-center">Login</h2>
            <hr />

            <Form className="mt-4  ">
              {inputField.map((item, i) => {
                return <CustomInput key={i} {...item} />;
              })}
              <div className="d-grid mt-5">
                <Button variant="info" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
