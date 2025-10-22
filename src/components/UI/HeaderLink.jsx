import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderLink = ({path,text }) => {
  return (
    <NavLink
              to={path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>{text}</li>
            </NavLink>
  )
}

export default HeaderLink
