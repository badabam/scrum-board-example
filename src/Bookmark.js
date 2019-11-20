import styled from 'styled-components/macro'

export default styled.div`
  width: 30px;
  height: 50px;
  background: ${props => (props.active ? 'hotpink' : 'black')};
  position: absolute;
  right: 10px;
  top: 0;
`
