import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// font
import '@fontsource-variable/open-sans';
import './index.css'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS
import * as bootstrap from 'bootstrap'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)