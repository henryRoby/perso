import React, { Component } from 'react';
import axios from 'axios';


export default class ListTout extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('https://perso-back.herokuapp.com/api/users/newArticle')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
                console.log('i am a produit', this.state.produit)
            })
            .catch(function (error) {
                console.log(error);
            })



    }

    liste() {
        return <div>

                        <div id="hautList" className="container-fluid">Voir les activites</div>

                    <div className="container">

                    <div className="row">
                         <div className="col-md-8">
                                  {
                            (this.state.produit.length > 0) ? (this.state.produit.filter((params) => params.visib).map((obj) => {
                                return <div className="container-fluid">
                                    <div id="ligne" className="card" key={obj._id}>
                                        <div className="container">
                                            <center><img className="card " width="100%" height="10%"
                                                src={'https://perso-back.herokuapp.com/api/users/newArticleImage/' + obj.image}
                                                alt="pdp" />
                                                </center>
                                            
                                               </div>
                                        <center>
                                        <div className="card-body card-body-cascade">
                                            <center>
                                            <h2 id="description"><span id="nomproduit">{obj.titre}</span></h2></center>
                                                <div >
                                                    <p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; <div id="point">{obj.description}</div> </p>
                                                    <p className="card-text"><strong><span id="description">Date</span></strong>&nbsp;&nbsp; <div id="point">{obj.date}</div> </p>  
                                                </div>
                                                    <p className="card-text"><strong><span id="description">Heure</span></strong>&nbsp;&nbsp; <div id="point">{obj.debut}</div> </p>
                                            </div>
                                            </center>
                                        </div>
                                    </div>

                                    })) : ('')
                                }
                
                         </div>
                         <div id="barakely" className="col-md-4">
                                  <div  className="container-fluid">
                                    <h2> ato le izy e</h2>
                                    <p>
                                        Les enfants en tutelle sont tous issus de familles si démunies qu’elles ne peuvent plus assumer leurs enfants sans les mettre en danger. Les demandes de placement émanent le plus souvent directement des parents ou de membres proches de la famille ou des chefs de quartiers, ou de médecins ou de religieux connaissant très bien la famille. Parfois, ces demandes émanent d’autres centres d’accueil qui estiment que le Nid de Cigognes est plus adapté aux besoins des certains enfants qui leur ont été confiés.

                                        Avant toute prise en charge d’un enfant une enquête sociale est réalisée pour s’assurer qu’aucune autre démarche d’aide à la famille ne serait possible pour permettre éventuellement à l’enfant de rester avec les siens. Dans tous les cas c’est l’intérêt majeur de l’enfant qui est considéré.

                                        Les dossiers de demandes de placement sont soumis au Tribunal d’Instance d’Antananarivo qui octroie les autorisations de Tutelle Provisoire à l’ONG. Ces tutelles sont à renouveler tous les deux ans.

                                        Pour chaque enfant un référent de sa famille est choisi par le Tribunal (père, mère, grande sœur ou grand frère, grand-mère ou grand-père, tante ou oncle ….)

                                        Les relations affectives avec la famille souche sont grandement favorisées. Les parents ou le référent peuvent à tout moment demander à récupérer leur enfant avec la permission du Tribunal d’Instance d’Antananarivo. L’enfant revient dans sa famille si toutes les conditions sont remplies pour assurer sa sécurité et son évolution.


                                    </p>
                                 </div>
                         </div>
                    </div>

                      
                    </div>
        </div>
            }
    render() {
        return (
            <div>
                    {this.liste()}
                </div>
                );
            }
}