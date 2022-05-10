const router = require('express').Router()
const { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/product/product')
const { getAllPm, createPm, getSinglePm, updatePm, deletedPm } = require('../controllers/product/productMaterial')
const { create, getAll, getSingle, updatePmt, deletePmt} = require('../controllers/product/productMaterialType')
const { getAllSm, createSm, getSingleSm, updateSm, deleteSm } = require('../controllers/product/seriesMaster')


// Products

router.route('/product_master').get(getAllProducts).post(createProduct)
router.route('/product_master/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct)

// Product Material Type

router.route('/product_material_type').post(create).get(getAll)
router.route('/product_material_type/:id').get(getSingle).put(updatePmt).delete(deletePmt)

// Product Material
router.route('/product_material').get(getAllPm).post(createPm)
router.route('/product_material/:id').get(getSinglePm).put(updatePm).delete(deletedPm)

  // Series Master

  router.route('/series_master').get(getAllSm).post(createSm)
  router.route('/series_master/:id').get(getSingleSm).put(updateSm).delete(deleteSm)

module.exports = router
