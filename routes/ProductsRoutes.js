const express = require('express')
const router = express.Router()
const productController = require('../controller/ProductController')


router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/products/:barcode', productController.getProductByBarcode)
router.put('/products/:barcode', productController.updateProductByBarcode)
router.delete('/products/:id', productController.deleteProductsById)


module.exports = router;