import React from 'react'
import { mySportPantss } from '../dummy-data'
import { useParams } from 'react-router-dom'

export default function MySportShirts() {

    // get all params from URL:
    let params = useParams();

    // Get the full object for the current param value:
    let MySportPantsChoice = mySportPantss.find(sportPants => 
        sportPants.name === params.sportPantsName);
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={MySportPantsChoice.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{MySportPantsChoice.name}</h5>
            <p className="card-text">Price {MySportPantsChoice.price} ש"ח</p>
            <a className="btn btn-primary">קנה עכשיו</a>
        </div>
    </div>
  )
}