import styled from 'styled-components'
import { Color } from '../../styles'

export const ProjectStyle = styled.section`
  height: auto;
  width: 100%;
  background-color: ${Color.bg1};
  padding-top: 100px;

  h3 {
    color: ${Color.colorTitle};
    font-size: 40px;
    padding-left: 320px;
    align-items: center;
  }
`
export const ContainerCards = styled.div`
  border: 2px solid ${Color.destaqueParagrafo};
  border-radius: 10px;
  width: 400px;
  margin: 20px;
  img {
    height: 180px;
    width: 396px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
