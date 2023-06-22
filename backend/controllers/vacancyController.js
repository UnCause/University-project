const db = require("../models/db_context");
const Company = db.companies;
const Vacancy = db.vacancies;
const Competency = db.competencies;

exports.ReqID_vacancy = function(req, res) {
    const vacancyid = req.params.id;
    // vacancy retrieving from database
    Vacancy.findOne({where: {id: vacancyid}}).then(vacancy => {
        
            if (!vacancy) return console.log("vacancy not found")
            vacancy.getCompetencies({raw: true}).then(competencies => {
                Company.findOne({where: {id: vacancy.companyid}}).then(company => {

                    const result = {vacancydata: vacancy.dataValues, competencydata: competencies, companydata: company}
                    res.json(result)
                })

            }).catch(err => console.log(err));

    }).catch(err => console.log(err));
};

exports.Create_vacancy = async function(req, res){
    
    // let isActive = req.body.checked;
    // if (isActive == "true") {
    //     isActive = true;
    // } else {
    //     isActive = false;
    // };
    const competencies = req.body.competencies;
    const vacancy = await Vacancy.create({
        title: req.body.title,
        salary: req.body.salary,
        description: req.body.description,
        contacts: req.body.contacts,
        isActive: req.body.checked,
        companyid: req.body.companyid
    });
    competencies.forEach(async competency => {
        await vacancy.addCompetency(competency.value)
    });
}

exports.Update_vacancy = async function(req, res){
    const vac_id = req.params.vid;

     await Vacancy.findOne({where: {id: vac_id}}).then(async vacancy => {
        
        if (!vacancy) return console.log("vacancy not found")
        await vacancy.getCompetencies().then(competencies => {
            competencies.forEach(competency => {
                competency.VacancyCompetencies.destroy();
            });

        }).then(() =>{
            res.send("Вакансію оновлено")
        }).catch(err => console.log(err));

        await vacancy.update({
            title: req.body.title,
            salary: req.body.salary,
            description: req.body.description,
            contacts: req.body.contacts,
            isActive: req.body.checked
        })
        const competencies = req.body.competencies;
        competencies.forEach(async competency => {
            await vacancy.addCompetency(competency.value)
        });

    }).catch(err => console.log(err));
}