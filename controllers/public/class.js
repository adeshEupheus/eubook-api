const db = require('../../models/public')
const Class = db.class_master


// CREATE 
const createClass = async (req, res) => {
    try {
        const newClass = await Class.create(req.body)
        res.status(200).json(newClass)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET ALL

const getAllClass = async (req, res) => {
    try {
        const allClass = await Class.findAll()
        res.status(200).json(allClass)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET SINGLE
const getSingleClass = async (req, res) => {
    try {
        const id = req.params.id
        const singleClass = await Class.findByPk(id)
        res.status(200).json(singleClass)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// UPDATE

const updateClass = async (req, res) => {
    try {
        const id = req.params.id
        await Class.update(req.body, {
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'Class has been updated'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// DELETE

const deleteClass = async (req, res) => {
    try {
        const id = req.params.id
        await Class.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'Class has been deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

module.exports = {createClass, getAllClass, getSingleClass, updateClass, deleteClass}