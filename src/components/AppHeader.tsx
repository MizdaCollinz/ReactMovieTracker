import React from "react";
import { Col, Navbar, NavbarBrand, Row } from "react-bootstrap";
import { Film } from "../icons";

// font-size: calc(10px + 2vmin);

export const AppHeader: React.FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand href="#home">
        <Row>
          <Col className="pr-0">
            <Film height={42} width={42} fill="white" />
          </Col>
          <Col className="font-weight-bold">
            <h1>Movie Tracker</h1>
          </Col>
        </Row>
      </NavbarBrand>
    </Navbar>
  );
};
