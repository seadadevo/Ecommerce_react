import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">S</span>eada
              <span className="text-red-500 font-serif">M</span>art
            </h1>
          </Link>
  )
}

export default Logo
