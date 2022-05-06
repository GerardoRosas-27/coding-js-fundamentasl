

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

console.log("---------------------------");

try {
    //throw XPathExpression
    funcionFantasma();
    console.log("exito ejecutando");
} catch (error) {
    console.error("este es un error",error);
}

finally {
    console.log("siempre se ejecuta");
}

console.log("---------------------------");
//var varArray = {}
               // posición del valor
              //[ 0 , 1 , 2, 3, 4, 5, 6, 7, 8, 9 ]
 var varArray = [ 1 , 2 , 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log("es un arreglo: ", varArray);
console.log("valor: ", varArray[0]);

// agrega el final
varArray.push(11);
//lo agrega al principio
varArray.unshift("primero");
                                // = 10
for (var index = 0; index <  varArray.length; index++) {
                          //[0]
    var element = varArray[index];
    console.log("valor: ", element);
}
//varArray[0] = -1;  

console.log("es un arreglo: ", varArray);

























