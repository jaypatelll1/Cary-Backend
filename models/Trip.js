const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  startLocation: {
    latitude: Number,
    longitude: Number,
  },
  endLocation: {
    latitude: Number,
    longitude: Number,
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  status: { type: String, enum: ['scheduled', 'in-progress', 'completed', 'cancelled'], default: 'scheduled' },
});

module.exports = mongoose.model('Trip', TripSchema);
