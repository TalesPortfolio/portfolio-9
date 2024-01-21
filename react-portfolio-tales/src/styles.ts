import styled, { createGlobalStyle } from 'styled-components'

// Defina as cores antes de criar o GlobalStyle
export const Color = {
  bg1: '#151515',
  bg2: '#121212',
  colorTitle: '#00D2DF',
  bordBtn1: '#8D277C',
  bordBtn2: '#5099EC',
  destaqueParagrafo: '#106FAB',
  paragrafo: '#c4c4c4'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Color.colorTitle};

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  ::-webkit-scrollbar-corner {
    background-color: #ffffff;
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
`
