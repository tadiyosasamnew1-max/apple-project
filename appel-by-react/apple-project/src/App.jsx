import { useState } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Fifth from './components/fifth/Fifth' 
import Fourth from './components/fourth/Fourth'
import Second from './components/second/Second'
import Third from './components/third/Third'
import Sixth from './components/sixth/Sixth'
import './css/styles.css'
function App() {
  
  return (
    <>
    <Header/>
   
    <Main />
     <Second />
      <Third/>
       <Fourth />
     <Fifth />
    <Sixth />
     <Footer/>

    
    </>
  )
}

export default App
