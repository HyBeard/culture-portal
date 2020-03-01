import React from 'react';
import { graphql } from 'gatsby';
import SearchAuthor from '../components/SearchAuthor';

import Layout from '../components/Layout';

const SearchTemplate = ({ data }) => {
  const authorsNodes = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);

  return (
    <Layout>
      <SearchAuthor authorsNodes={authorsNodes} fieldsToSearchFor={['name', 'birthPlace']} />
    </Layout>
  );
};

export default SearchTemplate;

export const pageQuery = graphql`
  query($pageLang: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { contentLang: { eq: $pageLang }, dataKey: { eq: "writerData" } } }
    ) {
      nodes {
        frontmatter {
          name
          birthDate
          deathDate
          birthPlace
          photo {
            publicURL
          }
          contentLang
          overview
          path
        }
      }
    }
  }
`;
