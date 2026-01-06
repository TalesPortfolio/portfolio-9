import styled from 'styled-components'
//import MyButton2 from '../Button'
import { Color } from '../../styles'

export const Card = styled.div`
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(0, 115, 255, 0.05) 0%,
    rgba(0, 115, 255, 0.02) 100%
  );
  border-radius: 12px;
  border: 1px solid rgba(0, 115, 255, 0.2);
  transition: all 0.3s ease;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 40px rgba(0, 115, 255, 0.3);
    border-color: rgba(0, 115, 255, 0.5);
  }
`

export const Span = styled.span`
  p {
    color: #d0d0d0;
    font-size: 13px;
    line-height: 2;
    margin: 0;
    white-space: pre-line;
    margin-bottom: 8px;

    /* Destaque para os títulos das categorias (Frontend:, Backend:, etc) */
    strong {
      color: #00d4ff;
      font-weight: 700;
      font-size: 13.5px;
      text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
    }
  }
`

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: rgba(0, 115, 255, 0.925);
  }
`

export const Descrisao = styled.h4`
  color: ${Color.destaqueParagrafo};
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 4px;
  margin-top: 8px;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
`

export const TechContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;

  /* Personalizar scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 115, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 115, 255, 0.4);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 115, 255, 0.6);
  }
`
