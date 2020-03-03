import React from 'react';

import FunctionalTable from '../FunctionalTable';

const FunctionalTableList = ({ data }) => {
  return (
    <section className="functional-table-list">
      {data.map(({ worklog, name }, i) => {
        const key = `key: ${i}`;
        return <FunctionalTable worklog={worklog} name={name} key={key} />;
      })}
    </section>
  );
};

export default FunctionalTableList;
