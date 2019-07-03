import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./googleMap.scss";

const config = require('../../server/config');

const AnyReactComponent = ({ text }) => <div className="targetAdress">{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 49.826413, lng: 19.038694},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <AnyReactComponent
        lat={49.826413}
        lng={19.038694}
        text={'AlexCompany Shop'}
      />
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;