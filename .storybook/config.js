import { configure } from '@storybook/react'
import { load, addDecorator } from '@storybook/react'
import styled from 'styled-components/macro'
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import GlobalStyles from '../src/GlobalStyles'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <GlobalStyles />
    <Wrapper>{storyFn()}</Wrapper>
  </>
))

const Wrapper = styled.div`
  max-width: 500px;
  border: 1px solid hotpink;
  padding: 20px;
`
