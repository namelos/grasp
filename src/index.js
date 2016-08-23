import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {p, makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {html} from 'snabbdom-jsx'

import './index.styl'

const main = () => ({
  DOM: xs.of(<div>...</div>)
})

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
})


