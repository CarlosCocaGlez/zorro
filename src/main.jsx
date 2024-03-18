import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './scripts/pages/home';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
