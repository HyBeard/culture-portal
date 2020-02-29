import React from 'react';
import Card from 'react-bootstrap/Card';

const TimelineItem = ({ date, text }) => {
  return (
    <Card border="secondary" style={{ width: '18rem' }}>
      <Card.Header>{date}</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TimelineItem;
