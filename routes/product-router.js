const productController = require('../controllers/product-controller');
const { uploadProductImage } = require('../utils/upload-file');

const productRouter = require('express').Router();

productRouter.route('/product')
    .get(productController.getAll)
    .post(productController.add);

productRouter.route('/product/:id([0-9]+)')
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete);

productRouter.route('/product/:id([0-9]+)/addImage')
    .post(uploadProductImage.single('file'), productController.addImage);


module.exports = productRouter;