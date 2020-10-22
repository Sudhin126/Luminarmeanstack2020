var arr = [10, 10, 20, 20, 30, 32, 31];


var cnt = {};


for (number of arr) {

    if (number in cnt) {
        cnt[number] += 1;
    } else {
        cnt[number] = 1;

    }

}
console.log(cnt)