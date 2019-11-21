import styled from 'styled-components/macro'

export default styled.div`
  width: 20px;
  height: 30px;
  background: ${props => (props.active ? 'hotpink' : 'black')};
  position: absolute;
  right: 10px;
  top: -5px;
`
