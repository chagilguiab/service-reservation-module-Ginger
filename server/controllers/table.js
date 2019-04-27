const Table = require('../../database/models/Table');
const db = require('../../database');

// search records in 'tables' collection for a table for selected time, date and party size
// search records in 'reservations' collection to make sure that a reservation does not already exist for this date, time and table number
exports.getTable = (req, res) => {
  Table.find({
    restaurantId: req.params.id,
    maxOccupancy: req.params.partySize
  })
}
