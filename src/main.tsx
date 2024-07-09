import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { AllRoutes } from '@/Routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AllRoutes />
  </React.StrictMode>,
)
