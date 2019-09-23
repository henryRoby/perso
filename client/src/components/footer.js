import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  id="fotera" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
              <MDBCol md="3">
              <h2>Pages</h2>
               <ul>
                  <li><a href="#">Fondation Zazakely</a></li>
                  <li><a href="#">Qui sommes-nous ?</a></li>
                  <li><a href="#">Contacter Zazakely</a></li>
                  <li><a href="#">Programmes à Madagascar</a></li>
                  <li><a href="#">Les enfants en tutelle</a></li>
                  <li><a href="#">Partenariats</a></li>
                  <li><a href="#">Liste des partenaires</a></li>
                  <li><a href="#">« Les P’tites Plumes »</a></li>
                 
                  
                  

                </ul>
              </MDBCol>
              <MDBCol md="3">
              <h2>Nous aider</h2>
                <ul>
                  <li><a href="#">Liste des partenaires</a></li>
                  <li><a href="#">Acheter nos produits solidaires</a></li>
                  <li><a href="#">Devenir membre ou bénévole</a></li>
                  <li><a href="#">Devenir partenaire</a></li>
                  <li><a href="#">Parrainer</a></li>
                  <li><a href="#">Vidéos</a></li>
                  <li><a href="#">Actualités</a></li>
                   <li><a href="#">Galerie de photos</a></li>
                </ul>
              </MDBCol>

              <MDBCol md="3">
              <h2>Dernières actualités</h2>
                <ul>
                <li><a href="#">Faire un don</a></li>
                  <li><a href="#">Reportage St Sylvestre</a></li>
                  <li><a href="#">Bonne année 2019</a></li>
                  <li><a href="#">Protégé : Focus Fiderana et Niranto</a></li>
                  <li><a href="#">Protégé : Rapport d’activités 2017</a></li>
                  <li><a href="#">Soirée du Réveillon 2018</a></li>
                  
                </ul>
              </MDBCol>
              <MDBCol md="3">
              <h2>Contactez-nous</h2>
                <ul>
                   <li>Responsable: </li>
                  
                </ul>
              </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.facebook.com/henry.roby.98">RAZANABELAHY Henri</a>
          
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;