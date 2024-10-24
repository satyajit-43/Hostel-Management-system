const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  // student: { type: String, required: true },
  // hostel: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['Electric', 'Furniture', 'Cleaning', 'Others'], required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
