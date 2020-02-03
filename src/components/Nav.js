import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">NewsApp</Link>
        <ul className="nav navbar-nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default withRouter(Nav);