import React from 'react'
import { Link } from "react-router-dom"

const CityTile = (props) => {
  return(
    <div className="callout city-tile">
      <Link to={`/cities/${props.id}`}>
        <p>{props.name}, {props.state}</p>
      </Link>
    </div>
  )
}

export default CityTile
