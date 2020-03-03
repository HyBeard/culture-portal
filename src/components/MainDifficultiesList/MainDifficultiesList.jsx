import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const MainDifficultiesList = ({ difficultiesList }) => {
  return (
    <section className="main-difficulties-list">
      <ListGroup>
        {difficultiesList.map((item, i) => {
          const key = `key: ${i}`;
          return <ListGroup.Item key={key}>{item}</ListGroup.Item>;
        })}
      </ListGroup>
    </section>
  );
};

export default MainDifficultiesList;
