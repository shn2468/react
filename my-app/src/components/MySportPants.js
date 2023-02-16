import React from 'react'
import { mySportShirtss } from '../dummy-data'
import { useParams } from 'react-router-dom'

export default function MySportShirts() {

    // get all params from URL:
    let params = useParams();

    // Get the full object for the current param value:
    let MySportShirtsChoice = mySportShirtss.find(sportShirts => 
        sportShirts.name === params.sportShirtsName);
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={MySportShirtsChoice.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{MySportShirtsChoice.name}</h5>
            <p className="card-text">Price {MySportShirtsChoice.price} ש"ח</p>
            <a className="btn btn-primary">קנה עכשיו</a>
        </div>
    </div>
  )
}