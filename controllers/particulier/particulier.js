const Particulier = require('../../models/particulier.model');
const Atelier = require('../../models/Atelier.model')

exports.createPart = (req, res) => {
    Particulier.find()
        .then(user => {
            var id;
            if (user.length == 0) {
                id = 0
            } else {
                id = parseInt(user[user.length - 1]._id) + 1
            }
            Atelier.findById(req.params._id).then(use => {
                const particulier = new Particulier({
                    _id: id,
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    email: req.body.email,
                    phone: req.body.phone
                });
                Atelier.findByIdAndUpdate(use._id, {
                    _id: use.id,
                    idUser: use.idUser,
                    titre: use.titre,
                    description: use.description,
                    date: use.date,
                    debut: use.debut,
                    image: use.image
                    
                    
                }).then(upd => console.log(upd))
                particulier.save()
                    .then(user => {
                        res.json(user)
                    });
            });
        });
}

//Get un par un image
exports.findOneArticle = (req, res) => {
    try {
        let picture = fs.readFileSync('./controllers/atelier/public/' + req.params.image)
        console.log('params: ', req.params.image);
        res.write(picture)
        res.end()
    }
    catch (e) { console.log("envoie erroné: ", e); }
}



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