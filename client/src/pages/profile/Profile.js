import React from "react";
import Layout from "../../components/layouts/Layout";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import { Button } from "react-bootstrap";

const Profile = () => {
  const inputField = [
    {
      name: "skills",
      type: "text",
      label: "Skills",
      required: true,
      placeholder: "JavaScript",
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
      <Container className="mt-5 ">
        <Row className="profileTop">
          <Col className="img" xs={6} md={4}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
              rounded
            />
          </Col>
          <Col xs={6} md={4} className="ms-auto">
            <ul>
              <li>Name:</li>
              <li>Email:</li>
              <li>Bio:</li>
              <li>LinkedIn:</li>
            </ul>
          </Col>
          {/* <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col> */}
        </Row>

        <div className="profileDesc">
          <Form className="mt-4">
            {inputField.map((item, i) => {
              return <CustomInput key={i} {...item} />;
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
