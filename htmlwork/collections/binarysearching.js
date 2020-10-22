var ar = [1, 2, 3, 4, 5, 6, 7, 11]
var low = 0;
var flag = 0;
var element = 6;
var upp = ar.length - 1;


while (low < upp) {


    mid = Math.floor((low + upp) / 2);


    if (element > ar[mid]) {

        low = mid + 1;

    } else if (element < ar[mid]) {
        upp = mid - 1;


    } else if (element == ar[mid]) {
        flag += 1;
        break;
    }
}
if (flag > 0) {
    console.log("element  found")
} else {

    console.log("element not found")
}