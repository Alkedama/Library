import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import './assets/style.scss'

document.querySelector('#app').innerHTML = `
  <div>

  </div>
`

setupCounter(document.querySelector('#counter'))
