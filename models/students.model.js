// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  class: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;