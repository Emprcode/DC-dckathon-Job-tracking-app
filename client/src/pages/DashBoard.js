import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { getAllJob } from "../utils/AxiosHelper";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const [allJob, setAllJob] = useState([]);

  const useInfo = JSON.parse(sessionStorage.getItem("loginId"));

  useEffect(() => {
    const callJobAxios = async () => {
      const { result } = await getAllJob();
      console.log(result);
      setAllJob(result);
    };
    callJobAxios();
  }, []);

  const approvedList = allJob.filter((item) => item.status === "applied");
  const pendingList = allJob.filter((item) => item.status === "pending");
  const rejectedList = allJob.filter((item) => item.status === "rejected");
  const wantToApplyList = allJob.filter(
    (item) => item.status === "wantToApply"
  );

  console.log(approvedList.length);

  return (
    <Layout>
      <Container className="p-4 mt-5 ">
        <div className="d-flex justify-content-between mb-5">
          <div className="fw-bold">
            {" "}
            <i className="fa-solid fa-house"></i> Dashboard
          </div>
          <div>
            Welcome <b> {useInfo.fName}</b>, to your Job Portal{" "}
            <i className="fa-solid fa-circle-exclamation"></i>
          </div>
        </div>
        <Row md={12} className="  p-4 gap-5 ">
          <Col md={5} className="card3 p-3 rounded ">
            <Link className="nav-link" to="/jobList/applied">
              <div>
                <div className="d-flex justify-content-around">
                  <p className="p-2">
                    Want To Apply <i class="fa-solid fa-chart-mixed"></i>
                  </p>
                </div>

                <h4 className="fw-bold"> {wantToApplyList.length}</h4>
                <p className="p-3">Increased by 20%</p>
              </div>
            </Link>
          </Col>

          <Col md={6} className="card1 p-3 rounded ">
            <Link className="nav-link" to="/jobList/applied">
              <div>
                <div className="d-flex justify-content-around">
                  <p className="p-2">
                    Applied Jobs <i class="fa-solid fa-chart-mixed"></i>
                  </p>
                </div>

                <h4 className="fw-bold">{approvedList.length}</h4>
                <p className="p-3">Increased by 40%</p>
              </div>
            </Link>
          </Col>
        </Row>

        <Row className="  p-4 gap-5 ">
          <Col md={5} className="card2 p-3 rounded ">
            <Link className="nav-link" to="/jobList/pending">
              <div>
                <div className="d-flex justify-content-around">
                  <p className="p-2">
                    Pending Jobs <i class="fa-solid fa-chart-mixed"></i>
                  </p>
                </div>

                <h4 className="fw-bold">{pendingList.length}</h4>
                <p className="p-3">Decreased by 10%</p>
              </div>
            </Link>
          </Col>
          <Col md={6} className="card3 p-3 rounded ">
            <Link className="nav-link" to="/jobList/pending">
              <div>
                <div className="d-flex justify-content-around">
                  <p className="p-2">
                    Rejected <i class="fa-solid fa-chart-mixed"></i>
                  </p>
                </div>

                <h4 className="fw-bold"> {rejectedList.length}</h4>
                <p className="p-3">Increased by 20%</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DashBoard;
