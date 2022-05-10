const db = require('../../models/product')
const SeriesMaster = db.series_master

// CREATE 
const createSm = async (req, res) => {
    try {
        const newSm = await SeriesMaster.create(req.body)
    res.status(200).json(newSm)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET ALL
const getAllSm = async (req, res) => {
    try {
        const allSm = await SeriesMaster.findAll()
        res.status(200).json(allSm)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// GET SINGLE
const getSingleSm = async (req, res) => {
    try {
        const id = req.params.id
        const singleSm = await SeriesMaster.findByPk(id)
        res.status(200).json(singleSm)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}


// UPDATE
const updateSm = async (req, res) => {
    try {
        const id = req.params.id
        await SeriesMaster.update(req.body, {
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'Series Master has been updated'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

// DELETE
const deleteSm = async (req, res) => {
    try {
        const id = req.params.id
        await SeriesMaster.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({msg: 'Series Master has been Deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wrong'})
    }
}

module.exports = {createSm, getAllSm, getSingleSm, updateSm, deleteSm}