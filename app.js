const express = require('express');
const cors = require('cors');

//Chargement des variables d'environement
require('dotenv-flow').config();

// Récuperation des variables d'environement
const { PORT, NODE_ENV } = process.env;

// Création du webserver
const app = express();

// Ajout des middlewares
// - Gestion des données « application/json »
app.use(express.json());
// - Gestion du CROS
app.use(cors());

// Ajout des routers
// TODO DO it :D

// Demarrage de l'API
app.listen(PORT, () => {
    console.log(`API running on port ${PORT} [${NODE_ENV}]`);
});