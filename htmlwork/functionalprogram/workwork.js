var arr = "HHHPPSDAAA";
var obj = []

for (word of arr) {
    if (word in obj) {
        obj[word] += 1;


    } else {
        obj[word] = 1;

    }
}
console.log(obj)