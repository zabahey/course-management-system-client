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
              className="course mb-lg-4 mb-sm-0"
              onClick={selectSource.bind(null, course._id)}
            >
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <Card.Title>
                  <div className="mb-3" style={{ minHeight: '40px' }}>
                    {course.name}
                  </div>
                  {course.instructor ? (
                    <div
                      className="instructor small"
                      style={{ fontWeight: '300' }}
                    >
                      {course.instructor.firstName} {course.instructor.lastName}
                    </div>
                  ) : null}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
