const db = require('../../models/product')
const ProductMaterialType = db.product_material_type

// CREATE
const create = async (req, res) => {
  try {
    const newPMT = await ProductMaterialType.create(req.body)
    res.status(200).json(newPMT)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
  }
}

// GET ALL
const getAll = async (req, res) => {
  try {
    const pmts = await ProductMaterialType.findAll()
    res.status(200).json(pmts)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
  }
}

// GET SINGLE
const getSingle = async (req, res) => {
  try {
    const id = req.params.id
    const pmt = await ProductMaterialType.findByPk(id)
    res.status(200).json(pmt)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
  }
}

// UPDATE
const updatePmt = async (req, res) => {
  try {
    const id = req.params.id
    await ProductMaterialType.update(req.body, {
      where: {
        id: id,
      },
    })
    res.status(200).json({ msg: 'product material type has been updated' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
  }
}

// DELETE
const deletePmt = async (req, res) => {
  try {
    const id = req.params.id
    await ProductMaterialType.destroy({
      where: {
        id: id,
      },
    })
    res.status(200).json({ msg: 'product material type has been deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'something went wrong' })
  }
}

module.exports = { create, getAll, getSingle, updatePmt, deletePmt }
