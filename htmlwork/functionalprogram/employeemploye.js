class employe {

    constructor(eid, ename, desig, salary) {


        this.eid = eid;

        this.ename = ename;
        this.desig = desig;
        this.salary = salary;

    }

    getEmp = () => {


        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary);
    }
}

var obj = new employe(1001, "ajay", "developer", 25000);


var obj1 = new employe(1002, "vijay", "developer", 20000);


var obj2 = new employe(1003, "vinodth", "developer", 30000);


var emp = [];
emp.push(obj);
emp.push(obj1);
emp.push(obj2);


for (e of emp) {
    if (e.desig == "developer") {

        console.log(e.ename + e.desig)

    }


}