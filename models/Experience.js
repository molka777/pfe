const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const experienceSchema = new Schema({
    //type
    type: {
        title: { type: String, required: true },//en ligne ou en personne
        lieu: String,//si type de l'expérience est en personne
        rassemblement: String, //si type de l'expérience est en personne
        zoom: String, //si type de l'expérience est en ligne
    },
    category: {
        title: { type: String, required: true },  //exclusive ou bien non exclusive
        dateDeroulement: Date, // si l'expérience est non exclusive
        sessions: [{
            limitePaiement: Date,
            limiteReservation: Date,
            dateRepos: Date,
            dateLancement: Date,
            dateDeroulement: Date,
            islunched: { Boolean, default: false }
        }]
    },

    //titre
    title: {
        type: String,
        required: true
    },
    //activité
    activite: {
        type: String,
        trim: true,
        required: true
    },
    //heure début
    heure_d: {
        type: Number, min: 7, max: 18, required: true
    },
    //heure fin
    heure_f: {
        type: Number, min: 8, max: 19, required: true
    },
    //langues
    langue: { type: String, required: true },
    //ville
    ville: { type: String, required: true },
    //Thèmes
    themes: { type: [String], required: true },
    //difficulte
    difficulte: String,
    //description du programme
    programme: { type: String, required: true },
    //cibles
    cibles: { type: [String], required: true },
    //phobies
    phobies: { type: [String] },
    //equipements inclus
    eqInclus: {
        type: Map,
        of: String
    },
    //equipements exclus
    eqExclus: String,
    //prix
    prix: {
        type: Number,
        trim: true,
        required: true
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.model('Experience', experienceSchema);












