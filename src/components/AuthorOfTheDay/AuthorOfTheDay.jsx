import React from 'react';

import AuthorCard from '../AuthorCard';

const AuthorOfTheDay = ({ authorsEdges }) => {
  const authorsCount = authorsEdges.length;
  const randomAuthorIndex = Math.floor(Math.random() * authorsCount);
  const randomAuthorEdge = authorsEdges[randomAuthorIndex];

  return (
    <section className="day-author">
      <AuthorCard authorData={randomAuthorEdge.frontmatter} />;
    </section>
  );
};

export default AuthorOfTheDay;
