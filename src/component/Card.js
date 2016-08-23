import { html } from 'snabbdom-jsx'
import { card } from './Card.styl'

export const Card = ({content}, [title]) => <div className={card}>
  <h1>{title}</h1>
  <p>{content}</p>
</div>