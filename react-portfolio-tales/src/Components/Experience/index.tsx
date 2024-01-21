import React, { useState } from 'react'
import Tab from '../Tab' // Importe o componente Tab corretamente
import { EsperienceStyle, TabsButton, ContentTabs } from './styles'
import { P, H2 } from '../About/styles'
import { StyleLink } from '../Button/styles'
import { Color } from '../../styles'
import MyButton2 from '../Button'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  return (
    <EsperienceStyle id="experience">
      <TabsButton>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? 'active' : ''}
        >
          My journey
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? 'active' : ''}
        >
          42 Luxembourg
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? 'active' : ''}
        >
          Experience
        </button>
      </TabsButton>
      <ContentTabs>
        <Tab isActive={activeTab === 1}>
          <H2>My journey</H2>
          <P>
            I&apos;m excited about my first venture into the technology field,
            seeking opportunities in independent projects, freelancing, and
            volunteering to enhance my skills. My goal is to continuously absorb
            knowledge, building not only technical competencies but also
            fostering a mindset geared towards innovative solutions.
          </P>

          <P>
            I aim to learn from each experience, establish a solid foundation,
            and contribute to meaningful causes that positively impact the
            world. I am open to collaborations that provide enriching exchanges,
            and I am eager to embark on this thrilling technological journey
            where the possibilities for learning and growth are endless. Whether
            developing effective solutions, exploring new technologies, or
            actively participating in inspiring projects, I am determined to
            make a difference as I continue my journey in the field of
            technology.
          </P>

          {/* Add content for Tab 1 here */}
        </Tab>

        <Tab isActive={activeTab === 2}>
          <H2>My journey at 42 Luxembourg</H2>
          <P>
            Technology enthusiast and passionate about programming, I am
            embarking on an educational journey at the renowned 42 Luxembourg.
            With a solid foundation in languages such as C, JavaScript, Vue.js,
            and React, I constantly seek challenges that expand my knowledge and
            skills.
          </P>
          <P>
            My journey at 42 is a unique opportunity for hands-on learning,
            problem-solving, and collaboration among peers. Along the way, I am
            focused on developing not only technical competencies but also a
            mindset oriented toward innovative solutions.
          </P>
          <P>
            Open to collaborations and inspiring projects, I am determined to
            make a difference in the field of technology. Whether exploring
            complex algorithms, developing interactive applications, or
            contributing to open-source initiatives, I am eager to tackle
            significant challenges and contribute to an exciting technological
            future.
          </P>
          {/* Add content for Tab 2 here */}
        </Tab>

        <Tab isActive={activeTab === 3}>
          <H2>In search of my first experience.</H2>
          <P>
            Passionate and driven, I am actively seeking opportunities to gain
            valuable work experience. Eager to apply and expand my skills, I am
            on the lookout for roles that will allow me to contribute, learn,
            and grow in a professional setting. Open to diverse challenges, I am
            ready to embark on a journey where I can make a meaningful impact
            while honing my abilities. Let&apos;s connect and explore the
            possibilities of working together!
          </P>
          <MyButton2 border={`2px solid ${Color.bordBtn2}`}>
            <StyleLink href="mailto:tales_lima_1982@hotmail.com?subject=Portfolio&body=Corpo do E-mail">
              {' '}
              <img src="/images/email.png" alt="" />
              E-mail
            </StyleLink>
          </MyButton2>
          {/* Add content for Tab 3 here */}
        </Tab>
      </ContentTabs>
    </EsperienceStyle>
  )
}

export default Experience
