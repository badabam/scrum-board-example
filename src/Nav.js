import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ items }) {
  return (
    <nav>
      {items.map(item => (
        <Link to={item.path}>{item.text}</Link>
      ))}
    </nav>
  )
}
