import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PhotoGallery = ({ slides, children }) => {
  return (
    <section className="photo-gallery">
      <h3>{children}</h3>
      <Carousel>
        {slides.map((slide, index) => {
          const slideKey = `slide: ${index}`;
          const { publicURL } = slide;
          return (
            <Carousel.Item key={slideKey}>
              {publicURL && <img src={publicURL} className="d-block w-100" alt={slideKey} />}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default PhotoGallery;
