import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data /* location */ }) => {
  // const siteTitle = data.site.siteMetadata.title;
  const writersFiles = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {writersFiles.map(({ node }) => {
        const title = node.frontmatter.name;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            name
            video
            works
            yearsOfLife
            photo {
              absolutePath
            }
          }
        }
      }
    }
  }
`;
