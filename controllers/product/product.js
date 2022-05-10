const db = require('../../models/product')
const Product = db.product_master

// CREATE
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(200).json(newProduct)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET ALL
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll()
        res.status(200).json(allProducts)
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: 'something went wrong'})
    }
}

// GET SINGLE 
const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id
        const singleProduct = await Product.findByPk(id)
        res.status(200).json(singleProduct)
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: 'something went wrong'})
    }
}

// UPDATE
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        await Product.update(req.body, {
            where: {
                id: id
            }
        })
        res.status(200).json({msg: "Product has been updated"})
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: 'something went wrong'})
    }
}

// DELETE
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await Product.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({msg: "Product has been deleted"})
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: 'something went wrong'})
    }
}

module.exports = {createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct}