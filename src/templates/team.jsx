import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import DeveloperList from '../components/DeveloperList';

const Team = ({ data, t }) => {
  const usersInfo = data.markdownRemark.frontmatter.team;

  return (
    <Layout>
      <div className="content-wrap">
        <h2 style={{ textAlign: 'center', marginTop: '1em' }}>{t('ourTeam')}</h2>
        <DeveloperList data={usersInfo} />
      </div>
    </Layout>
  );
};

export default withTranslation()(Team);

export const pageQuery = graphql`
  query($pageLang: String!) {
    markdownRemark(frontmatter: { contentLang: { eq: $pageLang }, dataKey: { eq: "teamInfo" } }) {
      frontmatter {
        team {
          nick
          name
          linkToGitHub
          srcImg {
            publicURL
          }
        }
      }
    }
  }
`;
