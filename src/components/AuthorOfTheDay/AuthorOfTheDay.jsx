import React from 'react';

const AuthorOfTheDay = ({ writersEdges, children }) => {
  // TODO: add a rule to choose the author of the day
  const [fakeHeader, fakeFooter, fakeImg] = children;
  const randomAuthorEdge = writersEdges[0];
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
      {fakeHeader}
      {fakeFooter}
      {fakeImg}
    </div>
  );
};

export default AuthorOfTheDay;
