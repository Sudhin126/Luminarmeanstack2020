class tweets {
    constructor(name, tweet, total) {
        this.name = name;
        this.tweet = tweet;
        this.total = total;

    }
    gettweets = () => {
        console.log(this.name);
        console.log(this.tweet);
        console.log(this.total);

    }
}
var obj1 = new tweets("sachin", "teweet1 ", 1)
var obj2 = new tweets("sehwag", "tweet1 ", 1)
var obj3 = new tweets("kholi", "tweet1 ", 1)
var obj4 = new tweets("kholi", "tweet1 ", 1)
var obj5 = new tweets("sachin", "teweet2 ", 2)

var ar = [];
ar.push(obj1);
ar.push(obj2);
ar.push(obj3);
ar.push(obj4);
ar.push(obj5);

// var maxtotal = ar.map(obj => obj.total).reduce((obj1, obj2, obj3, obj4, obj5) => obj1 > obj2 ? obj1 : obj2 & obj2 > obj3 ? obj2 : obj3 & obj3 > obj4 ? obj3 : obj4 & obj4 > obj5 ? obj4 : obj5)
// console.log(maxtotal)
console.log("sorted order")
var sot = ar.map(obj => obj.tweet).sort((obj1, obj2) => obj1 - obj2)
console.log(sot)