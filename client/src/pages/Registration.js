import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Layout from "../components/layouts/Layout";
import CustomInput from "../components/customInput/CustomInput";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/AxiosHelper";
import { toast } from "react-toastify";

const Registration = () => {
  const [form, setForm] = useState({});
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await createUser(form);
    toast[status](message)
    console.log(form);
    navigation("/");
  };

  return (
    <Layout>
      <div className=" mt-4 p-2 register">
        <div className="register-form">
          <h2 className="fw-bold text-center">Registration</h2>
          <hr />

          <Form className="mt-4" onSubmit={handleSubmit}>
            {inputField.map((item, i) => {
              return <CustomInput key={i} {...item} onChange={handleChange} />;
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
