import styled from 'styled-components'
import { Color } from '../../styles'

export const EsperienceStyle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${Color.bg2};
  height: 100vh;
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
  flex: 40%;
  padding-right: 500px;

  @media (max-width: 768px) {
    padding-right: 0px;
    padding: 10px;
  }
`
