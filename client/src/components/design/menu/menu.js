import React, { Component } from 'react';
import './menu.css'

import SwiftSlider from 'react-swift-slider'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default class Menu extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        collapseID: "",
        redirect: false
    }
    toggleCollapse = collapseID => () => this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    toggle = nr => () => {
        let modalNumber = "modal" + nr; this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {

          const data = [
      { 'id': '1', 'src': 'https://p1.storage.canalblog.com/17/01/421949/106978478_o.jpg' },
      
      { 'id': '3', 'src': 'https://p0.storage.canalblog.com/02/68/421949/115806549_o.jpeg' },
      { 'id': '4', 'src': 'https://i.ytimg.com/vi/DxUi8I5aSgc/maxresdefault.jpg' },
      { 'id': '5', 'src': 'https://s3-eu-west-1.amazonaws.com/com.okpal.media/o/7/qpm6G-89739663-o.jpg' }
    ];
        
        return (
            <div>
                <MDBNavbar  dark expand="md" id="navbar">
                    <MDBNavbarBrand>
                        <div id="contentlogo"><img src="" alt="logo" id="logo" /></div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>

                            <MDBNavItem >
                                <MDBNavLink to="/" className="nav-header">Accueil</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/Activiter" className="nav-header">Activités</MDBNavLink>
                            </MDBNavItem>

                             <MDBNavItem>
                                <MDBNavLink to="/" className="nav-header">Nouvelles de jours</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="/listeEleve" className="nav-header"> Suivi des enfants</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="/" className="nav-header">Photos</MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/login" className="nav-header" rounded onClick={this.toggle(1)}></MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>

                 <div className="slide">
                      <SwiftSlider data={data} />
                  </div>
            </div>
        );
    }
}