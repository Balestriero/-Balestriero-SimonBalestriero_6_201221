// Ecoute des requetes http et reponse
const http = require("http"); // Import du package http - https requiert un certificat SSL à obtenir avec un nom de domaine
const app = require("./app"); // Import de app pour utilisation de l'application sur le serveur
require("./models/dbConfig.js");

const cors = require("cors");

app.use(cors());

// Ajout du port de connection
app.listen(3000, () => console.log("Server démarré: 3000"));
