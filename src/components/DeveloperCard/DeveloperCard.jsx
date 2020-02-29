import React from 'react';
import Card from 'react-bootstrap/Card';

const DeveloperCard = ({ nick, name, linkToGitHub, srcImg }) => {
  return (
    <Card className="author-card">
      <div className="author-card__photo-box">
        <Card.Img className="author-card__photo" src={srcImg.publicURL} alt="photo" />
      </div>
      <Card.Body className="author-card__body">
        <Card.Title>{name}</Card.Title>
        <a className="author-card__link-btn" href={linkToGitHub} target="__blank">
          {nick}
        </a>
      </Card.Body>
    </Card>
  );
};

export default DeveloperCard;
