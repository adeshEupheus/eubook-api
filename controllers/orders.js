const db = require('../models/order')
const Orders = db.orders_master

// CREATE 
const createOrder = async (req, res) => {
    try {
        const newOrder = await Orders.create(req.body)
        res.status(200).json(newOrder)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something wrong went'})
    }
}

// GET ALL
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Orders.findAll()
        res.status(200).json(allOrders)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something wrong went'})
    }
}

// GET SINGLE
const getSingleOrder = async (req, res) => {
    try {
        const id = req.params.id
        const order = await Orders.findByPk(id)
        res.status(200).json(order)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something wrong went'})
    }
}

// UPDATE
const updateOrder = async (req, res) => {
    try {
        const id = req.params.id
        await Orders.update(req.body, {
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'order has been updated'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something wrong went'})
    }
}

// DELETE
const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id
        await Orders.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'order has been deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something wrong went'})
    }
}

module.exports = {createOrder, getAllOrders, getSingleOrder, updateOrder, deleteOrder}