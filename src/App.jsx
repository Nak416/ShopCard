import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ShopCategories from "./components/ShopCategories"
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
 