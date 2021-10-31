import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, Card } from 'react-bootstrap';
import './CourseList.css';

export default function CourseList({ courses }) {
  const history = useHistory();
  const selectSource = (id) => {
    history.push(`/courses/${id}`);
  };
  return (
    <Row className="mt-5">
      {courses.map((course) => {
        return (
          <Col key={course._id} lg={4} sm={12}>
            <Card
              className="mb-lg-4 mb-sm-0"
              onClick={selectSource.bind(null, course._id)}
            >
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <Card.Title style={{ minHeight: '40px' }}>
                  {course.name}
                </Card.Title>
                <Card.Text>
                  {course.instructor ? (
                    <span className="instructor small">
                      {course.instructor.firstName} {course.instructor.lastName}
                    </span>
                  ) : null}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
