import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Button, Card, Col, Row } from "react-bootstrap";
import { getProfile } from "../../utils/AxiosHelper";
import { Link } from "react-router-dom";

export const MockProfile = () => {
  const userObj = JSON.parse(sessionStorage.getItem("loginId"));
  //   console.log(userId);
  const [profiledetails, setProfileDetails] = useState([]);
  useEffect(() => {
    callAxios();
  }, []);

  const callAxios = async () => {
    const { result } = await getProfile();
    console.log(result);
    setProfileDetails(result);
  };
  return (
    <Layout>
      <div className="container mt-5">
        <Row className="profileTop mb-5">
          <Col xs={6} md={4} className="firstcol">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
              rounded
            />

            <div className="buttonSection d-flex gap-2 ms-auto  edit">
              <Link to="/profile">
                <Button>Update Profile</Button>
              </Link>

              <Link>
                <Button className="">Generate Resume</Button>
              </Link>
            </div>
          </Col>

          <Col xs={6} md={4} className=" profileDetails">
            <ul>
              <li>Name: {userObj.fName} </li>
              <li>Email: {userObj.email} </li>
              <li>Experience: {profiledetails.experience}</li>
              <li>Education: {profiledetails.education}</li>
              <li>Skills: {profiledetails.skills}</li>
            </ul>

            <div className="cardStack">
              <div className="divcar1">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Job Applied</Card.Title>
                    <Card.Text>Stats of the job applied</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="divcar2">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Potential Job </Card.Title>
                    <Card.Text>Stats of the potential job</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          {/* <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col> */}
        </Row>
      </div>
    </Layout>
  );
};
