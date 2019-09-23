import React, { Component } from 'react';
import axios from 'axios';


import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';

export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    

    componentDidMount() {
        axios.get(`https://perso-back.herokuapp.com/api/users/newArticle/${localStorage.id}`)
            .then(response => {
                console.log('user-article ==== ', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })



    }

    liste() {
        return <table className="table table-bordered" id="tableau">
            <thead>
                <tr>
                    <th>titre</th>
                    <th>description</th>
                    <th>photo</th>
                    <th>Heure</th>
                    <th>Date</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <tr key={obj._id}>
                            <td>{obj.titre}</td>
                            <td id="des">{obj.description}</td>
                            <td>
                                <img width="150px" height="50px" src={'https://perso-back.herokuapp.com/api/users/newArticleImage/' + obj.image} alt="pdp" />
                            </td>
                            <td>{obj.debut} </td>
                            <td>{obj.date}</td>
                            <td>
                                <Link to={"/modifierAtl/" + obj._id}  class="btn btn-warning">Modifier</Link> <br/>
                              
                                     <button  class="btn btn-danger" onClick={(e)=>{
                                    //e.preventefault()
                                    axios.delete("https://perso-back.herokuapp.com/api/users/delete/"+ obj._id)
                                    .then(
                                        console.log("suppression avec succes"),
                                        console.log(obj._id)
                                        )
                                    .catch(error => console.log(error))
                                }}>supprimer</button> <br/>

                            {obj.visib == true ? (<button  class="btn btn-success" onClick={(e) => {
                                e.preventDefault()
                                axios.get(" https://perso-back.herokuapp.com/api/users/cacherAtl/" + obj._id).then(res => {
                                    axios.get('https://perso-back.herokuapp.com/api/users/newArticle/' + localStorage.id).then(res => {
                                        console.log(res.data)
                                        this.setState({ profil: res.data })
                                    })
                                    console.log(res.data)
                                })


                            }}>Activer</button>) : (<button   class="btn btn-warning" onClick={(e) => {
                                e.preventDefault()
                                console.log(obj._id)
                                axios.get("https://perso-back.herokuapp.com/api/users/affichAtl/" + obj._id).then(res => {
                                    axios.get('https://perso-back.herokuapp.com/api/users/newArticle/' + localStorage.getItem('id')).then(res => {
                                        console.log(res.data)
                                        this.setState({ profil: res.data })
                                    })
                                    console.log(res.data)
                                })

                            }}>desactiver</button>)}

                            </td>
                        </tr>

                    })) : ('')
                }
            </tbody>
        </table>
    }
    render() {
        return (
            <div className='app1'>
                {this.liste()}
            </div>
        );
    }
}