import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descrisao, ButaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Tales Lima</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        tales1982
      </Paragrafo>
      <Descrisao tipo="principal" fontSize={12}>
        Engenheiro de Software
      </Descrisao>
      <ButaoTema onClick={props.trocaTheme}>Troca tema</ButaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
