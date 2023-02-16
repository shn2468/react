import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info p-3">
          <label className="nav-home">
            <Link className="nav-link" to='/'><button>בית</button></Link>
          </label>
          <label className="nav-store">
            <Link className="nav-link" to='/Store'><button>חנות</button></Link>
          </label>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </>
  )
}