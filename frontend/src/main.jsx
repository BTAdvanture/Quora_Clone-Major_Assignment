import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import { Provider } from 'react-redux'
import store from './app/store'
// import en from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
// TimeAgo.addLocale(en)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {store} > <App /> </Provider>
  </React.StrictMode>,
)
