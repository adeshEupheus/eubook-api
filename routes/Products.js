const router = require('express').Router()
const {
  create,
  getAll,
  getSingle,
  updatePmt,
  deletePmt,
} = require('../controllers/product/productMaterialType')
router.route('/').get((req, res) => {
  res.status(200).json({ msg: 'working' })
})

// Product Material Type

router.route('/product_material_type').post(create).get(getAll)
router
  .route('/product_material_type/:id')
  .get(getSingle)
  .put(updatePmt)
  .delete(deletePmt)

module.exports = router
