const mongoose = require('mongoose');

// Define the schema for hostel allocation
const allocationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  currentAddress: {
    type: String,
    required: true
  },
  permanentAddress: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  guardianName: {
    type: String,
    required: true
  },
  guardianContact: {
    type: String,
    required: true
  },
  medicalConsiderations: {
    type: String,
    required: false
  },
  hostel: {
    type: String,
    enum: ['New Hostel', 'Old Hostel'], // You can add more hostel names here
    required: true
  }
});

// Create the model based on the schema
const Allocation = mongoose.model('Allocation', allocationSchema);

module.exports = Allocation;
