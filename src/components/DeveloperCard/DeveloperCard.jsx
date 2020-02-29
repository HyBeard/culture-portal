import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DeveloperCard = ({ nick, name, linkToGitHub, srcImg }) => {
  return (
    <Card className="developer-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={srcImg.publicURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>@{nick}</Card.Text>
        <a href={linkToGitHub} target="__blank">
          <Button variant="primary">Go to github</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default DeveloperCard;
