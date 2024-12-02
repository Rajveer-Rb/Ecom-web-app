import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider domain="dev-1pp5apr4b0d786nh.us.auth0.com" clientId="N3proQkIGw1SrjPmNsU4o0n2xVqkV125" authorizationParams={{redirect_uri: window.location.origin}}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Auth0Provider>
)
