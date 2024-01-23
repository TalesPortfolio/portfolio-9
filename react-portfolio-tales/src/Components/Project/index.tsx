import { ProjectStyle, ContainerCards, Container } from './styles'
import Cards from '../Cards'

const Project = () => (
  <ProjectStyle id="project">
    <h3 style={{ padding: '15px' }}>Projects</h3>
    <Container>
      <ContainerCards>
        <img src="./images/spacex.jpg" />
        <Cards
          link="https://space-x-mauve.vercel.app/"
          h2="Clone SpaceX"
          tecnologia="Technologies used in the project: HTML, Sass, Bootstrap, JavaScript.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/github.jpg" />
        <Cards
          link="https://searching-git.vercel.app/"
          h2="Search Git-User"
          tecnologia="Technologies used in the project: HTML, CSS, Bootstrap, TypeScript, Vite.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/game.webp" />
        <Cards
          link="https://games-redux-three.vercel.app/"
          h2="Game store"
          tecnologia="Technologies used in the project: HTML, styled-components, TypeScript, React, Redux.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="images/massaMuscular.jpg" />
        <Cards
          link="https://www.robertocoach.lu/"
          h2="robertocoach.lu"
          tecnologia="Technologies used in the project: HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/disney.webp" />
        <Cards
          link="https://cloney-disneyplus.vercel.app/"
          h2="Clone Disney+"
          tecnologia="Technologies used in the project: HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/resto.png" />
        <Cards
          link="https://resto-lux.vercel.app/"
          h2="Restaurant"
          tecnologia="Technologies used in the project: HTML, Sass, JavaScript.
"
        />
      </ContainerCards>
    </Container>
  </ProjectStyle>
)

export default Project
