var input = [3, 1, 6, 5, 4]
var inp = 2;
for (number1 of input) {
    for (number2 of input) {

        for (number3 of input) {

            data1 = number1 * number1;
            data2 = number2 * number2;
            data3 = number3 * number3;
            if (data3 == data1 + data2) {
                console.log("output is: " + number1 + " " + number2 + " " + number3)
                return;
            }
        }
    }

}