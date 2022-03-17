const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product-router');

//Chargement des variables d'environement
require('dotenv-flow').config();

// Récuperation des variables d'environement
const { PORT, NODE_ENV } = process.env;

// Teste de la connection vers la DB
require('./utils/db-utils').testDbConnection();

// Création du webserver
const app = express();

// Ajout des middlewares
// - Gestion des données « application/json »
app.use(express.json());
// - Gestion du CROS
app.use(cors());
// - Dossier static
app.use(express.static('public'));

// Ajout des routers
app.use(productRouter);

// Demarrage de l'API
app.listen(PORT, () => {
    console.log(`API running on port ${PORT} [${NODE_ENV}]`);
});