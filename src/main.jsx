import React from 'react'
import ReactDOM from 'react-dom/client'
import HooksApp from './HooksApp.jsx'
import './index.css'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterHook } from './01-useState/CounterHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterHook/>
  </React.StrictMode>,
)
