import React from 'react';
import {
  Modal,
  Button,
  Card,
  Row,
  Col,
  ListGroup,
  Container,
  Badge
} from 'react-bootstrap';

const CharacterModal = props => {

  const { show, handleClose } = props;

  const { name, status, species, type, gender, image } = props.character;

  return (
    <React.Fragment>
      <Modal size='md' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Character Information </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Card >
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <ListGroup>
                  <ListGroup.Item active variant="primary">
                    <Badge variant="light">
                      Status: {status}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item active variant="primary">
                    <Badge variant="light">
                      Type: {type}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item active variant="primary">
                    <Badge variant="light">
                      Species: {species}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item active variant="primary">
                    <Badge variant="light">
                      Gender: {gender}
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );

}

export default CharacterModal;