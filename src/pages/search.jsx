import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const Search = ({ data /* location */ }) => {
  console.log(data);
  return (
    <Layout>
      <Link to="1">1</Link>
      <h2>this is search page</h2>
    </Layout>
  );
};

export default Search;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "writer-data" } } }) {
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
            works
            yearsOfLife
            photo {
              absolutePath
            }
          }
        }
      }
    }
  }
`;
