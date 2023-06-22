module.exports = (sequelize, Sequelize) => {
    const Competencies = sequelize.define("Competencies", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Competencies;
};