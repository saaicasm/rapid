const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({take : "This is World Parts"});
});

router.get('/:id', (req, res) => {
    res.json({take : `This is Part number ${req.params.id}`});
});

router.post('/:id', (req, res) => {
    let data = req.body;
    res.json({data: data});
});

router.delete('/:id', (req, res) => {
    res.json({take : `Delete Part number ${req.params.id}`});
});


router.patch('/:id', (req, res) => {
    res.json({take : `Update Part number ${req.params.id}`});
});

module.exports = router;