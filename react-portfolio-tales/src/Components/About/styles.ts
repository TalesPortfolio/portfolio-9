import styled from 'styled-components'
import { Color } from '../../styles'

export const AboutStyle = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  justify-content: center;
  background-color: ${Color.bg1};

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    height: auto;
  }
`
export const ImagenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 30px;

  img {
    height: 450px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: ${Color.colorTitle};
    padding-left: 15px;
    filter: brightness(0.6);

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`
export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 100px;
  width: 680px;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    width: 100%;
    padding: 10px;
  }
`
export const P = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 20px;
  color: ${Color.paragrafo};

  @media (max-width: 768px) {
    text-align: justify;
    font-size: 16px;
  }
`

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: ${Color.colorTitle};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 15px;
    text-align: center;
    font-size: 22px;
  }
`
export const H4 = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: ${Color.destaqueParagrafo};
  margin-bottom: 10px;
`
