const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://praveenkum1225:8CIFPR6TpE4ol7DS@cluster0.r9p2p5i.mongodb.net/StudentDB`
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/students", require("./Routes/StudentsRoute.js"));

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
