import React from 'react';
import Card from 'react-bootstrap/Card';

const TimelineItem = ({ date, children, isRight }) => {
  const orderRight = 3;
  const orderLeft = 1;
  return (
    <div className="timelineItem">
      <Card
        border="secondary"
        style={{
          position: 'relative',
          order: isRight ? orderRight : orderLeft,
          left: isRight ? '-0.5em' : '0.5em',
          zIndex: 10,
        }}
      >
        <Card.Header>{date}</Card.Header>
        <Card.Body>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
      <div className="timelineItem-line" />
      <div style={{ order: isRight ? orderLeft : orderRight }} />
    </div>
  );
};

export default TimelineItem;
