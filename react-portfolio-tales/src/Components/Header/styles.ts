import styled from 'styled-components'
import { Color } from '../../styles'

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1000;
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
    position: relative; /* Adicione position: relative para que a posição absoluta seja relativa ao link */
  }

  a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px; /* Altura da borda */
    background-color: ${Color.colorTitle}; /* Use a cor da variável de estilo */
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease; /* Transição suave da largura */
  }

  a:hover::after {
    width: 100%;
  }
`

export const Img = styled.img`
  height: 100px;
`
