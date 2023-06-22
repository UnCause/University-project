const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models/db_context");
const sequelize = db.sequelize;
const studentRouter = require("./routes/studentRouter.js");
const companyRouter = require("./routes/companyRouter.js");
const vacancyRouter = require("./routes/vacancyRouter.js");

const app = express();
app.use(bodyParser.urlencoded({limit: '1mb', extended: false}));
app.use(bodyParser.json({limit: '1mb'}));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use("/student", studentRouter);
app.use("/company", companyRouter);
app.use("/company/vacancy", vacancyRouter);

sequelize.sync({ alter: true }).then(() => {
    app.listen(5000, function() {
        console.log("Сервер очікує на підключення...");
    });
}).catch(err => console.log(err));