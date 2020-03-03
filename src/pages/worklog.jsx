import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import FunctionalTableList from '../components/FunctionalTableList';
import MainDifficultiesList from '../components/MainDifficultiesList';

const Worklog = ({ data, t }) => {
  const usersInfo = data.markdownRemark.frontmatter.team;
  const mainDifficult = data.markdownRemark.frontmatter.mainDifficulties;
  const mdEvalution = data.markdownRemark.html;

  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>{t('worklogTitle')}</h2>
      <section className="section-functional-table">
        <FunctionalTableList data={usersInfo} />
      </section>
      <section className="section-main-difficulties">
        <h2>{t('mainDifficultiesTitle')}</h2>
        <MainDifficultiesList difficultiesList={mainDifficult} />
      </section>
      <section
        className="section-evaluation"
        dangerouslySetInnerHTML={{ __html: mdEvalution }}
       />
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
        mainDifficulties
      }
      html
    }
  }
`;
