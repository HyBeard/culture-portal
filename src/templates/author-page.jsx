import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AuthorCard from '../components/AuthorCard';
import Masterpieces from '../components/Masterpieces';

const authorPage = ({ data }) => {
  const authorData = data.markdownRemark.frontmatter;
  const { works } = authorData;

  return (
    <Layout>
      <AuthorCard authorData={authorData} />;
      <Masterpieces data={works}>
        <span>header</span>
        <span>works</span>
        <span>dates</span>
      </Masterpieces>
    </Layout>
  );
};

export default authorPage;

export const pageQuery = graphql`
  query authorInfoById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        name
        birthDate
        deathDate
        contentLang
        overview
        birthPlace
        youtube
        photo {
          publicURL
        }
        birthPlaceLocation {
          lat
          lng
          name
          zoom
        }
        works {
          date
          title
        }
        activity {
          date
          description
        }
        photoGallery {
          publicURL
        }
      }
    }
  }
`;
