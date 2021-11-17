//(function () {
'use strict';
class Student {

    constructor(firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    }
}


let studentList = [
    new Student('Ivan', 'Ivanov', 15, 6),
    new Student('Pesho', 'Peshev', 16, 5),
    new Student('Chaim', 'Freid', 11, 5),];

function print(...students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`${students[i].firstName} ${students[i].lastName} is ${students[i].age} years old. Grade: ${students[i].grade}`);
    }
}

print(...studentList);

function reconstructStudents(students) {
    students.forEach(function (student) {
        let { firstName, lastName, ...rest } = student;
        const studentRedo = Object.create({
            firstName: lastName,
            lastName: firstName,
            ...rest
        });
        console.log(studentRedo);
    });

}
reconstructStudents(studentList);
//})();
