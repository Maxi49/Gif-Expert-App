import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterHook } from './01-useState/CounterHook.jsx'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
