import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropAtelier from "../propAtelier/propAtelier";
import Ajoutatelier from "../newAtelier/NewAtelier"
import AjoutEleve from "../newAtelier/eleve"
//import Menu from "../design/menu/menu"
import EleveList from "./listEleve"
 import { Link} from 'react-router-dom'
class Dashboard extends Component {

  
onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();
};
  render() {
    console.log('localStorage.local sur dashbord'+localStorage.id);
    
    //const { user } = this.props.auth;

    return (
      
      <div>
       
      <div className="container-fluid" id="dash">
      <div className=" valign-wrapper">
        <div className="container-fluid">
        
        <Link to="/Activiter" className="btn-flat waves-effect">
              <i className="material-icons left">Retour</i>
          </Link>
        <div className="row">
          <div className="col-md-2">
            <button id="ajoutbouton" onClick={()=>{
              document.getElementById('ajoutatelier').style.display = "block"
              document.getElementById('tableau').style.display ="none"
               document.getElementById('ajoutEleve').style.display = "none"
               document.getElementById('eleve').style.display = "none"
            }}  className="btn btn-large waves-effect waves-light hoverable  accent-3">
                Ajoute pub
            </button> <br/>
            <button  id="listerbout" onClick={()=>{
                  document.getElementById('tableau').style.display = "block"
                  document.getElementById('ajoutatelier').style.display = "none"
                   document.getElementById('ajoutEleve').style.display = "none"
                   document.getElementById('eleve').style.display = "none"
              }}  className="btn btn-large waves-effect waves-light hoverable  accent-3">
                  Listes pub
              </button>
              <br/>
                 <button   onClick={()=>{
                  document.getElementById('ajoutEleve').style.display = "block"
                  document.getElementById('ajoutatelier').style.display = "none"
                  document.getElementById('tableau').style.display = "none"
                   document.getElementById('eleve').style.display = "none"
              }}  className="btn btn-large waves-effect waves-light hoverable  accent-3">
                  Ajouter eleve
              </button>
                <br/>

              <button  onClick={()=>{
                  document.getElementById('eleve').style.display = "block"
                  document.getElementById('ajoutatelier').style.display = "none"
                   document.getElementById('ajoutEleve').style.display = "none"
                   document.getElementById('tableau').style.display = "none"
              }}  className="btn btn-large waves-effect waves-light hoverable  accent-3">
                  Listes eleves
              </button>
                <br/>
            <button id="Deconnect"  
              style={{
                width: "150px",
                borderRadius: "5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable  accent-3"
            >
              Deconnect
            </button>
          </div>
          <Ajoutatelier/>
          <PropAtelier/>
           <AjoutEleve/>
           <EleveList/>
        </div>
        </div>
      </div>
      
      </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
