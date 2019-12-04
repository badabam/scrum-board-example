import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Nav({ links }) {
  return (
    <nav>
      {links.map(({ path, text }) => (
        <Button key={path + text} to={path}>
          {text}
        </Button>
      ))}
    </nav>
  )
}

const Button = styled(Link)`
  margin-right: 20px;
`
