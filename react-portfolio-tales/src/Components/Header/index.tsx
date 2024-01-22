import { Nav, Img } from './styles'
import { Container } from '../../styles'

const Header = () => (
  <Nav>
    <Container>
      <h2>
        <Img src="images/logo.png" alt="" />
      </h2>
      <ul>
        <li>
          {/* Adicione o identificador "home" à seção Home */}
          <a href="#home">Home</a>
        </li>
        <li>
          {/* Adicione o identificador "about" à seção About */}
          <a href="#about">About</a>
        </li>
        <li>
          {/* Adicione o identificador "experience" à seção Experience */}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {/* Adicione o identificador "project" à seção Project */}
          <a href="#project">Project</a>
        </li>
      </ul>
    </Container>
  </Nav>
)

export default Header
