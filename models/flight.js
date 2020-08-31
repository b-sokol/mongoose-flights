const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
    arrival: { type: Date },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ['American', 'Delta', 'Southwest', 'United'],
    },
    airport: {
      type: String,
      enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN',
    },
    flightNo: { type: Number, required: true, min: 10, max: 9999 },
    departs: {
      type: Date,
      default: () => {
        return new Date(Date.now() + 31536000000); //milliseconds in a year
      },
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Flight', flightSchema);
