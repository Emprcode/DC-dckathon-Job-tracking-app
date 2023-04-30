import React from "react";
import Layout from "../components/layouts/Layout";
import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Profile = () => {
  return (
    <Layout>
      <div className=" mt-4 p-2 register">
        <div className="register-form">
          <h2 className="fw-bold text-center">Registration</h2>
          <hr />

          <Form className="mt-4">
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
