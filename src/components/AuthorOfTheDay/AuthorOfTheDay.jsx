import React from 'react';
import { withTranslation } from 'react-i18next';

import AuthorCard from '../AuthorCard';

const AuthorOfTheDay = ({ authorsNodes, t }) => {
  const authorsCount = authorsNodes.length;
  const randomAuthorIndex = Math.floor(Math.random() * authorsCount);
  const randomAuthorEdge = authorsNodes[randomAuthorIndex];

  return (
    <section className="day-author">
      <h2 className="day-author__title">{t('AuthorOfTheDay')}</h2>
      <AuthorCard authorData={randomAuthorEdge.frontmatter} />
    </section>
  );
};

export default withTranslation()(AuthorOfTheDay);
