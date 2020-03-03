import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AuthorCard from '../components/AuthorCard';
import Masterpieces from '../components/Masterpieces';
import Timeline from '../components/Timeline';
import PhotoGallery from '../components/PhotoGallery';
import Geowidget from '../components/Geowidget';

const authorPage = ({ data }) => {
  const authorData = data.markdownRemark.frontmatter;
  const { works, activity, photoGallery, birthPlaceLocation } = authorData;
  const { lat, lng, zoom } = birthPlaceLocation;
  return (
    <Layout>
      <AuthorCard authorData={authorData} isAuthorPage />
      <Timeline lines={activity} />
      <Masterpieces data={works}>
        <span>header</span>
        <span>works</span>
        <span>dates</span>
      </Masterpieces>
      <Geowidget lat={lat} lng={lng} zoom={zoom} />
      <PhotoGallery slides={photoGallery}>header</PhotoGallery>
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
