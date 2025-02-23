import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SlipProvider } from './providers/slip.provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlipProvider>
      <App />
    </SlipProvider>
  </StrictMode>,
)
