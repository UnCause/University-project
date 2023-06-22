const { raw } = require("body-parser");
const db = require("../models/db_context");
const Company = db.companies;
const Vacancy = db.vacancies;
const Competency = db.competencies;

exports.Show_Companies = function(req, res) {
    Company.findAll({ raw: true }).then(data => {
        res.json(data);
    }).catch(err => console.log(err));
};

exports.ReqID_company = function(req, res) {
    const companyid = req.params.id;
    Company.findAll({ where: { id: companyid }, raw: true }).then(data => {
            res.json(data);
        }).catch(err => console.log(err));
};

exports.Show_vacansies = function(req, res) {

    const companyid = req.params.id;
    Company.findByPk(companyid, { raw: true }).then(company => {

        if (!company) return console.log("Company not found");

        Vacancy.findAll({ where: { companyid: companyid }, raw: true }).then(vacancies => {
            const activeClass = []
            vacancies.forEach(vacancy => {
                if (vacancy.isActive) {
                    activeClass.push({id: vacancy.id, title: vacancy.title, salary: vacancy.salary, description: vacancy.description, contacts: vacancy.contacts, isActive: vacancy.isActive, companyid: vacancy.companyid, activeClass: "vacancy-active"})
                } else {
                    activeClass.push({id: vacancy.id, title: vacancy.title, salary: vacancy.salary, description: vacancy.description, contacts: vacancy.contacts, isActive: vacancy.isActive, companyid: vacancy.companyid, activeClass: "vacancy-inactive"})
                }
            });
            res.json(activeClass);

        }).catch(err => console.log(err));

    }).catch(err => console.log(err));
};

// exports.ReqID_vacancy = function(req, res) {
//     const vacancyid = req.params.id;
//     // vacancy retrieving from database
//     Vacancy.findOne({where: {id: vacancyid}}).then(vacancy => {
        
//             if (!vacancy) return console.log("vacancy not found")
//             vacancy.getCompetencies({raw: true}).then(competencies => {
//                 const result = {vacancydata: vacancy.dataValues, competencydata: competencies}
//                 res.json(result)

//             }).catch(err => console.log(err));

//     }).catch(err => console.log(err));
// };

exports.Create_company = function(req, res) {
    const action = req.params.a

    switch(action) {
        
        case "send":
            const comp_name = req.body.name;
            const comp_adress = req.body.adress;
            const comp_description = req.body.description;
            const comp_logo = req.body.logotype;
            const comp_contacts = req.body.contacts;
            Company.create({
                name: comp_name,
                adress: comp_adress,
                description: comp_description,
                logotype: comp_logo,
                contacts: comp_contacts
            }).then(() => {
                res.send('Компанія створена')
            }).catch(err => console.log(err));
        break

        default: 
        res.send('Invalid Request')
        break
    }
    
};

exports.Update_company = function(req, res) {

    const comp_name = req.body.name;
    const comp_adress = req.body.adress;
    const comp_description = req.body.description;
    const comp_logo = req.body.logotype;
    const comp_contacts = req.body.contacts;
    const companyid = req.params.cid;
        Company.update({
            name: comp_name,
            adress: comp_adress,
            description: comp_description,
            logotype: comp_logo,
            contacts: comp_contacts
        }, { where: { id: companyid } }).then(() => {
            res.send('Дані оновлено')

        }).catch(err => console.log(err));
};

exports.Show_Competencies = function(req, res) {
    Competency.findAll({ raw: true }).then(data => {
        res.json(data);
    }).catch(err => console.log(err));
};

exports.Delete_Company = function(req, res) {
    const companyid = req.body.companyid;
    console.log(req.body)
}

// exports.Create_vacancy = async function(req, res){
    
//     // let isActive = req.body.checked;
//     // if (isActive == "true") {
//     //     isActive = true;
//     // } else {
//     //     isActive = false;
//     // };
//     const competencies = req.body.competencies;
//     const vacancy = await Vacancy.create({
//         title: req.body.title,
//         salary: req.body.salary,
//         description: req.body.description,
//         contacts: req.body.contacts,
//         isActive: req.body.checked,
//         companyid: req.body.companyid
//     });
//     competencies.forEach(async competency => {
//         await vacancy.addCompetency(competency.value)
//     });
// }

// exports.Update_vacancy = async function(req, res){
//     const vac_id = req.params.vid;

//      await Vacancy.findOne({where: {id: vac_id}}).then(async vacancy => {
        
//         if (!vacancy) return console.log("vacancy not found")
//         await vacancy.getCompetencies().then(competencies => {
//             competencies.forEach(competency => {
//                 competency.VacancyCompetencies.destroy();
//             });

//         }).then(() =>{
//             res.send("Вакансію оновлено")
//         }).catch(err => console.log(err));

//         await vacancy.update({
//             title: req.body.title,
//             salary: req.body.salary,
//             description: req.body.description,
//             contacts: req.body.contacts,
//             isActive: req.body.checked
//         })
//         const competencies = req.body.competencies;
//         competencies.forEach(async competency => {
//             await vacancy.addCompetency(competency.value)
//         });

//     }).catch(err => console.log(err));
// }


// vacancies retrieving from database
    // const result = await Vacancy.findAll().then(vacancy => {
        
    //     vacancy.forEach(vacancy => {
    //         if (!vacancy) return console.log("vacancy not found")
    //         vacancy.getCompetencies({raw: true}).then(res => {
    //             console.log(vacancy.dataValues, res)
    //         }) 
    //     });
    // })
    // console.log(result)