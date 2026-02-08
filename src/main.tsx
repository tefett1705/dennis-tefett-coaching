import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TextSizeProvider } from './context/TextSizeContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TextSizeProvider>
        <App />
      </TextSizeProvider>
    </BrowserRouter>
  </StrictMode>,
)
