import React from 'react';

const AuthorOfTheDay = ({ writersEdges }) => {
  // TODO: add a rule to choose the author of the day
  const authorCount = writersEdges.length;
  const randomIndex = Math.floor(Math.random() * (authorCount + 1));
  const randomAuthorEdge = writersEdges[randomIndex];
  const {
    node: {
      frontmatter: {
        name,
        yearsOfLife,
        photo: { publicURL },
      },
    },
  } = randomAuthorEdge;

  return (
    <div
      style={{
        border: '2px solid gold',
      }}
    >
      <p>{name}</p>
      <p>{yearsOfLife}</p>
      <img src={publicURL} alt="" />
    </div>
  );
};

export default AuthorOfTheDay;
