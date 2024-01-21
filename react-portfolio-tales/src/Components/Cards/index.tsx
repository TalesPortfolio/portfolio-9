import { Card, Span } from './styles'
import { P, H2 } from '../About/styles'
import MyButton2 from '../Button'
import { Color } from '../../styles'

export type Props = {
  h2?: string
  p?: string
  tecnologia?: string // Corrected typo here
  link?: string
}

const Cards = (props: Props) => (
  <Card>
    <H2>{props.h2}</H2>
    <P>{props.p}</P>
    <Span>
      <P>{props.tecnologia}</P>
    </Span>

    <MyButton2 border={`2px solid ${Color.bordBtn2}`}>
      {' '}
      <a href={props.link} target="_blank" rel="noreferrer">
        View
      </a>{' '}
    </MyButton2>
  </Card>
)

export default Cards
