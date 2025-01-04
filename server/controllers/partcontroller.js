const Part = require('../models/partsModel');

// get all parts
const getAllParts = async (req, res) => {
    const parts = await Part.find({}).sort({createdAt: -1});
}


// get a single part by id



// create a new part

const createPart = async (req, res) => {
    const {partNumber, manufacturer, description} = req.body;

    try {
        const part = await Part.create({partNumber, manufacturer, description});
        res.status(200).json({part});
    }catch(err){
        console.log(err);
        res.status(400).json({error: err.message});
    }
}


// delete a part by id



// update a part by id



module.exports = {
    createPart
}