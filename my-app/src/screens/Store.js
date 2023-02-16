import './Store.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom'

export default function Store() {
  return (
    <div className='container'>
      <header className="Store-header">
      <h2>מוצרי החנות</h2>
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/items/SportShoes'>נעלי ספורט</Link> 
          </button>
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/items/SportShirts'>חולצות ספורט</Link> 
          </button>
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/items/SportPants'>מכנסי ספורט</Link> 
          </button>
          <br/>
          <button> 
          מחיקת מוצר
          </button>
          <br/>
          <button> 
          הצגת מוצר 
          </button>
          <br/>
          <button> 
          עריכה
          </button>
      <Outlet />
      </header>
    </div>
  )
}