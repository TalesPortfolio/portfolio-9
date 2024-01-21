import { AboutStyle, ImagenDiv, TextAbout, P, H2, H4 } from './styles'
import { AlingButton } from '../SectionHome/styles'
import { Color } from '../../styles'
import { StyleLink } from '../Button/styles'
import MyButton from '../Button'
import MyButton2 from '../Button'

const About = () => (
  <AboutStyle id="about">
    <ImagenDiv>
      <img src="/images/fotoAbout.jpeg" alt="foto perfil Tales" />
    </ImagenDiv>
    <TextAbout>
      <H2>ABOUT ME</H2>
      <H4>Grevenmacher, Luxembourg</H4>
      <P>
        Hello! My name is Tales Lima, and I am a programming enthusiast with
        three years of experience in the field. Currently, I am embarking on an
        educational journey at 42 Luxembourg, where I continue to refine my
        skills and gain knowledge in various areas of computing.
      </P>

      <P>
        Throughout my journey, I have developed proficiency in languages such as
        C, JavaScript, Vue.js, and React, as well as explored various related
        frameworks. My passion for programming goes beyond the simple act of
        coding; it is rooted in problem-solving, creating innovative solutions,
        and a constant pursuit of learning.
      </P>

      <P>
        I am excited to continue honing my skills at 42 Luxembourg, where I look
        forward to tackling significant challenges, collaborating with talented
        peers, and contributing to inspiring projects. Whether it&apos;s
        exploring complex algorithms, developing interactive applications, or
        participating in open-source initiatives, I am always eager to expand my
        knowledge and be part of the amazing world of programming.
      </P>

      <P>Let&apos;s build an exciting digital future together!</P>

      <AlingButton>
        <MyButton>
          <StyleLink
            href="https://www.instagram.com/taleslimadepaula/"
            target="_blank"
          >
            <img src="/images/instagram.webp" alt="" /> Instagran
          </StyleLink>
        </MyButton>
        <MyButton2 border={`2px solid ${Color.bordBtn2}`}>
          <StyleLink href="mailto:tales_lima_1982@hotmail.com?subject=Portfolio&body=Corpo do E-mail">
            {' '}
            <img src="/images/email.png" alt="" />
            E-mail
          </StyleLink>
        </MyButton2>
      </AlingButton>
    </TextAbout>
  </AboutStyle>
)

export default About
