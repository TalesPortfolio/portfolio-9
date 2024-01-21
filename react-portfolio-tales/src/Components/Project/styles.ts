import styled from 'styled-components'
import { Color } from '../../styles'

export const ProjectStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: ${Color.bg1};
  padding-top: 100px;

  h3 {
    color: ${Color.colorTitle};
    font-size: 40px;
    padding-left: 0px;
    align-items: center;
    text-decoration: underline;

    @media (max-width: 768px) {
      padding: 0;
      padding-left: 10px;
      font-size: 30px;
    }
  }
`
export const ContainerCards = styled.div`
  border: 2px solid ${Color.destaqueParagrafo};
  border-radius: 10px;
  width: 300px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 300px;
    margin: 0px;
    margin-bottom: 20px;
  }
  img {
    height: 180px;
    width: 300px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    @media (max-width: 768px) {
      width: 300px;
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: 1024px;

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
