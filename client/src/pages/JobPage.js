import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

export const JobPage = () => {
  const [joblist, setjobList] = useState([]);
  return (
    <Layout>
      <div className="container">
        <p className="text-center">Job List</p>

        <div className="filter text-center">
          <label for="cars">Choose a Job Status to be displayed: </label>
          <br />

          {/* ALL */}
          <select name="cars" id="cars">
            <option value="volvo">All</option>
            <option value="saab">Applied</option>
            <option value="mercedes">Pending</option>
            <option value="audi">Declined</option>
            <option value="potential">Want to Apply</option>
          </select>
        </div>

        <button>Add Job</button>
        {/* <button></button> */}

        {/*ALL  */}

        <p>Job Status : All</p>
        <ul>
          <Link to="/singleJob">
            <li>Job Name</li>
          </Link>
          <li>Job 3</li>
          <li>Job 4</li>
          <li>Job 5</li>
        </ul>
      </div>
    </Layout>
  );
};
