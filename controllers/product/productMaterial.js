const db = require('../../models/product')
const ProductMaterial = db.product_material

// CREATE
const createPm = async (req, res) => {
    try {
        const newPm = await ProductMaterial.create(req.body)
        res.status(200).json(newPm)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'something went wrong' })
    }
}

// GET ALL
const getAllPm = async (req, res) => {
    try {
        const allpm = await ProductMaterial.findAll()
        res.status(200).json(allpm)
    } catch (error) {
        console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
    }
}

// GET SINGLE
const getSinglePm = async (req, res) => {
    try {
        const id = req.params.id
        const pm = await ProductMaterial.findByPk(id)
        res.status(200).json(pm)

    } catch (error) {
        console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
    }
}

// UPDATE
const updatePm = async (req, res) => {
    try {
        const id = req.params.id
        await ProductMaterial.update(req.body, {
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'product material has been updated'})
    } catch (error) {
        console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
    }
}

// DELETE
const deletedPm = async (req, res) => {
    try {
        const id = req.params.id
        await ProductMaterial.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'product material has been deleted'})
    } catch (error) {
        console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
    }
}

module.exports = {createPm, getAllPm, getSinglePm, updatePm, deletedPm}