import React from 'react'
import { mySportShoess } from '../dummy-data'
import { useParams } from 'react-router-dom'

export default function MySportShoes() {

    // get all params from URL:
    let params = useParams();

    // Get the full object for the current param value:
    let MySportShoesChoice = mySportShoess.find(sportShoes => 
        sportShoes.name === params.sportShoesName);
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={MySportShoesChoice.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{MySportShoesChoice.name}</h5>
            <p className="card-text">Price {MySportShoesChoice.price} ש"ח</p>
            <a className="btn btn-primary">קנה עכשיו</a>
        </div>
    </div>
  )
}