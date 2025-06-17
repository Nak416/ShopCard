import App from './App.jsx'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from'./Page/Home.jsx'
import About from './Page/About.jsx'
import Service from './Page/Service.jsx'
import Contact from './Page/Contact.jsx'
import ViewProduct from './Page/ViewProduct.jsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import {ProductProvider} from './store/ProductContext.jsx'

import './index.css'


createRoot(document.getElementById('root')).render(
 <StrictMode>

  <ProductProvider>
    <BrowserRouter>
 
    <Routes>
      <Route path='/' element={ <App />}>
      <Route path='/' element={ <Home />}/>
      <Route path='/about' element={ <About />}/>
      <Route path='/service' element={ <Service />}/>
      <Route path='/contact' element={ <Contact />}/>
      <Route path='/view'element={ <ViewProduct />}/>
      </Route>
    </Routes>
  
  </BrowserRouter>
  </ProductProvider>

</StrictMode>,
)