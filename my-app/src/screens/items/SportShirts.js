import './Items.css';
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { mySportShirtss } from '../../dummy-data'

export default function SportShirts() {
  return (
    <div>
      <header className="Items-header">
        <h5>תבחר את המוצר המועדף</h5>
        {mySportShirtss.map(sportShirts => (
            <button className='m-1 btn btn-light'>
                <Link to={`/items/SportShoes/${sportShirts.name}`}>{sportShirts.name}</Link>
                <Link to={`/items/SportShoes/${sportShirts.image}`}>{sportShirts.image}</Link>
                <Link to={`/items/SportShoes/${sportShirts.color}`}>{sportShirts.color}</Link>
                <Link to={`/items/SportShoes/${sportShirts.price}`}>{sportShirts.price}</Link>
                <Link to={`/items/SportShoes/${sportShirts.instock}`}>{sportShirts.instock}</Link>
            </button>
        ))}
        <Outlet/>
      </header>
    </div>
  )
}