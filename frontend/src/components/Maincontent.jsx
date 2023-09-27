import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function MainContent() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Welcome to AnimeStream</h1>
          <h2 className="text-center mb-3">"Stream Anime Anytime, Anywhere"</h2>
        </Col>
        <Col md={12} className="text-center">
          <Button variant="primary" className="btn-block mb-3">
            Login
          </Button>
          <Button variant="primary" className="btn-block mb-3">
            Create Account
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
