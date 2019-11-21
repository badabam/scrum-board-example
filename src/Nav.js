import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Nav({ items }) {
  return (
    <nav>
      {items.map((item, index) => (
        <Button key={index} to={item.path}>
          {item.text}
        </Button>
      ))}
    </nav>
  )
}

const Button = styled(Link)`
  margin-right: 20px;
`
