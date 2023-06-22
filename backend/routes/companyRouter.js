const express = require("express");
const companyController = require("../controllers/companyController.js");
const companyRouter = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

companyRouter.get("/", companyController.Show_Companies);
companyRouter.post("/create/:a", urlencodedParser, upload.single("logotype"), companyController.Create_company);
companyRouter.get("/edit/:id", companyController.ReqID_company);
companyRouter.get("/competencies", companyController.Show_Competencies);
companyRouter.post("/update/:cid", urlencodedParser, upload.single("logotype"), companyController.Update_company);
companyRouter.get("/:id", companyController.Show_vacansies);
// companyRouter.post("/delete", companyController.Delete_Company);
// companyRouter.post("/vacancy/create/", urlencodedParser, companyController.Create_vacancy);
// companyRouter.get("/vacancy/edit/:id", companyController.ReqID_vacancy);
// companyRouter.post("/vacancy/edit/:vid", urlencodedParser, companyController.Update_vacancy);

module.exports = companyRouter;