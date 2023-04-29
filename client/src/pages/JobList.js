import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import { getAllJob } from "../utils/AxiosHelper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export const JobList = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [alljobList, setAllJobList] = useState([]);

  const location = useLocation();
  const statusFromDashboard = location.pathname.split("/")[2];
  // location ? setSelectedOption(statusFromDashboard) : setSelectedOption("");
  // location && setSelectedOption(statusFromDashboard);
  console.log(statusFromDashboard);

  useEffect(() => {
    const callJobAxios = async () => {
      const { result } = await getAllJob();
      console.log(result);
      setAllJobList(result);
    };
    callJobAxios();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption);
  // filter for dropdown
  const filteredJobList = alljobList.filter(
    (item) => item.status === selectedOption
  );

  // filter from dashboard
  // const dashboardFilteredJobList = alljobList.filter(
  //   (item) => item.status === statusFromDashboard
  // );

  // console.log(filteredJobList);

  const jobList = selectedOption === "" ? alljobList : filteredJobList;
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center p-4">Job List</h1>
        <Form.Select
          className="mb-4"
          name="status"
          // value={form.status}
          onChange={handleChange}
          label="Choose the Job Status"
          required>
          <option value="">All Jobs</option>
          <option value="applied">Applied</option>
          <option value="wantToApply">Want to Apply</option>
          {/* <option value="3">Three</option> */}
        </Form.Select>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobList.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <Link to={`/singleJob/${item._id}`} className="nav-link">
                  <td>{item.title}</td>
                </Link>
                <td>{item.link}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};
