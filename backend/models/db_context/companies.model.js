const vacancies = require("./vacancies.model.js");

module.exports = (sequelize, Sequelize) => {
    const Companies = sequelize.define("Companies", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        adress: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT("medium"),
            allowNull: false
        },
        logotype: {
            type: Sequelize.TEXT("medium"),
            allowNull: false
        },
        contacts: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    // Companies.hasMany(vacancies, { as: "vacancies", foreignKey: "companyId" });
    return Companies;
};