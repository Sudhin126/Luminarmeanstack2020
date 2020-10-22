class bank {

    createaccount(pname, acno = name, balance, b_name) {

        static get collegename() {
            var clgname = "Luminar";
            console.log(clgname)

        }

        setstudent() {
            this.rol = rol;



        }


        this.person_name = pname;
        this.acno = acno;
        this.balance = balance;
        this.bank_name = b_name;

    }
    deposit(amount) {

        this.balance += amount;
        console.log("your" + this.bank_name + "account credited with" + amount + "avl bal=" + this.balance)

    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance in your account")
        } else {
            this.balance = amount;
            console.log("your" + this.bank_name + "account debited with" + amount + "avl bal=" + this.balance)


        }


    }
    balanceEnq() {
        console.log("you current account balance=" + this.balance)
    }

}
var obj = new bank()

obj.createaccount("ajay", 1111001, 2000, "SBK")
console.log(obj.person_name)
console.log(obj.acno)
obj.withdraw(5000)
obj.deposit(10000)



bank.getbank();