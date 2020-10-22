var num = 9;
for (var i = 2; i < num; i++) {

    if (num % i == 0) {
        flag += 1;
        break;
    } else {
        flag = 0;
        console.log("not prime")
    }

} else {
    console.log(" prime")
}
}