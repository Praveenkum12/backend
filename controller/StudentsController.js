const { Students } = require("../model/studentSchema");

const getAllStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (err) {
    res.send(`Error ${err.message}`);
  }
};

const createNewStudent = async (req, res) => {
  const { firstName, lastName, age, phoneNumber } = req.body;
  if (!firstName || !lastName || !age || !phoneNumber) {
    return res.status(400).json({ message: "Invalid student data" });
  }
  const stu = await Students.create({ ...req.body });
  await stu.save();
  res.status(201).send(stu);
};

const updateStudent = async (req, res) => {
  const student = await Students.findOne({
    phoneNumber: Number(req.params.id),
  });
  const { firstName, lastName, age, phoneNumber } = req.body;
  console.log();
  if (!firstName && !lastName && !age && !phoneNumber) {
    return res.status(400).json({
      message: "You must update any",
    });
  }
  if (firstName) {
    student.firstName = firstName;
    await student.save();
  }
  if (lastName) {
    student.lastName = lastName;
    await student.save();
  }
  if (age) {
    student.age = age;
    await student.save();
  }
  if (phoneNumber) {
    student.phoneNumber = phoneNumber;
    await student.save();
  }
  res.status(201).send(student);
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).send("Cannot find ID");
  }
};

const getOneStudent = async (req, res) => {
  const phoneNumber = parseInt(req.params.id);
  try {
    const student = await Students.findOne({ phoneNumber });
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: "Cannot find Student" });
  }
};

module.exports = {
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
};
