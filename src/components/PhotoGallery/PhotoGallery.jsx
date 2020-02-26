import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PhotoGallery = ({ slides }) => {
  return (
    <Carousel>
      {slides.map((slide, index) => {
        const slideKey = `slide: ${index}`;
        const { imgSrc, title, text } = slide;
        return (
          <Carousel.Item key={slideKey}>
            {imgSrc && <img src={imgSrc} className="d-block w-100" alt={slideKey} />}
            <Carousel.Caption>
              <h3>{title}</h3>
              <p>{text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PhotoGallery;
