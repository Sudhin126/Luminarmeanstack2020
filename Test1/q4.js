n = 2
min = 49
max = 65
for (i = 0; i <= max; i++) {
    data = i ** n;
    if (data <= max && data >= min) {
        console.log(data + "(" + i + "^" + n + ")")
    }
}