import React, { ReactNode, MouseEventHandler } from 'react'
import StyledButton from './styles'

interface MyButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
  border?: string
}

const MyButton: React.FC<MyButtonProps> = ({ onClick, children, border }) => {
  return (
    <StyledButton onClick={onClick} border={border}>
      {children}
    </StyledButton>
  )
}

export const MyButton2: React.FC<MyButtonProps> = ({
  onClick,
  children,
  border
}) => {
  return (
    <StyledButton onClick={onClick} border={border}>
      {children}
    </StyledButton>
  )
}

export default MyButton
