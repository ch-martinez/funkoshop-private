/* Base de datos provisoria en JSON de los productos */
const fs = require('fs')

const getAllItems = () => {
    const ruta = './src/models/db.json'
    return res = JSON.parse(fs.readFileSync(ruta))
}

module.exports = {
    getAllItems
}

