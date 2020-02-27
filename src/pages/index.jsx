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
      <div dangerouslySetInnerHTML={{ __html: aboutPortal.node.html }} />
      <AuthorOfTheDay writersEdges={writersEdges}>
        <h1>{t('AuthorOfDay')} - [ text from glossary for example ]</h1>
        <p>{t('footerMessage')}</p>
        <p>{t('worksTitle')}</p>
        <p>{t('videoTitle')}</p>
        <p>{t('galleryTitle')}</p>
        <p>{t('footerMessage')}</p>
      </AuthorOfTheDay>

      <button type="button" onClick={() => console.log(writersEdges)}>
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
