import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const Team = () => {
  return (
    <Layout>
      <h2>Team</h2>
    </Layout>
  );
};

export default Team;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { dataKey: { eq: "writerData" } } }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            name
            video
            works {
              date
              work
            }
            birthDate
            deathDate
            photo {
              absolutePath
            }
          }
        }
      }
    }
  }
`;
