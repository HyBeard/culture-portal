const path = require('path');
const fs = require('fs-extra');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.jsx');
  const indexPage = path.resolve('./src/pages/index.jsx');
  const errorPage = path.resolve('./src/pages/404.jsx');

  // FIXME: change data grabbing (graphQl-cli with variables)
  const postsQuery = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { type: { eq: "post-data" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  if (postsQuery.errors) {
    throw postsQuery.errors;
  }

  // Create blog posts pages.
  const posts = postsQuery.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // FIXME: get langs from metadata or other centralize place
  ['en', 'ru', 'be'].forEach((lng) => {
    createPage({
      path: `/${lng}/`,
      component: indexPage,
      context: {
        pageLang: lng,
      },
    });

    createPage({
      path: `/${lng}/404`,
      component: errorPage,
      context: {
        pageLang: lng,
      },
    });
  });
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

// TODO: check with build
exports.onPostBuild = () => {
  console.log('Copying locale');

  fs.copySync(path.join(__dirname, '/content/glossary'), path.join(__dirname, '/public/locales'));
};

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions

//   // Check if the page is a localized 404
//   if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
//     const oldPage = { ...page }

//     // Get the language code from the path, and match all paths
//     // starting with this code (apart from other valid paths)
//     const langCode = page.path.split(`/`)[1]
//     page.matchPath = `/${langCode}/*`

//     // Recreate the modified page
//     deletePage(oldPage)
//     createPage(page)
//   }
// }
