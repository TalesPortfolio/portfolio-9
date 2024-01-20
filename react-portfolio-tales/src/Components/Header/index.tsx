import { Nav } from './styles'
import { Container } from '../../styles'

const Header = () => (
  <Nav>
    <Container>
      <h2>&lt;TL/&gt;</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
      </ul>
    </Container>
  </Nav>
)

export default Header
