const { Request, Response } = require('express');

const productController = {
    /**
     * Méthode pour obtenir la liste des produits
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll: (req, res) => {
        // TODO Finish this
        res.sendStatus(501);
    },

    /**
     * Méthode pour obtenir un produit via son Id
     * @param {Request} req 
     * @param {Response} res 
     */
    getById: (req, res) => {
        // TODO Finish this
        res.sendStatus(501);
    },

    /**
     * Méthode pour ajouter un nouveau produit 
     * @param {Request} req 
     * @param {Response} res 
     */
    add: (req, res) => {
        // TODO Finish this
        res.sendStatus(501);
    }, 

    /**
     * Méthode pour l'image d'un produit via son Id 
     * @param {Request} req 
     * @param {Response} res 
     */
    addImage : (req, res) => {
        // TODO Finish this
        console.log(req.file.filename);

        res.sendStatus(501);
    },

    /**
     * Méthode pour mettre à jours un produit via son Id 
     * @param {Request} req 
     * @param {Response} res 
     */
    update: (req, res) => {
        // TODO Finish this
        res.sendStatus(501);
    },

    /**
     * Méthode pour supprimer un produit via son Id 
     * @param {Request} req 
     * @param {Response} res 
     */
    delete : (req, res) => {
        // TODO Finish this
        res.sendStatus(501);
    }
};

module.exports = productController;