const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  licenseNumber: { type: String, required: true },
  vehicle: {
    make: String,
    model: String,
    licensePlate: String,
    capacity: Number,
  },
  location: {
    latitude: Number,
    longitude: Number,
  },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Driver', DriverSchema);
