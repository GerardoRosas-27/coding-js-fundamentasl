

var n = 0;
var x = 5;

while (n < x) {
    console.log("resultado n: ", n);
    n = n + 1;
}
console.log("--------------------------")
var n2 = 0;
var x2 = 6;

do {
    console.log("resultado: ", n2);
    n2 = n2 + 1;
} while (n2 < x2);

console.log("---------------------------")


var n3 = 1;

do {
    for (var index = 1; index < 11; index++) {
        var result = index * n3;
        console.log("resultado: " + index + " X " + n3 + " = " + result );
    }
    console.log("-----")
    n3 = n3 + 1;
} while (n3 < 11);
















