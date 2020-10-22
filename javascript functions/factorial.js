function factorial(num) {
    var res = 1;

    for (var i = 1; i <= num; i++) {
        res = res * i;
    }
    console.log("factorial=" + res)

}
factorial(5)