const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const HTTP_PORT = process.env.PORT || 5000;
const studentRoutes = require("./routes/student");
const courseRoutes = require("./routes/course");
const resultRoutes = require("./routes/result");

require("./models/Student");
require("./models/Course");
require("./models/Result");

mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://shyftlabs:7rail4K7Uts2Wfbi@cluster0.pja0kmn.mongodb.net/srms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/student", studentRoutes);
app.use("/course", courseRoutes);
app.use("/result", resultRoutes);

app.listen(HTTP_PORT, () => {
  console.log("Server is listening on port ", HTTP_PORT);
});
