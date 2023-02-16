import './Items.css';
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { mySportShoess } from '../../dummy-data'

export default function SportShoes() {
  return (
    <div>
      <header className="Items-header">
        <h5>תבחר את המוצר המועדף</h5>
        {mySportShoess.map(sportShoes => (
            <button className='m-1 btn btn-light'>
                <Link to={`/items/SportShoes/${sportShoes.name}`}>{sportShoes.name}</Link>
                <Link to={`/items/SportShoes/${sportShoes.image}`}>{sportShoes.image}</Link>
                <Link to={`/items/SportShoes/${sportShoes.color}`}>{sportShoes.color}</Link>
                <Link to={`/items/SportShoes/${sportShoes.price}`}>{sportShoes.price}</Link>
                <Link to={`/items/SportShoes/${sportShoes.instock}`}>{sportShoes.instock}</Link>
            </button>
        ))}
        <Outlet/>
      </header>
    </div>
  )
}