import xs from 'xstream'
import { run } from '@cycle/xstream-run'
import { p, makeDOMDriver } from '@cycle/dom'
import { html } from 'snabbdom-jsx'

const main = ({}) => ({
  DOM: xs.periodic(1000).map(i =>
    <p>{i} seconds...</p>)
})

run(main, { DOM: makeDOMDriver('#app') })


