// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../../models/students.model');

// 1. Lấy tất cả sinh viên
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Lấy chi tiết một sinh viên theo ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Tạo một sinh viên mới
router.post('', async (req, res) => {
  const student = new Student(req.body);
  try {
    const savedStudent = await student.save();
    res.status(201).json({
      message: 'Success',
      data: savedStudent
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;