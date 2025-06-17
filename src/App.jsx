import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ShopCategories from "./Components/ShopCategories"
import Footer from "./Components/footer"




function App() {

  return (
    
    
      <div>
      <Header/>
     

       
        <main>
          <Outlet/>
        </main>
        <footer>
        <Footer/>
        </footer>
      </div>
      
    
  )
}

export default App
 