const Sequelize = require("sequelize");
const sequelize = new Sequelize("vacanciesdb", "root", "Database26912691", {
    host: "localhost",
    dialect: "mysql",
    operationsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.companies = require("./companies.model.js")(sequelize, Sequelize);
db.vacancies = require("./vacancies.model.js")(sequelize, Sequelize);
db.competencies = require("./competencies.model.js")(sequelize, Sequelize);

db.companies.hasMany(db.vacancies, {
    foreignKey: "companyid",
    as: "vacancy",
    onDelete: "cascade"
});

db.vacancies.belongsTo(db.companies, {
    foreignKey: "companyid",
    as: "company"
});

db.vacancies.belongsToMany(db.competencies, {through:"VacancyCompetencies"});
db.competencies.belongsToMany(db.vacancies, {through:"VacancyCompetencies"});

module.exports = db;