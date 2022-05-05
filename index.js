

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
var tabla = 5;
var imprimeP = "";
var imprimirHtml = document.getElementById("root");

console.log("lement: ", imprimirHtml);

do {
    var result = n3 * tabla;
    console.log("resultado: " + n3 + " X " + tabla + " = " + result );
    imprimeP = imprimeP + "<p>" + n3 + " X " + tabla + " = " + result + "</p>";
    n3 = n3 + 1;
} while (n3 < 11);
console.log("etiquetas p: ", imprimeP);
imprimirHtml.innerHTML = imprimeP;














