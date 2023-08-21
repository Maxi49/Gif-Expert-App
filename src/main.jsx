import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterHook } from './01-useState/CounterHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm'
import RenderComponents from './RenderComponents'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderComponents/>
  </React.StrictMode>,
)
