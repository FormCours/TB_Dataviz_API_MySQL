const multer = require('multer');
const path = require('path');

// Utilisation de multer pour récuperer les images de produit
const storageProductImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(process.cwd(), 'public', 'product-image'));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueName + ext);
    }
});

const filterProductImage = (req, file, cb) => {
    const acceptExt = ['.png', '.jpg', '.jpeg', '.gif'];
    const fileExt = path.extname(file.originalname);

    if(acceptExt.indexOf(fileExt) === -1) {
        cb(null, false);
    }
    else {
        cb(null, true);
    }
};


module.exports.uploadProductImage = multer({ storage: storageProductImage, fileFilter: filterProductImage });