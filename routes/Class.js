const { getAllClass, createClass, getSingleClass, updateClass, deleteClass } = require('../controllers/public/class')

const router = require('express').Router()


router.route('/class_master').get(getAllClass).post(createClass)
router.route('/class_master/:id').get(getSingleClass).put(updateClass).delete(deleteClass)

module.exports = router