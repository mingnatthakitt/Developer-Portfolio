import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
//import App from "./WormholeDARK";
//import TunnelDARK from "./components/TunnelDARK";

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)