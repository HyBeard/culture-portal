import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import DeveloperCard from '../components/DeveloperCard';

const Team = () => {
  return (
    <Layout>
      <h2>Team</h2>
      <DeveloperCard />
    </Layout>
  );
};

export default Team;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          path
          dataKey
          contentLang
          name
          overview
          birthDate
          deathDate
          photo {
            publicURL
          }
        }
        html
      }
    }
  }
`;
