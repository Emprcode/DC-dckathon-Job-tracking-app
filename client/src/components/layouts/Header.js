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
                <Link to="/dashboard" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket">Profile</i>
                </Link>
                <Link to="/logout" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket">Logout</i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  <i className="fa-solid fa-user">Login</i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket">Register</i>
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
