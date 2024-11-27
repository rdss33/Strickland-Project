import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import FloatingRibbon from './components/FloatingRibbon'
import TestimonialsArea from './components/TestimonialsArea'
import ServicesZone from './components/Services Zone/ServicesZone'

function App() {

  return (
    <>
      <Header/>
      <FloatingRibbon anchorClass="merriweather-regular">BOOK NOW</FloatingRibbon>
      <TestimonialsArea></TestimonialsArea>
      <ServicesZone></ServicesZone>
    </>
  )
}

export default App
