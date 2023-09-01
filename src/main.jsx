import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

const domain = import.meta.env.REACT_APP_DOMAIN
const clientId = import.meta.env.REACT_APP_CLIENT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      domain="https://karts.kinde.com"
      clientId="17963608aac147c3b529405dd6ce1285"
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>,
)
