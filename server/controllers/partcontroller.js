const Part = require('../models/partsModel');
const mongoose = require('mongoose');

// get all parts
const getAllParts = async (req, res) => {
    const parts = await Part.find({}).sort({createdAt: -1});
    res.status(200).json(parts);
}


// get a single part by id
const getPartById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message: 'Invalid part id'});
    }

    const part = await Part.findById(req.params.id);

    

    if(!part){
        return res.status(404).json({message: 'Part not found'});
    }
    res.status(200).json(part);
}


// create a new part

const createPart = async (req, res) => {
    const {partNumber, manufacturer, description} = req.body;

    let emptyFields = [];

    if(!partNumber){
        emptyFields.push('partNumber');
    }
    if(!manufacturer){
        emptyFields.push('manufacturer');
    }
    if(!description){
        emptyFields.push('description');
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all fields', emptyFields});
    }

    try {
        const part = await Part.create({partNumber, manufacturer, description});
        res.status(200).json(part);
    }catch(err){
        console.log(err);
        res.status(400).json({error: err.message});
    }
}


// delete a part by id

const deletePart = async (req, res) => {    
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message: 'Invalid part id'});
    }
    const part = await Part.findByIdAndDelete(req.params.id);

    if(!part){
        return res.status(404).json({message: 'Part not found'});
    }
    res.status(200).json(part);
}




// update a part by id
const updatePart = async(req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message:"Invalid Part Id"});
    }
    const data = req.body;
    const part = await Part.findByIdAndUpdate(req.params.id, data, {new: true});
    if(!part){
        return res.status(400).json({message: 'Part not found'});
    }
    res.status(200).json(part);
}



module.exports = {
    getAllParts,
    createPart,
    getPartById,
    deletePart,
    updatePart
}