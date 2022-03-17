const mysql = require('promise-mysql');

const createDbConnection = async () => {
    return await mysql.createConnection({
        host: process.env.DB_SERVER,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    });
};

const testDbConnection = async () => {
    try {
        const db = await createDbConnection();
        db.end();
        console.log('Test connection to MySQL - OK');
    }
    catch (e) {
        console.log('Test connection to MySQL - Error');
        console.log(e.message);
        process.exit();
    }
};

module.exports = {
    createDbConnection,
    testDbConnection
};