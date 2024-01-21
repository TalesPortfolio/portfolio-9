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

const arrowAnimation = keyframes`
 0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`
const growImage = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
`

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  height: 100vh;
  width: 100%;
  background-color: ${Color.bg2};
  color: #fff;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media (max-width: 768px) {
    flex: 100%;
    p {
      font-size: 26px;
    }
    h1 {
      font-size: 36px;
    }
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

  &:hover img {
    transform: scale(1.1); /* Aumentando a escala no hover */
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const SpanScroll = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`
export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 30px solid ${Color.colorTitle}; /* Cor da seta (verde no exemplo) */
  position: relative;
  margin: 50px auto;
  animation: ${arrowAnimation} 2s infinite;
`
export const AlingButton = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`
