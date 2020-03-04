import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PhotoGallery = ({ slides, children }) => {
  return (
    <section className="photo-gallery">
      <h3 style={{ margin: '1.6em 0 1.3em' }}>{children}</h3>
      <Carousel className="photo-carousel">
        {slides.map((slide, index) => {
          const slideKey = `slide: ${index}`;
          const { publicURL } = slide;
          return (
            <Carousel.Item key={slideKey}>
              {publicURL && <img src={publicURL} className="gallery-photo" alt={slideKey} />}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default PhotoGallery;
