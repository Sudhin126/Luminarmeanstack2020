class employee {

    constructor(eid, name, desig, join, resign) {



        this.eid = eid;
        this.name = name;
        this.desig = desig;
        this.join = join;
        this.resign = resign;

    }

    getEmployee = () => {

        console.log(this.eid);
        console.log(this.name);
        console.log(this.desig);
        console.log(this.join);
        console.log(this.resign);



    }
}

var obj = new employee(100, "Ajay", "Developer", 1981, 2003);
var obj1 = new employee(101, "vijay", "Developer", 1992, 2008);
var obj2 = new employee(102, "bijoy", "BA", 1999, 2007);
var obj3 = new employee(103, "jhon", "BA", 1989, 2010);
var obj4 = new employee(104, "Danie", "Qa", 2009, 2014);
var obj5 = new employee(105, "Lari", "Qa", 1987, 2010);


var emp = [];
emp.push(obj);
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);
emp.push(obj4);
emp.push(obj5);

console.log("Q1:All employee name and designation")
var empl = emp.filter(obj => obj.name, obj.resign)
for (st of empl) {
    console.log(st.name, st.desig)
}

console.log("Q2:2Employee who have designation developer")
var desi = emp.filter(obj => obj.desig == "Developer")

console.log(desi)
console.log("Q3:Employee who have work in 80s")
var eightys = emp.filter(obj => obj.join > 1980 && obj.join < 1990)
for (st of eightys) {

    console.log(st)
}


console.log("Q4:Employee who have experience>9")
var expe = emp.filter(obj => (obj.resign - obj.join) > 9)
for (ex of expe) {
    console.log(ex)
}

console.log("Sorted order")
var sort = emp.map(obj => obj.join).sort((obj1, obj2) => obj1 - obj2)

for (so of sort) {
    console.log(so)
}