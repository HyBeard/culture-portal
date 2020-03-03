import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import SearchAuthor from '../components/SearchAuthor';
import Layout from '../components/Layout';

const SearchTemplate = ({ data, t }) => {
  const authorsNodes = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);
  return (
    <Layout>
      <h2>{t('searchHeader')}</h2>
      <SearchAuthor
        placeholder={t('searchPlaceholder')}
        authorsNodes={authorsNodes}
        fieldsToSearchFor={['name', 'birthPlace']}
      />
    </Layout>
  );
};

export default withTranslation()(SearchTemplate);

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
