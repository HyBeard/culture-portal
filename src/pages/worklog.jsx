import React from 'react';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import FunctionalTable from '../components/FunctionalTable';
import MainDifficultiesList from '../components/MainDifficultiesList';

const Worklog = ({ t }) => {
  return (
    <Layout>
      <h2>{t('worklogTitle')}</h2>
      <h3>Таблица</h3>
      <FunctionalTable />
      <h3>Главные трудности при разработке</h3>
      <MainDifficultiesList />
    </Layout>
  );
};

export default withTranslation()(Worklog);
