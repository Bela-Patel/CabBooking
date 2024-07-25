const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CabSchema = new Schema({
    driverName: { type: String, required: true },
    cabNumber: { type: String, required: true },
    capacity: { type: Number, required: true },
    available: { type: Boolean, default: true },
    location: { type: String, required: true },
    bookingTime: { type: Date, required: true },
});

module.exports = mongoose.model('cab', CabSchema);
