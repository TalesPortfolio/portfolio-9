import GlobalStyle, { Container } from './styles'
import Header from '../src/Components/Header'
import SectionHome from './Components/SectionHome'
import AboutStyle from './Components/About'
import ETabsPage from './Components/Experience'
import Project from './Components/Project'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SectionHome />
      <AboutStyle />
      <ETabsPage />
      <Project />
    </>
  )
}

export default App
