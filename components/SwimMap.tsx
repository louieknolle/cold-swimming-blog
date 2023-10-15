'use client'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { NavigationControl, GeolocateControl } from 'react-map-gl'
import classes from '../app/swimming-locations/Page.module.css'

export default function SwimMap() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  return (
    <main className={classes.mainStyle}>
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={classes.mapStyle}
        initialViewState={{ latitude: 35.668641, longitude: 139.750567, zoom: 10 }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </main>
  )
}
