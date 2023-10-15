'use client'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { NavigationControl, GeolocateControl } from 'react-map-gl'
import classes from './page.module.css'
import SwimMap from '@/components/SwimMap'
import { genPageMetadata } from 'app/seo'

// export const metadata = genPageMetadata({ title: 'Resources' })

export default function SwimmingLocations() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Swimming Locations
        </h1>
        <p className="text-xl leading-7 text-gray-900 dark:text-white">
          For now, this is just a list of places I've swam and others in my local area. I'll add
          more details later.
        </p>
      </div>
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={classes.mapStyle}
        initialViewState={{ latitude: 35.668641, longitude: 139.750567, zoom: 10 }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl />
        <NavigationControl />
      </Map>
    </div>
  )
}
