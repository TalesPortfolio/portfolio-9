import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  list-style: none;
  text-decoration: none;
}

`
export default GlobalStyle

export const Color = {
  bg1: '#151515',
  bg2: '#121212',
  colorTitle: '#00D2DF',
  bordBtn1: '#8D277C',
  bordBtn2: '#5099EC',
  destaqueParagrafo: '#106FAB'
}

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
`
