const students = [
    {id: 21, name: "Saiful islam"},
    {id: 31, name: "Abdul karim"},
    {id: 42, name: "Abdur rahim"}
];
const studentsArray = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const name = element.name;
    studentsArray.push(name)
}

const name = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id > 30);
const bigger1 = students.find(s => s.id> 30);
console.log(bigger1);
console.log(bigger);
