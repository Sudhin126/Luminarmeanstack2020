class student {

    constructor(rol, name, total, course) {

        this.rol = rol;
        this.name = name;
        this.total = total;
        this.course = course;


    }

    getstu = () => {

        console.log(this.rol);
        console.log(this.name);
        console.log(this.total);
        console.log(this.course);
    }
}

var obj = new student(10, "akshy", 100, "btec")


var obj1 = new student(20, "manoj", 150, "bca")


var obj2 = new student(5, "midhun", 200, "BA")


var obj3 = new student(15, "lalu", 300, "bca")



var stu = [];
stu.push(obj1);
stu.push(obj2);
stu.push(obj3);


for (e of stu) {

    if (e.total > 135) {

        console.log(e.name + e.total)

    }

}


for (e of stu) {

    if (e.course == "bca") {
        console.log(e.name + e.course)


    }

}
var sum = 0;
for (e of stu) {
    if (e.course == "bca") {
        sum += e.total;
    }
}
console.log("total mark of student is  " + sum);


var total = stu.map(obj => obj.total).reduce((obj1, obj2) => obj1 + obj2)

console.log(total)

var topstud = stu.filter(obj => obj.total == stu.map(obj => stu.total).reduce((obj1, obj2) => obj1 > obj2 ? obj1 : obj2))
console.log(topstud)