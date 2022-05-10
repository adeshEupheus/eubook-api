const db = require('../../models/public')
const Subject = db.subject_master


// CREATE
const createSubject = async (req, res) => {
    try {
        const newSubject = await Subject.create(req.body)
        res.status(200).json(newSubject)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET ALL
const getAllSubject = async (req, res) => {
    try {
        const allSubject = await Subject.findAll()
        res.status(200).json(allSubject)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET SINGLE

const getSingleSubject = async (req, res) => {
    try {
        const id = req.params.id
        const singleSubject = await Subject.findByPk(id)
        res.status(200).json(singleSubject)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// UPDATE

const updateSubject = async (req, res) => {
    try {
        const id = req.params.id
        await Subject.update(req.body, {
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'Subject has been updated'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// DELETE
const deleteSubject = async (req, res) => {
    try {
        const id = req.params.id
        await Subject.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'Subject has been deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

module.exports = {createSubject, getAllSubject, getSingleSubject, updateSubject, deleteSubject}