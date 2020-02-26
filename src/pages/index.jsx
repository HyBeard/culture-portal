import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

// TODO: add styles, config rhythm
// import { rhythm } from '../utils/typography';

import Layout from '../components/Layout';
import LangSwitcher from '../components/LangSwitcher';
import AuthorOfTheDay from '../components/AuthorOfTheDay';

const MainPage = ({ data, pageContext: { pageLang } }) => {
  const { t } = useTranslation();
  const {
    allMarkdownRemark: { edges },
  } = data;

  // TODO: create lang filtering by graphQl-cli

  // TODO: take default values if language was not found
  const writersEdges = edges.filter(
    ({ node }) =>
      node.frontmatter.dataKey === 'writerData' && node.frontmatter.contentLang === pageLang,
  );
  const aboutPortal = edges.find(
    ({ node }) =>
      node.frontmatter.dataKey === 'aboutPortal' && node.frontmatter.contentLang === pageLang,
  );

  // const teamEdges = edges.filter(
  //   ({ node }) =>
  //     node.frontmatter.dataKey === 'teamInfo' && node.frontmatter.contentLang === pageLang,
  // );

  // FIXME: find safe method to create page from markdown
  return (
    <Layout>
      <LangSwitcher />
      <h1>{t('artistsPageButton')} - [ text from glossary for example ]</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutPortal.node.html }} />
      <AuthorOfTheDay writersEdges={writersEdges} />

      <button type="button" onClick={() => console.log(aboutPortal)}>
        console query
      </button>
    </Layout>
  );
};

export default MainPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            dataKey
            contentLang
            name
            photo {
              publicURL
            }
            yearsOfLife
          }
          html
        }
      }
    }
  }
`;
