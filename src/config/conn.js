const { createPool } = require('mysql2/promise')
const { config } = require('dotenv')
config()

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    port: process.env.DB_PORT
})

pool.getConnection()
    .then(connection => {
        console.log('Conectado a MySQL database')
        connection.release()
    })
    .catch(err => {
        console.log(`Error al obtener la conexion: ${err}`)
    })

module.exports = {
    pool
}