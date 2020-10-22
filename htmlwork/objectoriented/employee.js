class employe {

    constructor(eid, ename) {
        this.eid = eid;
        this.ename = ename;

    }
    getemployee() {
        console.log("eid=" + this.eid);
        console.log("ename=" + this.ename)


    }

}
var emp = new employee(100, "ajay")