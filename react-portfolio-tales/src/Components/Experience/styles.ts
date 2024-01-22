import styled from 'styled-components'
import { Color, Container } from '../../styles'

export const EsperienceStyle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${Color.bg2};
  height: 700px;
  padding-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`
export const TabsButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 30%;

  button {
    width: 160px;
    height: 40px;
    background-color: transparent;
    border: none;
    border-left: 2px solid #272727;
    color: ${Color.paragrafo};
    font-weight: bold;
    font-size: 16px;

    &:hover {
      border-left: 2px solid ${Color.colorTitle};
      background-color: ${Color.bg1};
      cursor: pointer;
    }

    &.active {
      border-left: 2px solid #007bff; /* Cor da borda da aba ativa */
      background-color: #272727; /* Cor de fundo da aba ativa, se desejar */
      color: #fff; /* Cor do texto da aba ativa */
    }
    @media (max-width: 768px) {
      width: 60vw;
      border-left: none;
      border-bottom: 2px solid #272727;
      &:hover {
        border-left: none;
        border-bottom: 2px solid ${Color.colorTitle};
        background-color: ${Color.bg1};
        cursor: pointer;
      }
    }
  }
`

export const ContentTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 60%;
  padding-right: 100px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-right: 0px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding-right: 0px;
    padding: 10px;
  }
`
export const ContainerProject = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`
