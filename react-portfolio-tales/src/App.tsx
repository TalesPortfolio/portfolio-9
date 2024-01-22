import GlobalStyle, { Container } from './styles'
import Header from '../src/Components/Header'
import SectionHome from './Components/SectionHome'
import AboutStyle from './Components/About'
import ETabsPage from './Components/Experience'
import Project from './Components/Project'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SectionHome />
      <AboutStyle />
      <ETabsPage />
      <Project />
      <Footer />
    </>
  )
}

export default App
