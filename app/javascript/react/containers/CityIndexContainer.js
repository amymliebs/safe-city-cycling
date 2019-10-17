import React, { useState, useEffect } from 'react'

import CityTile from '../components/CityTile'

export const CityIndexContainer = (props) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('/api/v1/cities.json')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let cityNames = body
      setCities(cityNames)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const cityTiles = cities.map ((city) => {
    return (
      <CityTile
        key={city.id}
        id={city.id}
        name={city.name}
        state={city.state}
      />
    )
  })

  return (
    <div>
      <h1>Safe City Cycling</h1>
      <h4>Select a city to view reviews of bike lane safety on particular roads in that city.</h4>
      {cityTiles}
    </div>
  )
}

export default CityIndexContainer
