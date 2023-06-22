const db = require("../models/db_context");
const Company = db.companies;
const Vacancy = db.vacancies;
const Competency = db.competencies;
const Student = require("../models/Student.js");

exports.calculate = function(req, res) {

    const ans = [];
    ans.push(req.body.b1);
    ans.push(req.body.b2);
    ans.push(req.body.b3);
    ans.push(req.body.b4);
    ans.push(req.body.b5);
    ans.push(req.body.b6);
    ans.push(req.body.b7);
    ans.push(req.body.b8);
    ans.push(req.body.b9);
    ans.push(req.body.b10);
    ans.push(req.body.b11);
    ans.push(req.body.b12);
    ans.push(req.body.b13);
    ans.push(req.body.b14);
    ans.push(req.body.b15);
    ans.push(req.body.b16);
    ans.push(req.body.b17);
    ans.push(req.body.b18);
    ans.push(req.body.b19);
    ans.push(req.body.b20);
    ans.push(req.body.b21);
    ans.push(req.body.b22);
    ans.push(req.body.b23);
    ans.push(req.body.b24);
    ans.push(req.body.b25);
    ans.push(req.body.b26);
    ans.push(req.body.b27);
    ans.push(req.body.b28);
    ans.push(req.body.b29);
    ans.push(req.body.b30);
    ans.push(req.body.b31);
    ans.push(req.body.b32);
    ans.push(req.body.b33);
    ans.forEach(element => {
        const student = new Student(element);
        student.save();
    });
    // const answers = Student.getAns()
    console.log(req.body)
    // Student.clear()
    res.send("Дані надіслано")
};

exports.Show_Questions = function(req, res) {

  
  Student.clear()
    Vacancy.findAll({ where: {isActive: true},
        include: [
          {
            model: Competency,
            as: "Competencies"
          }
        ]
      }).then(vacancies => {

        let raw_competency_data= [];
        let competency_data= [];
        // console.log(vacancies[0].dataValues.Competencies[0].dataValues.id)
        vacancies.forEach(vacancy => {
            // console.log(vacancy.dataValues)
            vacancy.dataValues.Competencies.forEach(competency => {
                // console.log(competency.dataValues.id)
                raw_competency_data.push(competency.dataValues.id)
            });
        });
        raw_competency_data.sort()
        let competency_amount = 33;
        let competency_values = []
        for (let index = 1; index <= competency_amount; index++) {

          competency_values.push(index)
        }
        for (let index = 0; index < competency_values.length; index++) {

          competency_data.push(raw_competency_data.includes(competency_values[index]))
        }
        res.json({ competency_data: competency_data})

}).catch(err => console.log(err));
}

exports.Show_Vacansies = function(req, res) {

  const Answers = Student.getAns()
  // console.log(Answers[0].ans[0])
  const competency_i = []
  Answers.forEach(block => {
    // console.log(block.ans[0])
    if( (block.ans[0] == "Y" && block.ans[1] == "Y") || (block.ans[0] == "Y" && block.ans[2] == "Y") || (block.ans[1] == "Y" && block.ans[2] == "Y")){
      competency_i.push(true)
    }else{
      competency_i.push(false)
    }
  });
  
  // res.json(competency_i)
  Vacancy.findAll({ where: {isActive: true},
    include: [
      {
        model: Competency,
        as: "Competencies"
      }
    ]
  }).then(vacancies => {
    const vac_output = []
    vacancies.forEach(vacancy => {
      
      const assigned_competencies = []
      vacancy.Competencies.forEach(function(item, index, array){
        if(competency_i[item.id-1])
        assigned_competencies.push(item.id)
      });
      if( vacancy.Competencies.length == assigned_competencies.length) {
        vac_output.push(vacancy)
      }
    });
    res.json(vac_output)
  })
}
