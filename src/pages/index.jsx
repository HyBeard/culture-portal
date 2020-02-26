import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

// TODO: add styles, config rhythm
// import { rhythm } from '../utils/typography';

import Layout from '../components/Layout';
import LangSwitcher from '../components/LangSwitcher';

const MainPage = ({ data, pageContext: { pageLang } }) => {
  const { t } = useTranslation();
  const {
    allMarkdownRemark: { edges },
  } = data;

  // TODO: create lang filtering by graphQl-cli
  const aboutPortal = edges.find(
    ({ node }) =>
      node.frontmatter.dataKey === 'aboutPortal' && node.frontmatter.contentLang === pageLang,
  );

  // FIXME: find safe method to create page from markdown
  return (
    <Layout>
      <LangSwitcher />
      <div dangerouslySetInnerHTML={{ __html: aboutPortal.node.html }} />
      <h1>{t('artistsPageButton')}</h1>

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
              absolutePath
            }
            yearsOfLife
          }
          html
        }
      }
    }
  }
`;
