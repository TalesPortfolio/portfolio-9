import styled, { keyframes } from 'styled-components'
import { Color } from '../../styles'

const aparecer = keyframes`
  0% {
    mask-position: 100%;
  }
  100% {
    mask-position: 0%;
  }
`

export const Home = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  height: 100vh;
  width: 100%;
  background-color: ${Color.bg2};
  color: #fff;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex: 50%;

  p {
    font-size: 40px;
    font-weight: bold;
    padding: 10px;
  }

  h1 {
    font-size: 60px;
    color: ${Color.colorTitle};
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 50%,
      transparent 100%
    );
    mask-size: 200% 100%;
    animation: ${aparecer} 3s infinite;
  }
`

export const DivImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 50%;

  img {
    width: 500px;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 50%,
      transparent 100%
    );
    mask-size: 200% 100%;
    animation: ${aparecer} 3s infinite;
  }
`
