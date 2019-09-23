const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EleveSchema = new Schema({
    _id: { type: Number, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: {type: Number, required: true},
    sexe :{ type: String, required: true },
    classe: { type: String, required: true },
    image: { type: String, required: true },
    
}, {
        timestamps: true
    });

module.exports = Eleve = mongoose.model("Eleves", EleveSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);