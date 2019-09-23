import React from 'react';
import { Link } from 'react-router-dom';
class EditAtelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titre: '',
      utilisateur:'',
      debut: '',
      description: '',
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
  data.append('titre', this.state.titre);
  data.append('debut', this.state.debut);
  data.append('idUser', localStorage.id);
  data.append('description', this.state.description)

  fetch('https://perso-back.herokuapp.com/api/users/putArticle/'+ this.props.match.params.id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
      console.log('ity n response ' + response);
      console.log('this.props.match.params.id '+this.props.match.params.id);
      
      
    response.json().then((body) => {
      this.setState({ image: `https://perso-back.herokuapp.com/api/users/newArticle/${body.image}` });
      console.log('ity ilay body.image', body.image);

    });
  });
}

  render() {
    return (
      <div id="modifAtelier" className="container-fluid">
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
                  name="titre" placeholder="Titre" />

              </div>
              
            </div>
            
            <div className="row">
              <div className="col-md">
              <input className="form-control" type="time"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="debut" placeholder="Debut" />
              </div>

              
            </div>
           
         
            <div className="row">
              <div className="col-md">
              <input className="form-control" type="date"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="date" placeholder="Date" />
              </div>
            
            </div>
          

            <div className="row">
              <div className="col-md">

                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="description" placeholder="Description" />

              </div>
            
            </div>
           
            
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                <button id="validate" className="btn btn-info">Publier</button>
       
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default EditAtelier;