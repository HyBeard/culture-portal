import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import FunctionalTableList from '../components/FunctionalTableList';
import MainDifficultiesList from '../components/MainDifficultiesList';

const Worklog = ({ data, t }) => {
  const usersInfo = data.markdownRemark.frontmatter.team;

  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>{t('worklogTitle')}</h2>
      <section className="section-functional-table">
        <FunctionalTableList data={usersInfo} />
      </section>
      <section className="section-main-difficulties">
        <h3>{t('mainDifficultiesTitle')}</h3>
        <MainDifficultiesList />
      </section>
    </Layout>
  );
};

export default withTranslation()(Worklog);

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { contentLang: { eq: "ru" }, dataKey: { eq: "teamInfo" } }) {
      frontmatter {
        team {
          worklog {
            feature
            spentTime
          }
          name
        }
      }
    }
  }
`;
