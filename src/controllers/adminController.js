const path = require('path')
const { unlink } = require('fs')
const { getAllProductsFromDB,
        getProductFromDB,
        getProductImagesFromDB,
        addProductFromDB,
        updateProductFromDB,
        deletProductFromDB
} = require('../models/productsModels')

const formatProduct = (product, files) => {
    const productSchema = {
        product_name: product.product_name,
        product_description: product.product_description,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        sku: product.sku,
        dues: product.dues,
        image_front: (`uploads/${files[0].filename}`),
        image_back: (`uploads/${files[1].filename}`),
        licence_id: product.licence_id,
        category_id: product.category_id
    }
    return [Object.values(productSchema)]
}


const formatProductUpdate = (product, files) => {
    const productSchema = {
        product_name: product.product_name,
        product_description: product.product_description,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        sku: product.sku,
        dues: product.dues,
        image_front: (`uploads/${files[0].filename}`),
        image_back: (`uploads/${files[1].filename}`),
        licence_id: product.licence_id,
        category_id: product.category_id
    }
    return (productSchema)
}
const deletImages = async (id) => {
    const [images] = await getProductImagesFromDB(id)
    await unlink((path.resolve(__dirname, `../../public/img/${images.image_front}`)),(err) => {
        if(err) throw (err)
    })
    await unlink((path.resolve(__dirname, `../../public/img/${images.image_back}`)),(err) => {
        if(err) throw (err)
    })
}

const mainView = async (req,res) => {
    const view = {
        title: 'Administracion - FS',
        logged: req.session.isLog,
    }
    try {
        const products = await getAllProductsFromDB()
        res.render('pages/admin/admin', {view, products})
    } catch (error) {
        console.log(`Error getting products: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

const createView = (req,res) => {
    const view = {
        title: 'Crear - FS',
        logged: req.session.isLog
    }
    res.render('pages/admin/create', {view})
}

const createItem = async (req,res) => {
    const productData = req.body
    const productFiles = req.files
    try {
        await addProductFromDB(formatProduct(productData,productFiles))
        res.redirect('/admin')
    } catch (error) {
        console.log(`Error delet product: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

const editView = async (req,res) => {
    try {
        const [product] = await getProductFromDB(req.params.id)
        const view = {
            title: `${product.product_name} - FS`,
            logged: req.session.isLog
        }
        res.render('pages/admin/edit', {view, product})
    } catch (error) {
        console.log(`Error getting products: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

const editItem = async (req,res) => {
    const productID = req.params.id
    const updateProductData = req.body
    const productFiles = req.files
    try {
        if (productFiles.length == 2) {
            await deletImages(productID)
            await updateProductFromDB(formatProductUpdate(updateProductData,productFiles),productID)
        } else {
            await updateProductFromDB(updateProductData,productID)
        }
        res.redirect('/admin'+'?mensaje=Producto actualizado')
    } catch (error) {
        console.log(`Error updating products: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

const deletItem = async (req,res) =>{
    const productID = req.params.id
    try {
        await deletImages(productID)
        await deletProductFromDB(productID)
        res.redirect('/admin')
    } catch (error) {
        console.log(`Error delet product: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

module.exports = {
    mainView,
    createView,
    createItem,
    editView,
    editItem,
    deletItem
}