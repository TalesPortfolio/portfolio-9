import React from 'react'
import { Container } from '../../styles'
import {
  Home,
  Description,
  DivImage,
  SpanScroll,
  Arrow,
  AlingButton
} from './styles'
import MyButton from '../Button'
import { Color } from '../../styles'
import { StyleLink } from '../Button/styles'

const SectionHome = () => {
  const handleLinkedInClick = () => {
    // Lógica a ser executada quando o botão do LinkedIn é clicado
    console.log('LinkedIn clicado')
  }

  const handleGitHubClick = () => {
    // Lógica a ser executada quando o botão do GitHub é clicado
    console.log('GitHub clicado')
  }

  return (
    <Home id="home">
      <Container>
        <Description>
          <p>Hello, I am</p>
          <h1>TALES LIMA</h1>
          <p>FULL STACK DEVELOPER</p>
          <AlingButton>
            <MyButton onClick={handleLinkedInClick}>
              <StyleLink
                href="https://www.linkedin.com/in/tales-lima-de-paula-900097242/"
                target="_blank"
              >
                <img src="/images/linkedin.png" alt="Linkedin" />
                LINKEDIN
              </StyleLink>
            </MyButton>
            <MyButton
              onClick={handleGitHubClick}
              border={`2px solid ${Color.bordBtn2}`}
            >
              <StyleLink href="https://github.com/tales1982" target="_blank">
                <img src="/images/github.png" alt="" />
                GITHUB
              </StyleLink>
            </MyButton>
          </AlingButton>
        </Description>
        <DivImage>
          <img src="/images/dev.gif" alt="Developer" />
        </DivImage>
      </Container>
      <SpanScroll>
        scroll down{' '}
        <a href="#about">
          <Arrow></Arrow>
        </a>
      </SpanScroll>
    </Home>
  )
}

export default SectionHome
