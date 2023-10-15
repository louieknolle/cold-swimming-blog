'use client'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
// import Map, { NavigationControl, GeolocateControl } from 'react-map-gl'
// import classes from '../app/swimming-locations/Page.module.css'
import { useEffect, useRef } from 'react'

export default function SwimMap() {
  // const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
    const options: mapboxgl.MapboxOptions = {
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [15.4542, 18.7322], // center map on Chad
      zoom: 1.8,
    }
    const map = new mapboxgl.Map(options)

    return () => {
      map.remove()
    }
  }, [])

  return (
    <main className={''}>
      <div className="map-container" ref={mapContainer} />
    </main>
  )
}

// export default function SwimMap() {
//   const mapContainer = useRef<HTMLDivElement>(null)
//   const map = useRef<mapboxgl.Map | null>(null)

//   useEffect(() => {
//     mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
//     const options: MapboxOptions = {
//       container: mapContainer.current!,
//       style: 'mapbox://styles/mapbox/light-v10',
//       center: [15.4542, 18.7322], // center map on Chad
//       zoom: 1.8,
//     }
//     map.current = new mapboxgl.Map(options)

//     return () => {
//       map.current?.remove()
//     }
//   }, [])

//   return (
//     <main className={''}>
//       <div className="map-container" ref={mapContainer} />
//     </main>
//   )
// }
