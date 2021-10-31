import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

export default function CourseDetailItem({ course }) {
  console.log(course);
  return (
    <Row className="mt-5">
      <Col sm={12}>
        <Card className="mb-lg-4 mb-sm-0">
          <Card.Img variant="top" src={course.image} />
          <Card.Body>
            <Card.Title>
              <div style={{ minHeight: '40px' }}>{course.name}</div>
              {course.instructor ? (
                <div className="instructor small" style={{ fontWeight: '300' }}>
                  {course.instructor.firstName} {course.instructor.lastName}
                </div>
              ) : null}
            </Card.Title>
            <Card.Text>{course.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
