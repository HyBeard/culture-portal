import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby';
import { withTranslation } from 'react-i18next';

const AuthorCard = ({ authorData, t }) => {
  const {
    name,
    path,
    description,
    deathDate,
    birthDate,
    photo: { publicURL },
  } = authorData;

  const yearsLife = !deathDate ? birthDate : `${birthDate} - ${deathDate}`;

  return (
    <Card>
      <div>
        <Card.Img src={publicURL} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{yearsLife}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Link to={path}>
          <Button>{t('artistCardReadMore')}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default withTranslation()(AuthorCard);
