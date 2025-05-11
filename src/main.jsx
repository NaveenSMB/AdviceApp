import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdviceApp } from './formSamples/AdviceApp'
// import { RegFrm } from './formSamples/RegFrm'
// import { QrCode } from './QrCode'
// import './index.css'      ----->      this is for UserCard
// import { UserCard } from './UserCard'
// import App from './App.jsx'
// import './QrCode.css'
// import { Cart } from './formSamples/Cart'
// import { UserDetails } from './formSamples/UserDetails'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* 
  
  <App /> 
  <UserCard /> 
  <QrCode /> 
  <Cart /> 
  <UserDetails />
  <RegFrm />

  */}

    <AdviceApp />

  
  </StrictMode>,
)
