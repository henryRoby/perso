import React, { Component } from 'react';
import axios from 'axios';
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css';
//import { Link } from 'react-router-dom';
import Header from '../menu'

export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    

    componentDidMount() {
        axios.get(`https://perso-back.herokuapp.com/api/users/newEleve`)
            .then(response => {
                console.log('user-article ==== ', response.data)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>
           <Header/>
        <div >
            
            <div className="container-fluid">

                <div className="row view-group">
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <div key={obj._id} className="item col-xs-3 col-lg-3" id="suivi">
                            <center >
                                <img width="290px" height="220px" src={'https://perso-back.herokuapp.com/api/users/newEleveImage/' + obj.image} alt="pdp" /><br/><br/>
                                   <label><strong>Nom</strong></label>:&nbsp;{obj.nom}<br/>
                                   <label><strong>Prenom</strong> </label>:&nbsp;{obj.prenom}<br/>
                                    <label><strong>Age</strong> </label>:&nbsp;{obj.age}<br/>
                                    <label><strong>Classe</strong></label>:&nbsp;{obj.classe}<br/>     
                            </center>
                        </div>

                    })) : ('')
                }
                </div>
            </div>
        </div>
       </div>
    }
    render() {
        return (
            <div className='app'>
                {this.liste()}
            </div>
        );
    }
}


