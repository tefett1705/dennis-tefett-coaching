import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TextSizeProvider } from './context/TextSizeContext'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TextSizeProvider>
          <App />
        </TextSizeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
