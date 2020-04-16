import React from 'react';
import { Col, Card } from 'react-bootstrap';

import './styles/card.css';

const Character = (props) => {

  const { id, name, image } = props.character;

  return (
    <Col className="mb-4">
      <Card className="card">
        <div className="card-container">
          <img
            className="image"
            src={image}
            alt="Character"
          />
          <div className="middle">
            <div
              className="text"
              onClick={props.handleModal.bind(this, id)}
            >
              Details
            </div>
          </div>
        </div>
        <Card.Body className="card-body">
          <h3>{name}</h3>
        </Card.Body>
      </Card>

    </Col>
  );
};

export default Character;