import React from 'react';
import { withTranslation } from 'react-i18next';

import Table from 'react-bootstrap/Table';

const FunctionalTable = ({ worklog, name, t }) => {
  return (
    <section className="worklog-table">
      <h4>{name}</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>{t('timeSpent')}</th>
            <th>{t('feature')}</th>
          </tr>
        </thead>
        <tbody>
          {worklog.map(({ spentTime, feature }, i) => {
            const key = `key: ${i}`;
            return (
              <tr key={key}>
                <td>{spentTime}</td>
                <td>{feature}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default withTranslation()(FunctionalTable);
