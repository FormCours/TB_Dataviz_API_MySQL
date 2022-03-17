const { createDbConnection } = require('../utils/db-utils');

const productModel = {

    // Create
    insert: async ({ name, description, categoryId, price }) => {
        let db;

        try {
            db = await createDbConnection();

            // Attention au espace !!!
            const requestNewProduct = 'INSERT INTO Product (Name, Description, ProductCategory_id, price) VALUES (?, ?, ?, ?)';
            const result = await db.query(requestNewProduct, [name, description, categoryId, price]);

            // Envoi de l'id du produit
            return result.insertId;
        }
        finally {
            db.end();
        }
    },

    // Read
    getAll: async () => {
        let db;

        try {
            db = await createDbConnection();
            const results = await db.query('SELECT * FROM Product');

            return results.map(data => ({
                productId: data['Product_Id'],
                name: data['name'],
                description: data['Description'],
                categoryId: data['ProductCategory_Id'],
                price: data['Price'],
                urlImage: 'product-image/' + data['url_image']
            }));
        }
        finally {
            db.end();
        }
    },

    getById: async (productId) => {
        let db;

        try {
            db = await createDbConnection();

        }
        finally {
            db.end();
        }
    },

    // Update
    update: async (productId) => {
        // TODO Implemente this
        throw new Error('Not Implemented');
    },

    // Delete
    delete: async (productId) => {
        // TODO Implemente this
        throw new Error('Not Implemented');
    },

    // Custom
    addImage: async (productId, filename) => {
        let db;

        try {
            db = await createDbConnection();

            const requestAddImage = 'UPDATE Product SET url_image = ? WHERE Product_Id = ?';
            const result = await db.query(requestAddImage, [filename, productId]);

            return result.affectedRows === 1;
        }
        finally {
            db.end();
        }
    }
};

module.exports = productModel;