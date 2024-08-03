import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
//to handle client-side routing in a React application. It uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.

)
