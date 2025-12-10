import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
     <GoogleOAuthProvider clientId='586184996270-npfpd0h0d35bv1s3s4n65dql5v48601j.apps.googleusercontent.com' >
       <App />
     </GoogleOAuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
