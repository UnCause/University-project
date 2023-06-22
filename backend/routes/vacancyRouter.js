const express = require("express");
const vacancyController = require("../controllers/vacancyController.js");
const vacancyRouter = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

// companyRouter.get("/", companyController.Show_Companies);
// companyRouter.post("/create/:a", urlencodedParser, upload.single("logotype"), companyController.Create_company);
// companyRouter.post("/vacancy/edit/:vid", urlencodedParser, companyController.Update_vacancy);
vacancyRouter.post("/create/", urlencodedParser, vacancyController.Create_vacancy);
vacancyRouter.get("/edit/:id", vacancyController.ReqID_vacancy);
vacancyRouter.post("/edit/:vid", urlencodedParser, vacancyController.Update_vacancy);

module.exports = vacancyRouter;