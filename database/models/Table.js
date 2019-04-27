const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  maxOccupancy: Number,
  available: Boolean
});

const Table = mongoose.model('Table', tableSchema);

module.exports = {
  Table
}
