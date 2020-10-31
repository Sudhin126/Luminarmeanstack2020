var inp = 1;
num1 = inp;
data = 0;
if (num1 != 1) {
    for (i = 1; i < inp; i++) {

        num1 = (num1 * 10) + inp;
        data += num1;


    }
}
console.log(data + inp)