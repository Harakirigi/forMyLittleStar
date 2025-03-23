import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import './index-media.css'
import App from './App.jsx'
import RouteWatcher from './functions/RouterWatcher.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <RouteWatcher></RouteWatcher>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
