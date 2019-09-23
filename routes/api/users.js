const Control = require('../../controllers/controller')
const Particule = require('../../controllers/particulier/particulier')
const Admin = require('../../controllers/atelier/atelier')


const express = require("express");
const router = express.Router();
//Admin
router.post('/register', Control.register)
router.post("/login", Control.login)

//particulier
router.post('/particulier/:_id', Particule.createPart);

//Articles
router.post('/newArticle', Admin.create);
router.get('/newArticle', Admin.findAllArticle);
router.put('/putArticle/:profilId', Admin.update);
router.delete('/delete/:_id', Admin.deleteAtelier);

router.get('/newArticle/:idUser', Admin.findOne);
router.get('/newArticleImage/:image', Admin.findOneArticle);

//masquer une article
router.get('/affichAtl/:_id', Admin.affichAtl);
router.get('/cacherAtl/:_id', Admin.cacherAtl);


//eleve
router.post('/newEleve',Admin.createEleve)
router.get('/newEleve', Admin.findAllEleve);
router.put('/putEleve/:profilId', Admin.updateEleve);
router.get('/newEleveImage/:image', Admin.findOneEleve);
router.delete('/delete/:_id', Admin.deleteEleve);
module.exports = router;
