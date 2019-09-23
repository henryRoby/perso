
import React from 'react';
import './new.css'

class NewAtelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nom: '',
      prenom:'',
      age: '',
      classe: '',
      sexe: '',
      image: '', 
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('image', this.uploadInput.files[0]);
  data.append('nom', this.state.nom);
  data.append('prenom', this.state.prenom)
  data.append('age', this.state.age);
  data.append('sexe', this.state.sexe);
  data.append('classe', this.state.classe);

  
  fetch('https://perso-back.herokuapp.com/api/users/newEleve/',{
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((body) => {
      this.setState({ image: `https://perso-back.herokuapp.com/api/users/newEleve/${body.image}`});
      console.log('ity ilay body.image', body.image);

    });
  });
}

  render() {
    return (
      <div className="container-fluid"  id="ajoutEleve">
        <form id="editEleve"  onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2">
            <div className="row" >
              <div className="col-md-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="nom" placeholder="nom" />

              </div>

              <div className="col-md-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prenom" placeholder="prenom" />

              </div>

            </div>

            <div className="row">
              <div className="col-md-6">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="age" placeholder="age" />
              </div>

              <div className="col-md-6">

                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="classe" placeholder="classe" />

              </div>
            </div>
   
            <div className="row">
              <div className="col-md-6">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="sexe" placeholder="sexe" />
              </div>
             
            </div>
        
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} id="fichier" type="file" name="image" />
                <button id="validate" className="btn btn-info">Enregistrer</button>
    
            </div>
        
          </div>

        </form>
      </div>

    );
  }
}

export default NewAtelier;
