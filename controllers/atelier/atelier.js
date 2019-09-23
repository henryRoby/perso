const Atelier = require('../../models/Atelier.model');
const Eleve = require ('../../models/eleve')
// const UserCuisiner = require('../../models/User')
const fs = require('fs')

//Create new Article
exports.create = (req, res) => {
        Atelier.find()
        .then(user => {
            var id;
            if (user.length == 0) {
                id = 0
            } else {
                id = parseInt(user[user.length - 1]._id) + 1
            }
            let imageFile = req.files.image;
            let nomImage = id
            res.setHeader('Content-Type', 'text/plain');
        
            imageFile.mv(`${__dirname}/public/${nomImage}.jpg`, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            const atelier = new Atelier({
                _id: id,
                idUser:req.body.idUser,
                titre: req.body.titre,
                description: req.body.description,
                image:nomImage + '.jpg',
                debut: req.body.debut,
                visib:true
            });
            atelier.save()
                .then(() => {
                    Atelier.find()
                        .then(data => {
                            res.send(data);
                        })
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the profil."
                    });
                });
        })
    
};

exports.cacherAtl = (req, res) =>{
    Atelier.findOneAndUpdate({_id:req.params._id}, { 
        visib:false
    
    },{new:true}).then(upd=>res.send(upd)
    )
}

exports.affichAtl = (req, res) =>{
    Atelier.findOneAndUpdate({_id:req.params._id}, {
           
        visib:true
    
    },{new:true}).then(upd=>res.send(upd)
    )
}

//Get un par un image
exports.findOneArticle =(req, res) =>{ 
    try { 
        let picture = fs.readFileSync('./controllers/atelier/public/'+req.params.image)
        console.log('params: ',req.params.image);
        res.write(picture) 
        res.end() 
    } 
    catch (e) { console.log("envoie erroné: ", e); } }


    
exports.findAllArticle = (req, res) => {
    Atelier.find()
        .then(atel => {
            res.send(atel);
        }).catch(err => {
            res.status(500).send(atel => {
                message: err.message || "Something wrong while retrieving profils."
            });
        });
};

// Find a single article with a articleID
exports.findOne = (req, res) => {
    Atelier.find({idUser:req.params.idUser})
        .then(profilchoix => {
            //console.log(unprofil)
            if (!profilchoix) {
                return res.status(404).send({
                    message: "profil not found with id" + req.params.idUser
                });
            }
            else {
                res.send(profilchoix);
            }


        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "profil not found with id " + req.params.idUser
                });
            }
            return res.status(500).send({
                message: "Something wrong retrieving profil with id " + req.params.idUser
            });
        });
};

//update

exports.update = (req, res) => {
    // Validate Request()
    console.log('ity ny requete'+req.body.nom)
    if(!req.body.titre || !req.body.description) {
        return res.status(400).send({
            message: "eleve content can not be empty"
        });
    }
    console.log('ity n params'+req.params.profilId)
    let imageFile = req.files.image;
        //console.log('inona ny ato o!'+imageFile)
        let nomImage = req.params.profilId
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
        });
        console.log('tonga eto v nw')
    // Find and update eleve with the request body
    Atelier.findByIdAndUpdate(req.params.profilId, {
                titre: req.body.titre,
                idUser:req.body.idUser,
                description: req.body.description,
                image:nomImage + '.jpg',
                debut: req.body.debut,
                
        
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.profilId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.profilId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.profilId
        });
    });
};


exports.deleteAtelier = (req,res)=>{
    Atelier.findByIdAndRemove({_id: req.params._id}, function(err, business){
        if(err) res.json(err);
        else res.json('Suppression eleve avec succes');
    });
}


//liste des eleves
//Create new Eleve
exports.createEleve = (req, res) => {
        Eleve.find()
        .then(user => {
            var id;
            if (user.length == 0) {
                id = 0
            } else {
                id = parseInt(user[user.length - 1]._id) + 1
            }
            let imageFile = req.files.image;
            let nomImage = id
            res.setHeader('Content-Type', 'text/plain');
        
            imageFile.mv(`${__dirname}/publique/${nomImage}.jpg`, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            const eleve = new Eleve({
                _id: id,
                nom: req.body.nom,
                prenom: req.body.prenom,
                age:req.body.age,
                sexe:req.body.sexe,
                image:nomImage + '.jpg',
                classe: req.body.classe,  
            });
            eleve.save()
                .then(() => {
                    Eleve.find()
                        .then(data => {
                            res.send(data);
                        })
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the profil."
                    });
                });
        })
    
};


exports.findOneEleve =(req, res) =>{ 
    try { 
        let picture = fs.readFileSync('./controllers/atelier/publique/'+req.params.image)
        console.log('params: ',req.params.image);
        res.write(picture) 
        res.end() 
    } 
    catch (e) { console.log("envoie erroné: ", e); } }

exports.findAllEleve = (req, res) => {
    Eleve.find()
        .then(atel => {
            res.send(atel);
        }).catch(err => {
            res.status(500).send(atel => {
                message: err.message || "Something wrong while retrieving profils."
            });
        });
};



//update

exports.updateEleve = (req, res) => {
    // Validate Request()
    console.log('ity ny requete'+req.body.nom)
    if(!req.body.nom || !req.body.prenom) {
        return res.status(400).send({
            message: "eleve content can not be empty"
        });
    }
    console.log('ity n params'+req.params.profilId)
    let imageFile = req.files.image;
        //console.log('inona ny ato o!'+imageFile)
        let nomImage = req.params.profilId
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/publique/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
        });
        console.log('tonga eto v nw')
    // Find and update eleve with the request body
    Eleve.findByIdAndUpdate(req.params.profilId, {
                nom: req.body.nom,
                prenom:req.body.prenom,
                age: req.body.age,
                image:nomImage + '.jpg',
                classe: req.body.classe,
                sexe: req.body.sexe,
                
        
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.profilId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.profilId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.profilId
        });
    });
};



exports.deleteEleve = (req,res)=>{
    Eleve.findByIdAndRemove({_id: req.params._id}, function(err, business){
        if(err) res.json(err);
        else res.json('Suppression eleve avec succes');
    });
}
