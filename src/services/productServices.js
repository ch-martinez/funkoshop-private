const formatProductData = (product) => {
    const productSchema = {
        product_name: product.product_name,
        product_description: product.product_description,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        sku: product.sku,
        dues: product.dues,
/*         image_front: '/'+files[0].filename,
        image_back: '/'+files[1].filename, */
        image_front: 'TEST',
        image_back: 'TEST',
        licence_id: product.collection,
        category_id: product.category
    }
    return productSchema
}

module.exports = {
    formatProductData
}