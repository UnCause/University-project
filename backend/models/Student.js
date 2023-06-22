const students = [];
module.exports = class Student {

    constructor(ans) {
        this.ans = ans;
    }
    save() {
        students.push(this);
    }
    static getAns() {
        return students;
    }
    static clear() {
        students.splice(0, students.length)
    }
}




// var student;
// module.exports = {
//     calcAns: function(ans) {
//         student.q1 = ans.q1;
//         student.q2 = ans.q2;
//         student.q3 = ans.q3;
//         student.q4 = ans.q4;

//     },
//     getAns: function() {
//         return student;
//     }
// }