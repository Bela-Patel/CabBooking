const express = require('express');
const router = express.Router();

const Cab = require('../models/cab');

// Get all cabs
router.get('/', async (req, res) => {
    try {
        const cabs = await Cab.find();
        res.json(cabs);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add a new cab
router.post('/', async (req, res) => {
    try {
        const newCab = new Cab(req.body);
        const cab = await newCab.save();
        res.json(cab);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Book a cab
router.put('/book/:id', async (req, res) => {
    try {
        const cab = await Cab.findById(req.params.id);
        if (!cab) return res.status(404).json({ msg: 'Cab not found' });

        if (!cab.available) return res.status(400).json({ msg: 'Cab is not available' });

        cab.available = false;
        await cab.save();
        res.json(cab);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Free a cab
router.put('/free/:id', async (req, res) => {
    try {
        const cab = await Cab.findById(req.params.id);
        if (!cab) return res.status(404).json({ msg: 'Cab not found' });

        cab.available = true;
        await cab.save();
        res.json(cab);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


module.exports = router;
