import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Task1/App'
import './Task1/Ppt-task'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)