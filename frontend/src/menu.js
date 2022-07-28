import React from 'react'
import Modal from './Modal'
import { useState } from 'react';

function Menu() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
        <div class="row" id="Menu">
          <div class="col navMenu">
                <h2 class="text-center" >~ Nos offres ~</h2>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-4" data-aos="slide-up">
            <div class="card view zoom">
                <img class="card-img-top img-fluid " src="assets/images/meat-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ CHICKEN HOUSE -15% ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Plat Chawarma/Escalope </li>
                    <li class="list-group-item">Cheese Nane Chawarma</li>
                  <li class="list-group-item">Cheese Nane Escalope</li>
                  <li class="list-group-item">Salade Super Supreme </li>
                  <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
              <a class="social-icon" href="https://www.facebook.com/Chiken.House.TN"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="https://www.instagram.com/chickenhouse41200/?hl=fr"><i class="fab fa-instagram"></i></a></p></li> 
                  <center><button class="cart-btn" className="openModalBtn" onClick={() => {setModalOpen(true);}}>
                    <i class="fas fa-gift"></i> Obtenez votre code promo </button>                
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}</center>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid " src="assets/images/fish-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Fish Menu ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Carpaccio di polpo</li>
                    <li class="list-group-item">Cozze al verde</li>
                  <li class="list-group-item">Cocktail di gamberi</li>
                  <li class="list-group-item">Risotto alla crema di scampi</li>
                  <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
              <a class="social-icon" href="https://www.facebook.com/Chiken.House.TN"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="https://www.instagram.com/chickenhouse41200/?hl=fr"><i class="fab fa-instagram"></i></a></p></li> 
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid" src="assets/images/menu-vegetarian.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Vegetarian Menu ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Parmigiana di melanzane</li>
                    <li class="list-group-item">Strudel con ricotta e spinaci</li>
                  <li class="list-group-item">Polpette di spinaci e ricotta</li>
                  <li class="list-group-item">Frittata di patate al forno</li>
                  <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
              <a class="social-icon" href="https://www.facebook.com/Chiken.House.TN"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="https://www.instagram.com/chickenhouse41200/?hl=fr"><i class="fab fa-instagram"></i></a></p></li> 
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid " src="assets/images/fish-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Fish Menu ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Carpaccio di polpo</li>
                    <li class="list-group-item">Cozze al verde</li>
                  <li class="list-group-item">Cocktail di gamberi</li>
                  <li class="list-group-item">Risotto alla crema di scampi</li>
                  <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
              <a class="social-icon" href="https://www.facebook.com/Chiken.House.TN"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="https://www.instagram.com/chickenhouse41200/?hl=fr"><i class="fab fa-instagram"></i></a></p></li> 
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid" src="assets/images/menu-vegetarian.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Vegetarian Menu ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Parmigiana di melanzane</li>
                    <li class="list-group-item">Strudel con ricotta e spinaci</li>
                  <li class="list-group-item">Polpette di spinaci e ricotta</li>
                  <li class="list-group-item">Frittata di patate al forno</li>
                  <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
              <a class="social-icon" href="https://www.facebook.com/Chiken.House.TN"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="https://www.instagram.com/chickenhouse41200/?hl=fr"><i class="fab fa-instagram"></i></a></p></li> 
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid " src="assets/images/fish-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Fish Menu ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Carpaccio di polpo</li>
                    <li class="list-group-item">Cozze al verde</li>
                  <li class="list-group-item">Cocktail di gamberi</li>
                  <li class="list-group-item">Risotto alla crema di scampi</li>
                  <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
              <a class="social-icon" href="https://www.facebook.com/Chiken.House.TN"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="https://www.instagram.com/chickenhouse41200/?hl=fr"><i class="fab fa-instagram"></i></a></p></li> 
                </ul>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu