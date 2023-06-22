const express = require("express");
const studentController = require("../controllers/studentController.js");
const studentRouter = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });

studentRouter.get("/questions_data", studentController.Show_Questions)
studentRouter.post("/questions", urlencodedParser, studentController.calculate);
studentRouter.get("/result", studentController.Show_Vacansies);
// studentRouter.get("/vacancy", studentController.getCertainVacancy);

module.exports = studentRouter;