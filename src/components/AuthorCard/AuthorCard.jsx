import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withTranslation } from 'react-i18next';

import Link from '../Link';

const AuthorCard = ({ authorData, t }) => {
  const {
    name,
    path,
    overview,
    deathDate,
    birthDate,
    photo: { publicURL },
  } = authorData;

  const yearsLife = !deathDate ? birthDate : `${birthDate} - ${deathDate}`;

  return (
    <Card className="author-card">
      <div className="author-card__photo-box">
        <Card.Img className="author-card__photo" src={publicURL} />
      </div>
      <Card.Body className="author-card__body">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{yearsLife}</Card.Text>
        <Card.Text className="author-card__overview">{overview}</Card.Text>
        <Link className="author-card__link-btn" to={path}>
          <Button>{t('artistCardReadMore')}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default withTranslation()(AuthorCard);
