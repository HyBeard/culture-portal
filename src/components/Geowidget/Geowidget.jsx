/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import secretKey from './secretKey';

class Geowidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 0,
      lat: 0,
      zoom: 2,
      ...props,
      mapContainer: React.createRef(),
    };
  }

  componentDidMount() {
    const { mapContainer, lat, lng, zoom } = this.state;
    const style = 'mapbox://styles/mapbox/streets-v11';
    const map = new mapboxgl.Map({
      container: mapContainer,
      style,
      center: [lng, lat],
      zoom,
    });
  }

  render() {
    const { mapContainer } = this.state;
    return (
      <section className="geowidget">
        <div ref={mapContainer} className="geowidget__map-container" />
      </section>
    );
  }
}

export default Geowidget;
