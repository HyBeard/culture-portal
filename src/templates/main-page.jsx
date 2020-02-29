import React from 'react';
import { graphql } from 'gatsby';

// TODO: add styles, config rhythm
// import { rhythm } from '../utils/typography';

import Layout from '../components/Layout';
import AuthorOfTheDay from '../components/AuthorOfTheDay';

const MainPage = ({ data, pageContext: { pageLang } }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;

  // TODO: create lang filtering by graphQl-cli

  // TODO: take default values if language was not found
  const authorsEdges = nodes.filter(
    ({ frontmatter }) =>
      frontmatter.dataKey === 'writerData' && frontmatter.contentLang === pageLang,
  );
  const aboutPortal = nodes.find(
    ({ frontmatter }) =>
      frontmatter.dataKey === 'aboutPortal' && frontmatter.contentLang === pageLang,
  );

  // const teamEdges = edges.filter(
  //   ({ node }) =>
  //     node.frontmatter.dataKey === 'teamInfo' && node.frontmatter.contentLang === pageLang,
  // );

  // FIXME: find safe method to create page from markdown
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: aboutPortal.html }} />
      <AuthorOfTheDay authorsEdges={authorsEdges} />
      <button type="button" onClick={() => console.log(authorsEdges)}>
        console query
      </button>
    </Layout>
  );
};

export default MainPage;

export const pageQuery = graphql`
  query($pageLang: String!) {
    allMarkdownRemark(filter: { frontmatter: { contentLang: { eq: $pageLang } } }) {
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
