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
          descricao="Technologies used in the project:"
          tecnologia=" HTML, Sass, Bootstrap, JavaScript.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/github.jpg" />
        <Cards
          link="https://searching-git.vercel.app/"
          h2="Search Git-User"
          descricao="Technologies used in the project:"
          tecnologia="HTML, CSS, Bootstrap, TypeScript, Vite.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/game.webp" />
        <Cards
          link="https://games-liart-zeta.vercel.app/"
          h2="Game store"
          descricao="Technologies used in the project:"
          tecnologia="HTML, styled-components, TypeScript, React, Redux.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="images/massaMuscular.jpg" />
        <Cards
          link="https://www.robertocoach.lu/"
          h2="robertocoach.lu"
          descricao="Technologies used in the project:"
          tecnologia="HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/disney.webp" />
        <Cards
          link="https://cloney-disneyplus.vercel.app/"
          h2="Clone Disney+"
          descricao="Technologies used in the project:"
          tecnologia="HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/resto.png" />
        <Cards
          link="https://resto-lux.vercel.app/"
          h2="Restaurant"
          descricao="Technologies used in the project:"
          tecnologia="HTML, Sass, JavaScript.
"
        />
      </ContainerCards>
    </Container>
  </ProjectStyle>
)

export default Project
