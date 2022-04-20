import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Home
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
        <Link className='links' to="/adminLogin">
            Admin
          </Link>
          <Link className='links' to="/userLogin">
            User
          </Link>
          <Link className='links' to="/user/createUser">
            Sign Up
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
