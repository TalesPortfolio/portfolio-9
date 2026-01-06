import { Card, Span, Link, Descrisao, TechContent } from './styles'
import { P, H2 } from '../About/styles'
import MyButton2 from '../Button'
import { Color } from '../../styles'

export type Props = {
  h2?: string
  p?: string
  tecnologia?: string // Corrected typo here
  link?: string
  descricao: string
}

const Cards = (props: Props) => {
  // Função para formatar o texto das tecnologias com destaque nos títulos
  const formatTecnologia = (text?: string) => {
    if (!text) return null

    // Regex para encontrar padrões como "Frontend:", "Backend:", etc.
    const parts = text.split(/(\b[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)?\s*:)/g)

    return parts.map((part, index) => {
      // Se for um título (termina com :)
      if (part.match(/\b[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)?\s*:$/)) {
        return <strong key={index}>{part}</strong>
      }
      return part
    })
  }

  return (
    <Card>
      <div>
        <H2>{props.h2}</H2>
        {props.p && <P>{props.p}</P>}
      </div>

      <TechContent>
        <Descrisao>{props.descricao}</Descrisao>
        <Span>
          <P>{formatTecnologia(props.tecnologia)}</P>
        </Span>
      </TechContent>

      <MyButton2 border={`2px solid ${Color.bordBtn2}`}>
        {' '}
        <Link href={props.link} target="_blank" rel="noreferrer">
          View
        </Link>{' '}
      </MyButton2>
    </Card>
  )
}

export default Cards
