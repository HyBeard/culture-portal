import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Link from '../Link';
import ModalVideo from '../ModalVideo';

const AuthorCard = ({ authorData, isAuthorPage, t }) => {
  const {
    name,
    path,
    overview,
    deathDate,
    birthDate,
    youtube,
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
        {isAuthorPage ? (
          <ModalVideo className="author-card__link-btn" videoId={youtube} start={0} />
        ) : (
          <Button className="author-card__link-btn">
            <Link to={path}>{t('artistCardReadMore')}</Link>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

AuthorCard.defaultProps = {
  isAuthorPage: false,
};

AuthorCard.propTypes = {
  isAuthorPage: PropTypes.bool,
};

export default withTranslation()(AuthorCard);
