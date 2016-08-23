import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {p, makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {html} from 'snabbdom-jsx'

import { OAuth } from 'oauth'

import {Card} from './component'

const main = () => ({
  DOM: xs.of({title: 'my card', content: 'my content: here is my article'})
    .map(({ title, content }) =>
      <Card content={content}>title</Card>)
})

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
})

