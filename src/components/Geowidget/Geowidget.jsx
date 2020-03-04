import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import secretKey from './secretKey';

class Geowidget extends Component {
  geowdigetMounted = false;

  constructor(props) {
    super(props);
    mapboxgl.accessToken = secretKey;
    this.state = {
      lng: 0,
      lat: 0,
      zoom: 0,
      ...props,
      mapContainer: React.createRef(),
    };
  }

  componentDidMount() {
    this.geowdigetMounted = true;
    const { mapContainer, lat, lng, zoom } = this.state;
    const style = 'mapbox://styles/mapbox/streets-v11';
    const center = [lng, lat];
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style,
      center,
      zoom,
    });
    const pop = new mapboxgl.Popup();
    pop.setLngLat(center);
    pop.setHTML('');
    pop.addTo(map);
    map.on('move', () => {
      if (this.geowdigetMounted) {
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2),
        });
      }
    });
  }

  componentWillUnmount() {
    this.geowdigetMounted = false;
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
