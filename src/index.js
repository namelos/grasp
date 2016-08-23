import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {p, makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {html} from 'snabbdom-jsx'

import {red, green} from './styles/index.styl'

const Card = ({ content }, title) => <div>
  <h1 className={red}>{title}</h1>
  <p className={green}>{content}</p>
</div>

const main = () => ({
  DOM: xs.of({title: 'my card', content: 'my content: here is my article'})
    .map(({ title, content }) =>
      <Card content={content}>title</Card>)
})

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
})

