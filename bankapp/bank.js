class Bank {

    static getAccountDetails() {

        let data = {
            sreedevi: { username: "sreedevi", password: "abc123", acno: 1001, balance: 50000 },
            test1: { username: "test1", password: "test1", acno: 1002, balance: 5000 },
            test2: { username: "test2", password: "test2", acno: 1003, balance: 6000 },
            test3: { username: "test3", password: "test3", acno: 1004, balance: 7000 },

        }
        return data;
    }


    static login() {
        let usname = document.querySelector("#uname").value;
        let pwd = document.querySelector("#pwd").value;
        let data = Bank.getAccountDetails()
        if (usname in data) {
            let password = data[usname]["password"];
            if (pwd == password) {
                swal("login sucess!", "", "success");
                setTimeout(() => window.location.href = "userhomepage.html", 2000)
            } else {
                swal("login failed!", "Wrong Password!", "error");

            }

        } else {
            swal("login failed!", "inavlid user...!", "error");

        }

    }
    static deposit() {
        let uname = document.querySelector("#uname").value;
        let amt = Number(document.querySelector("#amt").value);
        let data = Bank.getAccountDetails();
        let deposit_id = document.querySelector("#deposit_id");
        if (uname in data) {
            data[uname]["balance"] += amt;
            let bal = data[uname]["balance"];
            deposit_id.textContent = "your available balance" + bal;
            alert("available balance=" + data[uname]["balance"]);
        } else {
            swal("inavlid user...!");
        }
    }
    static withdraw() {
        let uname = document.querySelector("#uname").value;
        let amt1 = Number(document.querySelector("#amt1").value);
        let data = Bank.getAccountDetails();
        let bal = document.querySelector("#bal")
        let deposit_id = document.querySelector("#deposit_id");
        if (uname in data) {
            data[uname]["balance"] -= amt1;
            let bal = data[uname]["balance"];
            swal(amt1 + " withdraw from your Account", "Your Available balance is" + bal, "success");

        } else {
            swal("", "inavlid user...!", "error");
        }





    }

}