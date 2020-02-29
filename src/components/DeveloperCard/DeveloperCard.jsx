import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'gatsby';

const DeveloperCard = ({ nick, name, linkToGitHub, urlImg }) => {
  return (
    <Card className="author-card">
      <div className="author-card__photo-box">
        <Card.Img className="author-card__photo" src={urlImg} />
      </div>
      <Card.Body className="author-card__body">
        <Card.Title>{name}</Card.Title>
        <Link className="author-card__link-btn" to={linkToGitHub}>
          {nick}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DeveloperCard;
