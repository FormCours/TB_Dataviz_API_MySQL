const { Request, Response } = require('express');
const productModel = require('../models/product-model');

const productController = {
    /**
     * Méthode pour obtenir la liste des produits
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll: (req, res) => {
        productModel.getAll()
            .then(products => {
                console.log(products);

                res.status(200).json(products);
            })
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
        // Idéalement, ajout un systeme de validation de donnée !
        const body = req.body; // name, description, categoryId, price
        
        productModel.insert(body)
            .then(productId => {
                res.status(200).json({
                    message: `Produit ajouté avec l'id ${productId}`
                });
            })
    }, 

    /**
     * Méthode pour l'image d'un produit via son Id 
     * @param {Request} req 
     * @param {Response} res 
     */
    addImage : (req, res) => {
        if(req.file === undefined) {
            return res.status(400).json({
                message: `Image non valide`
            });
        }

        // TODO Si une image est déjà défini, le supprimer
        
        productModel.addImage(req.params.id, req.file.filename)
            .then(isOk => {
                if(isOk) {
                    res.status(200).json({
                        message: `L'image a bien été ajouté`
                    });
                }
                else {
                    res.sendStatus(404);
                }
            });
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