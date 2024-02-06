import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from 'services/store'

import App from './App.tsx'

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  // eslint-disable-next-line no-console
  console.log(message)
})
