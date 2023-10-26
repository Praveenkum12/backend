const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  phoneNumber: { type: String },
});

module.exports = {
  Students: mongoose.model("students", studentSchema),
};
