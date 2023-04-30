import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Layout from "../components/layouts/Layout";
import CustomInput from "../components/customInput/CustomInput";
import { Button } from "react-bootstrap";
import { UserLogin } from "./user/UserAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../utils/AxiosHelper";
const Login = () => {
  const [form, setForm] = useState({});
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
  const navigation = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message, result } = await loginUser(form);
    toast[status](message);
    sessionStorage.setItem("loginId", JSON.stringify(result));
    console.log(form);
    status === "success" && navigation("/dashboard");
  };

  return (
    <div>
      <Layout>
        <div className=" mt-5 p-4 login">
          <div className="register-form">
            <h6 className="mb-4">Welcome Back !!</h6>
            <h2 className="fw-bold text-center">Login</h2>
            <hr />

            <Form className="mt-4  " onSubmit={handleOnSubmit}>
              {inputField.map((item, i) => {
                return (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                );
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
