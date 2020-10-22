class person {

    setperson(ag, nam) {
        this.age = ag;
        this.name = nam;
    }
    getperson() {

        console.log("name=" + this.name);
        console.log("age" + this.age)


    }



}
var obj = new person();
obj.setperson(25, "ajay");
obj.getperson()


var obj1 = new person();
obj1.setperson(26, "vijay");
obj1.getperson()