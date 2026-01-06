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
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 10px 30px rgba(0, 115, 255, 0.4);
    border: 2px solid rgba(0, 115, 255, 0.3);

    &:hover {
      transform: scale(1.05) translateY(-5px);
      cursor: pointer;
      box-shadow: 0px 20px 50px rgba(0, 115, 255, 0.6);
      border-color: rgba(0, 115, 255, 0.6);
    }
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1100px;
  padding: 20px;

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px;
  }
`
