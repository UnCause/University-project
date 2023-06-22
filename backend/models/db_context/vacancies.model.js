module.exports = (sequelize, Sequelize) => {
    const Vacancies = sequelize.define("Vacancies", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        salary: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT("medium"),
            allowNull: false
        },
        contacts: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
    return Vacancies;
};