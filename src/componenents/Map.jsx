import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

const zoomLevel= 18

const location = {
    address: 'San Rafael Arcangel, 67119 Guadalupe, N.L.',
    lat: 25.69200000,
    lng: -100.217061
  }

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
  </div>
)

const Map = () => (
  <div className="map">

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map