const mongoose = require('mongoose')

const empoloyeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
})

const Employee = mongoose.model('employee', empoloyeeSchema)
module.exports = Employee
