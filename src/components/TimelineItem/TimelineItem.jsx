import React from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const TimelineItem = ({ date, children }) => {
  return (
    <div className="timelineItem">
      <Alert variant="primary" className="timelineItem-alert">
        {date}
      </Alert>
      <Card border="secondary">
        <Card.Header>{date}</Card.Header>
        <Card.Body>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TimelineItem;
