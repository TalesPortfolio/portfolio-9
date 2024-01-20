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

  &:hover {
    background-color: #40e0d969;
    font-weight: bold;
  }
`
export const StyleLink = styled.a`
  color: #fff;
  img {
    width: 20px;
    margin-right: 10px;
  }
`

export default StyledButton
