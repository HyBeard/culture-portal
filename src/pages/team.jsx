import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import DeveloperList from '../components/DeveloperList';

const Team = ({ data, t }) => {
  const usersInfo = data.markdownRemark.frontmatter.team;
  console.log(usersInfo);
  return (
    <Layout>
      <h2>{t('ourTeam')}</h2>
      <DeveloperList data={usersInfo} />
    </Layout>
  );
};

export default withTranslation()(Team);

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { contentLang: { eq: "ru" }, dataKey: { eq: "teamInfo" } }) {
      id
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
