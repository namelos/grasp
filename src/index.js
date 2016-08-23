import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {p, makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {html} from 'snabbdom-jsx'

import './index.styl'

const main = () => ({
  DOM: xs.of(<div>...</div>)
})

// const main = ({ DOM }) => ({
//   DOM: DOM.select('input').events('change')
//     .map(x => (console.log(x), x))
//     .map(e => e.target.checked)
//     .startWith(false)
//     .map(toggled => <div>
//       <input type="checkbox"/>Toggle me
//       <p>{ toggled ? 'on' : 'off' }</p>
//     </div>)
// })

// const main = ({DOM, HTTP}) => {
//   const getRandomUser$ = DOM.select('.get-random').events('click')
//     .map(() => {
//       const randomNum = Math.round(Math.random() * 9) + 1
//       return {
//         url: `http://jsonplaceholder.typicode.com/users/${randomNum}`,
//         category: 'users',
//         method: 'GET'
//       }
//     })
//
//   const user$ = HTTP.select('users')
//     .flatten()
//     .map(res => res.body)
//     .startWith(null)
//
//   const vdom$ = user$.map(user => <div className="users">
//     <button className="get-random">Get random user</button>
//     {
//       user && <div className="user-details">
//         <h1 className="user-name">{user.name}</h1>
//         <h4 className="user-email">{user.email}</h4>
//         <a className="user-website" href={user.website}>{user.website}</a>
//       </div>
//     }
//   </div>)
//
//   return {
//     DOM: vdom$,
//     HTTP: getRandomUser$
//   }
// }

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
})


