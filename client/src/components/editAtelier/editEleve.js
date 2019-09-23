import React from 'react';

import { Link } from 'react-router-dom';
class EditEleve extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nom: '',
      prenom:'',
      classe: '',
      age: '',
      image: '',
      sexe: '',
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
  data.append('prenom', this.state.prenom);
  data.append('classe', this.state.classe);
  data.append('age', this.state.age);
  data.append('sexe', this.state.sexe)

  fetch('https://perso-back.herokuapp.com/api/users/putEleve/'+ this.props.match.params.id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
      console.log('ity n response ' + response);
      console.log('this.props.match.params.id '+this.props.match.params.id);
      
      
    response.json().then((body) => {
      this.setState({ image: `https://perso-back.herokuapp.com/api/users/newEleve/${body.image}` });
      console.log('ity ilay body.image', body.image);

    });
  });
}

  render() {
    return (
      <div id="editEleve" className="container-fluid">
        <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">Retour</i>
          </Link>
        <form onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2 ">
            <div className="row">
              <div className="col-md">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="nom" placeholder="nom" />

              </div>
 
            </div>
            <div className="row">
              <div className="col-md">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prenom" placeholder="prenom" />

              </div>
             </div>
            
            <div className="row">
               <div className="col-md">
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="age" placeholder="age" />
              </div>
              </div>

            <div className="row">
              <div className="col-md">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="classe" placeholder="classe" />
              </div>
              </div>

            <br />
            <div className="row">
              <div className="col-md">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="sexe" placeholder="sexe" />
              </div>
            
            </div>
            <br />
            
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                <button id="validate" className="btn btn-info">Valider</button>
       
            </div>
            
            
          </div>

        </form>
      </div>

    );
  }
}

export default EditEleve;