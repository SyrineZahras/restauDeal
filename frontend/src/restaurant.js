import React, { Component } from 'react'; 
import axios from 'axios'; 
import './restau.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';


class Restaurant extends Component {
  state = {
    data: [],
    id: 0,
    nom: null,
    lieu: null,
    message: null,
    promo: String,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  /* ajout des données */

  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", { 
      id: idToBeAdded,
      message: message
    });
  };

  /* suppression des données */
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  /* mise à jour des données */
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div class="row" id="Restaurant">
            <div class="col navMenu">
                <h2 class="text-center" >~ Nos Restaurants ~</h2>
            </div>
          </div>
        
          {data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
            <div style={{ padding: "30px" }} key={dat}>
              
              <MDBRow>
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className='p'>{dat.nom}</MDBCardTitle>
            <MDBCardText>
              Localisation: {dat.lieu} <br />
             <a className='ita'> Promo: {dat.promo} </a><br />
              Description: {dat.message}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>

            </div>
          ))}
   
        
      </div>
    );
  }
}




export default Restaurant;

