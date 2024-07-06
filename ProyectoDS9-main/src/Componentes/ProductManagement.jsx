import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ProductManagement = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$50.00' },
    { id: 2, name: 'Product B', price: '$30.00' },
    { id: 3, name: 'Product C', price: '$20.00' },
  ];

  return (
    <div>
      <h4>Product Management</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="warning" size="sm" className="mr-2">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success">Add New Product</Button>
    </div>
  );
};

export default ProductManagement;