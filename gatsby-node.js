const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const dataQuery = await graphql(`
    {
      site {
        siteMetadata {
          langs {
            defaultLangKey
            list
          }
        }
      }
      authorsData: allMarkdownRemark(filter: { frontmatter: { dataKey: { eq: "writerData" } } }) {
        nodes {
          id
          frontmatter {
            contentLang
            path
          }
        }
      }
    }
  `);

  if (dataQuery.errors) {
    throw dataQuery.errors;
  }

  const langsList = dataQuery.data.site.siteMetadata.langs.list;
  const authorsNodes = dataQuery.data.authorsData.nodes;

  const mainPage = path.resolve('./src/templates/main-page.jsx');
  const authorPage = path.resolve('./src/templates/author-page.jsx');
  const searchPage = path.resolve('./src/templates/search.jsx');
  const teamPage = path.resolve('./src/templates/team.jsx');
  const worklogPage = path.resolve('./src/templates/worklog.jsx');
  const errorPage = path.resolve('./src/pages/404.jsx');

  const createPageWithLngContext = (pathname, component, lng) => {
    createPage({
      path: `/${lng}${pathname}`,
      component,
      context: {
        pageLang: lng,
      },
    });
  };

  langsList.forEach((lng) => {
    createPageWithLngContext('/', mainPage, lng);
    createPageWithLngContext('/404', errorPage, lng);
    createPageWithLngContext('/search', searchPage, lng);
    createPageWithLngContext('/team', teamPage, lng);
    createPageWithLngContext('/worklog', worklogPage, lng);
  });

  authorsNodes.forEach(({ id, frontmatter: { contentLang, path: pathname } }) =>
    createPage({
      path: `/${contentLang}${pathname}`,
      component: authorPage,
      context: {
        id,
      },
    }),
  );
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: ['null-loader'],
          },
        ],
      },
    });
  }
};
