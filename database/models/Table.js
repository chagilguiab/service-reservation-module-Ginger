const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  restaurantId: Number,
  tableNumber: Number,
  maxOccupancy: Number
});

const Table = mongoose.model('Table', tableSchema);

module.exports = {
  Table
}
