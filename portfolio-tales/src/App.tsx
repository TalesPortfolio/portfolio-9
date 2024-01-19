import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projetos'
import temaLight from './themes/lights'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoThemeDark, setEstaUsandoThemeDark] = useState(false)

  function trocaThema() {
    setEstaUsandoThemeDark(!estaUsandoThemeDark)
    /*
    esta simplificacao seria o mesmo que
    if(estaUsandoThemeDark){
      false
    }else{
      true
    }
    */
  }

  return (
    <ThemeProvider theme={estaUsandoThemeDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTheme={trocaThema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
