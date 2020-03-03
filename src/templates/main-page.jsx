import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';

import PortalDescription from '../components/PortalDescription';
import Layout from '../components/Layout';
import AuthorOfTheDay from '../components/AuthorOfTheDay';

const MainPage = ({ data }) => {
  const {
    markdownRemark: {
      html: portalInfoHtmlString,
      frontmatter: { contentLang },
    },
    authorsData: { nodes: authorsNodes },
  } = data;

  return (
    <Layout>
      <PortalDescription contentLang={contentLang}>{parse(portalInfoHtmlString)}</PortalDescription>
      <div className="content-wrap">
        <AuthorOfTheDay authorsNodes={authorsNodes} />
      </div>
    </Layout>
  );
};

export default MainPage;

export const pageQuery = graphql`
  query($pageLang: String!) {
    markdownRemark(
      frontmatter: { contentLang: { eq: $pageLang }, dataKey: { eq: "aboutPortal" } }
    ) {
      html
      frontmatter {
        contentLang
      }
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
