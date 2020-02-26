import React from 'react';

const PhotoGallery = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default PhotoGallery;
