import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useLocation } from "react-router";
import axios from "axios";

export const SingleJob = () => {
  const location = useLocation();
  const idJob = location.pathname.split("/")[2];
  const [singleJob, setSinglePost] = useState({});
  //   console.log(idJob);

  useEffect(() => {
    const getSingleJob = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/job/" + idJob
      );
      //   console.log(data.result);
      setSinglePost(data.result);
      console.log(singleJob);
    };

    getSingleJob();
  }, []);
  return (
    <Layout>
      <div className="container">
        <label htmlFor="">Job Title: </label>

        <b>{singleJob.title}</b>
        <br />
        <label htmlFor="">Update</label>
      </div>
    </Layout>
  );
};
