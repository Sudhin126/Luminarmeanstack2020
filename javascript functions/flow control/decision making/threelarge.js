var num1 = 20;
var num2 = 10;
var num3 = 30;

if ((num1 > num2) & (num1 >= num3)) {

    if (num2 > num3) {

        console.log("num2 is second largest")

    } else {
        console.log("num3 is second largest")
    }

} else if ((num2 > num1) & (num2 > num3)) {
    if (num1 > num3) {

        console.log("num1 second maximum")
    } else {

        console.log("num3 is second largest")
    }
}