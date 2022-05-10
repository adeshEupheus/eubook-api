const { getAllSubject, createSubject, getSingleSubject, updateSubject, deleteSubject } = require('../controllers/public/subject')

const router = require('express').Router()


router.route('/subject_master').get(getAllSubject).post(createSubject)
router.route('/subject_master/:id').get(getSingleSubject).put(updateSubject).delete(deleteSubject)


module.exports = router