import React from 'react'
import Modali, { useModali } from 'modali';
import Post from "./components/Post";



function Menu() {

  const [firstModal, toggleFirstModal] = useModali();
  const [secondModal, toggleSecondModal] = useModali();
  const [thirdModal, toggleThirdModal] = useModali();


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
                <center>
                  <button onClick={toggleFirstModal}> <i class="fas fa-gift"></i> 
                  {" "} Obtenez votre Code Promo
                  </button>
                </center>
                <Modali.Modal {...firstModal}>
                  <Post />
                </Modali.Modal>
              </ul>
            </div>
          </div>
        </div>



        <div class="col-md-4" data-aos="slide-up">
          <div class="card">
            <img class="card-img-top img-fluid " src="assets/images/fish-menu.jpg" />
            <div class="card-body">
              <h5 class="card-title">~ La Spigola Goulette -10% ~</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Calamar Doree </li>
                <li class="list-group-item">Spaghetti Fruit de Mer</li>
                <li class="list-group-item">Soupe de Poisson</li>
                <li class="list-group-item">Crevette</li>
                <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
                  <a class="social-icon" href="https://www.facebook.com/pages/La-Spigola-La-Goulette/112767610496521"><i class="fab fa-facebook"></i></a>
                  <a class="social-icon" href="https://www.instagram.com/explore/locations/245619068/tunisia/la-goulette/ristorante-la-spigola-la-goulette-tunis/"><i class="fab fa-instagram"></i></a></p></li>
                <center>
                  <button onClick={toggleSecondModal}> <i class="fas fa-gift"></i> 
                  {" "} Obtenez votre Code Promo
                  </button>
                </center>
                <Modali.Modal {...secondModal}>
                <Post />
                </Modali.Modal>
              </ul>
            </div>
          </div>
        </div>




        <div class="col-md-4" data-aos="slide-up">
          <div class="card">
            <img class="card-img-top img-fluid " src="assets/images/phobo.jpg" />
            <div class="card-body">
              <h5 class="card-title">~ HOBO Manar City -25% ~</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Brochettes marinées à la sauce </li>
                <li class="list-group-item">Chicken Quarter</li>
                <li class="list-group-item">Half Chicken</li>
                <li class="list-group-item">Full Chicken</li>
                <li class="list-group-item"><p class="text-center"> Rejoignez nous sur: <br />
                  <a class="social-icon" href="https://www.facebook.com/HoboTunisie/"><i class="fab fa-facebook"></i></a>
                  <a class="social-icon" href="https://www.instagram.com/hobo.tn/?hl=fr"><i class="fab fa-instagram"></i></a></p></li>
                <center>
                  <button onClick={toggleThirdModal}> <i class="fas fa-gift"></i> 
                  {" "} Obtenez votre Code Promo
                  </button>
                </center>
                <Modali.Modal {...thirdModal}>
                <Post />
                </Modali.Modal>
              </ul>
            </div>
          </div>
        </div>







      </div>
    </div>
  )
}

export default Menu