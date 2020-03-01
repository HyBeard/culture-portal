import React from 'react';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import FunctionalTable from '../components/FunctionalTable';

const Worklog = ({ t }) => {
  return (
    <Layout>
      <h2>{t('worklogTitle')}</h2>
      <h3>Таблица</h3>
      <FunctionalTable />
    </Layout>
  );
};

export default withTranslation()(Worklog);
