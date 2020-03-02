import React from 'react';
import { graphql } from 'gatsby';

// TODO: add styles, config rhythm
// import { rhythm } from '../utils/typography';

import Layout from '../components/Layout';
import AuthorOfTheDay from '../components/AuthorOfTheDay';

const MainPage = ({ data }) => {
  const {
    markdownRemark: aboutPortal,
    authorsData: { nodes: authorsNodes },
  } = data;

  // TODO: take default values if language was not found

  // FIXME: find safe method to create page from markdown
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: aboutPortal.html }} />
      <AuthorOfTheDay authorsNodes={authorsNodes} />
    </Layout>
  );
};

export default MainPage;

export const pageQuery = graphql`
  query($pageLang: String!) {
    markdownRemark(frontmatter: { contentLang: { eq: $pageLang } }) {
      html
    }
    authorsData: allMarkdownRemark(
      filter: { frontmatter: { contentLang: { eq: $pageLang }, dataKey: { eq: "writerData" } } }
    ) {
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
      }
    }
  }
`;
