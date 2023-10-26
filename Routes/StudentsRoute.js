const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
} = require("../controller/StudentsController");

router.get("/getstudents", getAllStudents);

router.post("/addstudent", createNewStudent);

router.put("/updatestudent/:id", updateStudent);

router.delete("/deletestudent/:id", deleteStudent);

router.get("/getstudent/:id", getOneStudent);

module.exports = router;
