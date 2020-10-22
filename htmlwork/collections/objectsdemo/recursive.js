var pattern = "ABABABAC";
var words = data.split(" ")

var obj = {};


for (char of pattern) {

    if (char in obj) {
        console.log("first recursive is" + char);
        break;
    } else {
        obj[charcter] = 1;

    }

}
console.log(obj)