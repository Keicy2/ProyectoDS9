import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ActivitySummary from './ActivitySummary';
import ProductManagement from './ProductManagement';
import UserDataTable from './UserDataTable';



const AdminDashboard = () => {
  return (
    <Container fluid className="App">
      <Row className="mb-4">
        <Col>
          <h1>Admin Dashboard</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <ActivitySummary />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>Clientes</h2>
          <UserDataTable />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;