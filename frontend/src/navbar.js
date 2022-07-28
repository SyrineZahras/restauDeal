import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <a class="navbar-brand" href="#Welcome">
              <img src="assets/images/logo.png" width="50" height="50" class="d-inline-block" alt="" /> RestauDeal
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#Welcome">Welcome</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Restaurant">Nos Restaurants</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Menu">Nos offres</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Reservation">Reservation</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#OurLocation">Près de moi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Nous Contacter</a>
                </li>
              
              </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar