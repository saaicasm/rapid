const express = require('express');
const router = express.Router();
const {createPart, getAllParts, getPartById, deletePart, updatePart} = require('../controllers/partcontroller');

router.get('/', getAllParts);
router.get('/:id', getPartById);
router.post('/', createPart);
router.delete('/:id', deletePart); 
router.patch('/:id', updatePart);

module.exports = router;