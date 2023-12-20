import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="my-header py-4">
      <Navbar expand="lg">
        <Container fluid>
          <Link
            to="/"
            className="text-decoration-none text-black"
            aria-label="JobSpider"
            title="JobSpider"
          >
            <h1 className="fw-bold">JobSpider</h1>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <span className="me-3 fw-bold">Home</span>
              </NavLink>
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <span className="me-3 fw-bold">Statistics</span>
              </NavLink>
              <NavLink
                to="/appliedJobs"
                aria-label="Applied Jobs"
                title="Applied Jobs"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <span className="me-3 fw-bold">Applied Jobs</span>
              </NavLink>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <span className="me-3 fw-bold">Blog</span>
              </NavLink>
            </Nav>

            <Button variant="primary">Start Applying</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
