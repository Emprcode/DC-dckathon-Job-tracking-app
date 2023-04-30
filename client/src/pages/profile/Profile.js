import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addProfile } from "../../utils/AxiosHelper";

const Profile = () => {
  const userId = JSON.parse(sessionStorage.getItem("loginId"))._id;
  console.log(userId);
  const [form, setForm] = useState({});
  const inputField = [
    // {
    //   name: "fName",
    //   type: "text",
    //   label: "First Name",
    //   required: true,
    //   placeholder: "John",
    // },
    // {
    //   name: "lName",
    //   type: "text",
    //   label: "Last Name",
    //   required: true,
    //   placeholder: "Doe",
    // },
    {
      name: "skills",
      type: "text",
      label: "Skills",
      required: true,
      placeholder: "React",
    },
    {
      name: "experience",
      type: "text",
      label: "Experience",
      required: true,
      placeholder: "JavaScript, React",
    },
    {
      name: "education",
      type: "text",
      label: "Education",
      required: true,
      placeholder: "Bachelor's of Computer Science",
    },
    {
      name: "resume",
      type: "file",
      label: "Resume",
      required: true,
      placeholder: "Resume",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // console.log(form);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
    const { status, message, result } = await addProfile(form);
    console.log(message);
    toast[status](message);
    // sessionStorage.setItem("loginId", JSON.stringify(result));
    console.log(form);
    // status === "success" && navigation("/dashboard");
  };
  return (
    <Layout>
      <Container className="mt-5 ">
        <div className="profileDesc">
          <Form className="mt-4" onSubmit={handleOnSubmit}>
            {inputField.map((item, i) => {
              return (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              );
            })}
            <div className="d-grid">
              <Button variant="info" type="submit">
                Update
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default Profile;
