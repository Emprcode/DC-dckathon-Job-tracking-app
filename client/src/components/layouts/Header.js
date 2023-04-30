import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [userId, setUserID] = useState({});
  const useInfo = JSON.parse(sessionStorage.getItem("loginId"));
  // console.log();
  // setUserID(useInfo);

  const handleOnLogout = (e) => {
    JSON.parse(sessionStorage.removeItem("loginId"));
  };

  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#home" className="fw-bolder">
          <Link to="/dashboard" className="nav-link">
            JAT.
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {useInfo?._id ? (
              <>
                <Link to="/joblist" className="nav-link">
                  <i class="fa-sharp fa-solid fa-list"></i> Joblist
                </Link>
                <Link to="/mockProfile" className="nav-link">
                  <i class="fa-solid fa-user"></i> Profile
                </Link>
                <Link to="/" className="nav-link" onClick={handleOnLogout}>
                  <i class="fa-solid fa-right-from-bracket"></i> Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  <i className="fa-solid fa-user"></i> Login
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket"></i> Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
