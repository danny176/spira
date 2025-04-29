import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //render gør sådan, at der kommer alt ind på skærmen
  <StrictMode>
    <App />
  </StrictMode>,
)

//viser og skriver siden