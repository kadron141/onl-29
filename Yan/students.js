
// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

const GRADES = {
    A: 12,
    B: 9,
    C: 6,
    D: 0
}

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;

    this.getCredit = function () {
        return GRADES[this.rate] ? GRADES[this.rate] * this.salary : 0;
    }
}

const getRandomGrade = () => {
    const gradesArray = ['A', 'B', 'C', 'D'];
    const index = Math.floor(Math.random() * 4);

    return gradesArray[index]
}

const getRandomSalary = () => {
    return Math.floor(Math.random() * 500);
}

const studentNames = ['Sergey', 'Alex', 'Vika', 'Anna', 'Vlad'];
const students = studentNames.map(studentName => new Student(studentName, getRandomSalary(), getRandomGrade()));
let totalCredit = 0;

students.forEach(student => {
    totalCredit += student.getCredit();
})


console.log(students);
console.log(totalCredit);