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
      <div className="content-wrap">
        <h2 style={{ marginTop: '30px', textAlign: 'center' }}>{t('worklogTitle')}</h2>
        <section className="section-functional-table">
          <FunctionalTableList data={usersInfo} />
        </section>
        <section className="section-main-difficulties">
          <h2>{t('mainDifficultiesTitle')}</h2>
          <MainDifficultiesList difficultiesList={mainDifficult} />
        </section>
        <section className="section-evaluation" dangerouslySetInnerHTML={{ __html: mdEvalution }} />
      </div>
    </Layout>
  );
};

export default withTranslation()(Worklog);

export const pageQuery = graphql`
  query($pageLang: String!) {
    markdownRemark(frontmatter: { contentLang: { eq: $pageLang }, dataKey: { eq: "teamInfo" } }) {
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
