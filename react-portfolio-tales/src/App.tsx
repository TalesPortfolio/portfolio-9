import GlobalStyle, { Container } from './styles'
import Header from '../src/Components/Header'
import SectionHome from './Components/SectionHome'
import AboutStyle from './Components/About'
import ETabsPage from './Components/Experience'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SectionHome />
      <AboutStyle />
      <ETabsPage />
    </>
  )
}

export default App
