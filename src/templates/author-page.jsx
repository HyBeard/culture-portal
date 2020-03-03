import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import AuthorCard from '../components/AuthorCard';
import Masterpieces from '../components/Masterpieces';
import Timeline from '../components/Timeline';
import PhotoGallery from '../components/PhotoGallery';
import Geowidget from '../components/Geowidget';

const authorPage = ({ data, t }) => {
  const authorData = data.markdownRemark.frontmatter;
  const { works, activity, photoGallery, birthPlaceLocation } = authorData;
  const { lat, lng, zoom } = birthPlaceLocation;
  const { works, activity, photoGallery } = authorData;
  return (
    <Layout>
      <AuthorCard authorData={authorData} isAuthorPage />
      <Timeline lines={activity} />
      <Masterpieces data={works}>
        <h3>{t('masterpiecesHeader')}</h3>
        <span>{t('works')}</span>
        <span>{t('dates')}</span>
      </Masterpieces>
      <Geowidget lat={lat} lng={lng} zoom={zoom} />
      <PhotoGallery slides={photoGallery}>{t('photoGalleryHeader')}</PhotoGallery>
    </Layout>
  );
};

export default withTranslation()(authorPage);

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
