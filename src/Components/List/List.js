import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const List = ({ quiz }) => {
  const { name, logo } = quiz;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default List;
