var arr = [1, 2, 3, 4, 5, 6, 7]


var element = 8;

var flag = 0;

for (item of arr) {


    if (element == item) {

        flag += 1;
        break;



    }
}
if (flag > 0) {

    console.log("element found")

} else {
    console.log("element not found")

}