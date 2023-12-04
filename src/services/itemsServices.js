/* Base de datos provisoria en JSON de los productos */
const fs = require('fs')
const route = './src/models/db.json'

const getAllItems = () => {
    return res = JSON.parse(fs.readFileSync(route))
}

const getItem = (id) => {
    const searchId = (item, id) => {
        return item.product_id == id
    }
    const res = JSON.parse(fs.readFileSync(route))
    return res.find((item) => searchId(item, id))
}

module.exports = {
    getAllItems,
    getItem
}

