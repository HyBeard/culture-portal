import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const Search = ({ data }) => {
  const authors = data.allMarkdownRemark.edges.map((dataObj) => {
    const { name, birthDate, deathDate } = dataObj.node.frontmatter;
    return {
      id: dataObj.node.id,
      slug: dataObj.node.fields.slug,
      name,
      birthDate,
      deathDate,
    };
  });
  return (
    <Layout>
      <h2>Search author</h2>
      <Link to={authors[0].slug}>{authors[0].name}</Link>
    </Layout>
  );
};

export default Search;

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
            works
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
