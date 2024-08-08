const Product = require('../models/Products')

createProduct = async (req, res) =>{
    try{
        const { barcode, name, price, description, stock } = req.body
        const product = await Product.create({
            barcode, name, price, description, stock
        })
        res.status(201).json(product)
    }catch (error){
        console.log(error)
        res.status(500).json({error: 'Erro ao criar o produto'})
    }
}

getAllProducts = async (req, res) =>{
    try{
        const products = await Product.findAll()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error: 'Erro ao listar produtos'})
    }
}

getProductByBarcode = async (req, res) =>{
    try{
        const { barcode } = req.params

        const product = await Product.findOne({ barcode})

        if (!product){
            return res.status(400).json({ message: "Produto não encontrado"}
            )
        }
        res. status(200).json(product)
    }catch (error){
        res.status(500).json({ error: "Erro ao buscar o produto" })
    }
}

updateProductByBarcode = async (req, res) =>{
    try{
        const { barcode } = req.params
        const{ name, price, description, stock } = req.body

        const product = await Product.findOne({barcode})

        if (!product){
            return res.status40(404).json({error: 'Produto não encontrtado'})
        }

        product.name = name
        product.price = price
        product.description = description
        product.stock = stock

        await product.save()
       
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({error: 'Erro ao utilizar o produto'})
    }    
}

deleteProductsById = async (req, res) =>{
    try{
        const { id } = req.params

        const product = await Product.destroy({
            where:{
                id: id
            }
        })

        if(!product){
            return res.status(400).json({error: 'Produto não encontrado'})
        }
        res.status(200).json({message: 'Produto excluído com sucesso'})
    }catch(error){
        res.status(500).json({error: 'Erro ao excluir produto'})
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByBarcode,
    updateProductByBarcode,
    deleteProductsById
}