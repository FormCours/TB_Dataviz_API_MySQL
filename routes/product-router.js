const productController = require('../controllers/product-controller');
const multer = require('multer');
const path = require('path');

const productRouter = require('express').Router();

productRouter.route('/product')
    .get(productController.getAll)
    .post(productController.add);

productRouter.route('/product/:id([0-9]+)')
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete);

// Utilisation de multer pour récuperer les images de produit
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(process.cwd(), 'public', 'product-image'));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueName + ext);
    }
});
const upload = multer({ storage: storage });

productRouter.route('/product/:id([0-9]+)/addImage')
    .post(upload.single('file'), productController.addImage);


module.exports = productRouter;