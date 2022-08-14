import React from 'react'
import Carousel from './carousel'
import Navbar from './navbar'
import Restaurant from './restaurant'
import Menu from './menu'
import Reservation from './reservation'
import Location from './location'
import Contact from './contact'

function App() {
  return (
    <div>
        <div id="Welcome">
  
          <Navbar />

          <Carousel />

        </div>

        <div class="container">
        
        <Restaurant />
        
        <Menu />

        <Reservation />

        <Location />
<br></br>
<br></br>
<br></br>
<br></br>
        <Contact />


        
        <div class="row footer bg-light">
          <div class="col">
            <p class="text-center">Follow us: 
              <a class="social-icon" href="#"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="#"><i class="fab fa-instagram"></i></a></p>
          </div>
          <div class="col">
            <p class="text-center">Copyright &copy; 2022</p>
          </div>
          <div class="col">
            <p class="text-center">Powered by: <a href="#">with love</a></p>
          </div>
        </div>
    </div>
  </div>


  )
  
}

export default App