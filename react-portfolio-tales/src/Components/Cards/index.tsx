import { Card } from './styles'
import { P, H2 } from '../About/styles'
import MyButton from '../Button'

export type Props = {
  h2?: string
  p?: string
  tecnoligia?: string
}

const Cards = (props: Props) => (
  <Card>
    <H2>{props.h2}</H2>
    <P>{props.p}</P>
    <P>{props.tecnoligia}</P>
    <MyButton>Visualizar</MyButton>
  </Card>
)

export default Cards
