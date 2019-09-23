import React from 'react';

class Particulier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nom: '',
      prenom:'',
      email: '',
      phone: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}


onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
  console.log('ity le local ra azo de mlay'+ localStorage.loc);
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('nom', this.state.nom);
  data.append('prenom', this.state.prenom);
  data.append('email', this.state.email);
  data.append('phone', this.state.phone)

  fetch('https://perso-back.herokuapp.com/api/users/particulier/', {
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((body) => {
      console.log('ity ilay body', body);

    });
  });
}

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2 container">
            <div className="row">
              <div className="col-xs-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="nom" placeholder="Votre nom" />

              </div>
              <div className="col-xs-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prenom" placeholder=" Votre Prenom" />
                
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-xs-6">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="email" placeholder="email" />
              </div>

              <div className="col-xs-6">

                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="phone" placeholder="Votre Numero" />

              </div>
            </div>
           
            <br />
            
                <button id="validate" className="btn btn-info">Valider</button>
            
            
          </div>

        </form>
      </div>

    );
  }
}

export default Particulier;

