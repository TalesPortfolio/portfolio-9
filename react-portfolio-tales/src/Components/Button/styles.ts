import styled from 'styled-components'
import { Color } from '../../styles'

interface ButtonProps {
  border?: string
}
const StyledButton = styled.button<ButtonProps>`
  background-color: transparent;
  border: ${(props) => props.border || `2px solid ${Color.bordBtn1}`};
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 50px;
  color: #fff;

  &:hover {
    background-color: #1e90ff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 0px;
    margin: 5px;
  }
`
export const StyleLink = styled.a`
  color: #fff;
  img {
    width: 20px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    img {
      margin-right: 5px;
      width: 14px;
    }
  }
`

export default StyledButton
