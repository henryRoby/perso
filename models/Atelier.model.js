const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    _id: { type: Number, required: true },
    titre: { type: String, required: true },
    description: { type: String, required: true },
    date: {type: Date,default: Date.now },
    idUser: Number,
    image: { type: String, required: true },
    debut: { type: String, required: true },
    visib:Boolean
}, {
        timestamps: true
    });

module.exports = Atelier = mongoose.model("Ateliers", ArticleSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);