const { pool } = require('../config/conn')

const getAllProductsFromDB = async () => {
    try {
        const [rows] = await pool.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;')
        return rows
    } catch (error) {
        console.error('Error al obtener productos', error)
    }
}


const getAllProductsFilterFromDB = async (id) => {
    const [rows] = await pool.query(`SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product.licence_id = ${id}`)
    return rows
}

const getProductFromDB = async (id) => {
    const [rows] = await pool.query(`SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product.product_id = ${id}`)
    return rows
}



const addProductFromDB = async (product) => {
    await pool.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [product]);
}

const updateProductFromDB = async (product, id) => {
    await pool.query('UPDATE product SET ? WHERE product_id = ?;', [product, id])
}

const deletProductFromDB = async (productID) => {
    await pool.query('DELETE FROM product WHERE product_id = ?;', [productID])
}

const getProductImagesFromDB = async (id) => {
    const [rows] = await pool.query(`SELECT product.image_front, product.image_back FROM product WHERE product.product_id = ${id}`)
return rows
}

module.exports = {
    getAllProductsFromDB,
    getAllProductsFilterFromDB,
    getProductFromDB,
    getProductImagesFromDB,
    addProductFromDB,
    updateProductFromDB,
    deletProductFromDB
}