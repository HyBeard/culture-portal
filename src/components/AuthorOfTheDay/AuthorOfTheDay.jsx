import React from 'react';

import AuthorCard from '../AuthorCard';

const AuthorOfTheDay = ({ authorsNodes }) => {
  const authorsCount = authorsNodes.length;
  const randomAuthorIndex = Math.floor(Math.random() * authorsCount);
  const randomAuthorEdge = authorsNodes[randomAuthorIndex];

  return (
    <section className="day-author">
      <AuthorCard authorData={randomAuthorEdge.frontmatter} />
    </section>
  );
};

export default AuthorOfTheDay;
