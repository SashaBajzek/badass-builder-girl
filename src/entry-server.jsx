import React from 'react'
import {renderToString} from 'react-dom/server'
import App from './components/App/App'

// Used only at build time by scripts/prerender.js.
export const render = () =>
  renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
