import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Pagination = (props) => {

  const showPrevButton = props.currentPage > 1;

  return (
    <Row className="mb-2">
      <Col>
        <Button
          variant="outline-success"
          className="float-right"
          onClick={props.handlePagination.bind(this, true)}
        >
          Next Page
        </Button>
        {showPrevButton &&
          <Button
            variant="outline-success mr-2"
            className="float-right"
            onClick={props.handlePagination.bind(this, false)}
          >
            Prev Page
          </Button>
        }
      </Col>
    </Row>
  );
};

export default Pagination;