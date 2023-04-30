import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useLocation } from "react-router";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { addComments, getComments } from "../utils/AxiosHelper";
import { toast } from "react-toastify";

export const SingleJob = () => {
  const useInfo = JSON.parse(sessionStorage.getItem("loginId"));
  const location = useLocation();
  const idJob = location.pathname.split("/")[2];
  const [singleJob, setSinglePost] = useState({});
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  //   console.log(idJob);
  console.log(commentList);
  useEffect(() => {
    const getSingleJob = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/job/" + idJob
      );
      //   console.log(data.result);
      setSinglePost(data.result);
      // console.log(singleJob);
      fetchComments();
    };

    getSingleJob();
  }, [comment]);

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const msgObj = {
      idJob,
      comment,
      sender: useInfo.fName,
    };
    console.log(msgObj);
    const { status, message } = await addComments(msgObj);
    toast[status](message);
    setComment("");
  };

  const fetchComments = async () => {
    console.log(idJob);
    const { result } = await getComments(idJob);
    setCommentList(result);
    console.log(result);
  };
  return (
    <Layout>
      <div className="p-3">
        {/* <h2 className=" p-4 text-center"> </h2> */}
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              <h2>{singleJob.title}</h2>
            </Card.Title>
            <p>
              <i class="fa-solid fa-location-dot fa-bounce"></i> Australia
            </p>
            <div className="mb-3">
              <i class="fa-solid fa-briefcase"></i> Full-time
            </div>
            <div className="mb-3">
              <i class="fa-solid fa-person"></i> 50-60 People
            </div>
            <div>
              <i class="fa-solid fa-list"></i> Skills: Software Development,
              JavaScript, React, Node, +8 more
            </div>
            <Card.Text className="m-5">
              <h5> About the Job</h5>
              <p> {singleJob.jd}</p>
              <Link to={singleJob.link} className="nav-link" target="_blank">
                <Button className="fw-bold"> Job Link</Button>
              </Link>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <Row>
        <Col className="p-4">
          <Form onSubmit={handleOnSubmit}>
            <Form.Label> Comments</Form.Label>
            <Form.Control
              as="textarea"
              row="5"
              name="comment"
              value={comment}
              onChange={handleOnChange}
              required
            />
            <div className="p-3 text-end">
              <Button variant="info" type="submit">
                {" "}
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {commentList.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.comment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  );
};
