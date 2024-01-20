import styled from 'styled-components'
import { Color } from '../../styles'

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: ${Color.bg1};
  border-bottom: 3px solid #272727;
  color: #fff;

  h2 {
    flex: 25%;
    color: ${Color.colorTitle};
    padding-left: 10px;
  }

  ul {
    display: flex;
    flex: 75%;
    align-items: center;
    justify-content: space-around;
    padding-right: 10px;
  }

  a {
    color: #fff;
    font-weight: bold;
  }
`
