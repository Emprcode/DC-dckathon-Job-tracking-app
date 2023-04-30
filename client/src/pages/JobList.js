import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import Table from "react-bootstrap/Table";
import { Button, Form } from "react-bootstrap";
import { deletedJob, getAllJob, updateJobStatus } from "../utils/AxiosHelper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
export const JobList = () => {
  const [singleUpdatedData, setSingleUpdatedData] = useState({});
  const [alljobList, setAllJobList] = useState([]);

  const location = useLocation();
  const statusFromDashboard = location.pathname.split("/")[2];

  console.log(statusFromDashboard);
  const callJobAxios = async () => {
    const { result } = await getAllJob();
    console.log(result);
    setAllJobList(result);
  };

  useEffect(() => {
    callJobAxios();
  }, [singleUpdatedData]);

  const handleChange = async (event) => {
    const tobeupdated = event.target.value.split("|");
    const [_id, status] = tobeupdated;

    const obj = { _id, status };

    const result = await updateJobStatus(obj);
    setSingleUpdatedData(result);
    console.log(result);
  };

  const approvedList = alljobList.filter((item) => item.status === "applied");
  const pendingList = alljobList.filter((item) => item.status === "pending");
  const rejectedList = alljobList.filter((item) => item.status === "rejected");

  const wantToApplyList = alljobList.filter(
    (item) => item.status === "wantToApply"
  );

  // delete the job

  const handleDelteJob = async (id) => {
    // console.log({ _id });

    if (window.confirm("Are you sure you want to delete the job?")) {
      const { status, message } = await deletedJob({ _id: id });
      status && callJobAxios();

      toast[status](message);
    }

    // console.log(result);
  };
  return (
    <Layout>
      <div className="jobAddField">
        <p className=""></p>
        <h1 className="text-center">Job List</h1>
        <Link to="/addjob" className="nav-link">
          <Button>Add Job</Button>
        </Link>
      </div>

      <div className="tablecontainer">
        <div className="alltables d-flex gap-2 ">
          <div className="wantToapply card1 rounded p-3">
            <h3 className="text-center">Want to apply </h3>
            <Table striped bordered hover className="table1">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Job Title</th>

                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {wantToApplyList.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <Link to={`/singleJob/${item._id}`} className="nav-link">
                      <td style={{ wordWrap: "break-word" }}>{item.title}</td>
                    </Link>

                    <td>
                      <Form.Select onChange={handleChange}>
                        <option value={item._id + "|wantToApply"}>
                          Want to Apply
                        </option>
                        <option value={item._id + "|applied"}>Applied</option>
                        <option value={item._id + "|pending"}>Pending</option>
                      </Form.Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="processing card2 rounded p-3">
            {" "}
            <h3 className="text-center">Pending jobs</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Job Title</th>

                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingList.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <Link to={`/singleJob/${item._id}`} className="nav-link">
                      <td>{item.title}</td>
                    </Link>

                    <td>
                      <Form.Select onChange={handleChange}>
                        <option value="option1">{item.status}</option>
                        <option value={item._id + "|applied"}>Applied</option>
                        {/* <option value="rejected">rejected</option> */}
                      </Form.Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="applied card3 rounded p-3">
            {" "}
            <h3 className="text-center">Applied Jobs</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Job Title</th>

                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {approvedList.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <Link to={`/singleJob/${item._id}`} className="nav-link">
                      <td>{item.title}</td>
                    </Link>

                    <td>
                      <Form.Select onChange={handleChange}>
                        <option value="option1">{item.status}</option>
                        {/* <option value={item._id + "|pending"}>Pending</option> */}
                        <option value={item._id + "|rejected"}>Rejected</option>
                      </Form.Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="rejected card4 rounded p-3">
            {" "}
            <h3 className="text-center">Rejected Jobs</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Job Title</th>

                  <th>Delete Job</th>
                </tr>
              </thead>
              <tbody>
                {rejectedList.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <Link to={`/singleJob/${item._id}`} className="nav-link">
                      <td>{item.title}</td>
                    </Link>

                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelteJob(item._id)}
                      >
                        Delete
                      </Button>
                      {/* <Form.Select onChange={handleChange}>
                        <option value="option1">{item.status}</option>
                       
                      </Form.Select> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
