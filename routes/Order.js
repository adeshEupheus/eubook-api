const { getAllOrders, createOrder, getSingleOrder, updateOrder, deleteOrder } = require('../controllers/orders')

const router = require('express').Router()


router.route('/order_master').get(getAllOrders).post(createOrder)
router.route('/order_master/:id').get(getSingleOrder).put(updateOrder).delete(deleteOrder)


module.exports = router