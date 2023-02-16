import './Items.css';
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { mySportPantss } from '../../dummy-data'

export default function SportPants() {
  return (
    <div>
      <header className="Items-header">
        <h5>תבחר את המוצר המועדף</h5>
        {mySportPantss.map(sportPants => (
            <button className='m-1 btn btn-light'>
                <Link to={`/items/SportShoes/${sportPants.name}`}>{sportPants.name}</Link>
                <Link to={`/items/SportShoes/${sportPants.image}`}>{sportPants.image}</Link>
                <Link to={`/items/SportShoes/${sportPants.color}`}>{sportPants.color}</Link>
                <Link to={`/items/SportShoes/${sportPants.price}`}>{sportPants.price}</Link>
                <Link to={`/items/SportShoes/${sportPants.instock}`}>{sportPants.instock}</Link>
            </button>
        ))}
        <Outlet/>
      </header>
    </div>
  )
}