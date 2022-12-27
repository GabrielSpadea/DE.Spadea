import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ComponenteContenedor from './ComponenteContenedor/ComponenteContenedor'


function App() {
  
  

  return (
    <>
      <NavBar />
   <ItemListContainer saludo = {"Hola, en construccion"} />
   </>
  )
}

export default App
//  Navbar - ItemListContainer(home)
