import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ links }) {
  return (
    <nav>
      {links.map(({ path, text }) => (
        <Link key={path + text} to={path}>
          {text}
        </Link>
      ))}
    </nav>
  )
}
