let numero = 5;
let texto = "Hola";

let amigo1  = "Matias";
let amigo2  = "Pedro";
let amigo3  = "Pablo";
let amigo4  = "Lucia";
let amigo5  = "Martina";

let amigos = ["Matias", "Pedro", "Pablo", "Lucia", "Martina"];
console.log(amigos);
document.write(amigos[2]);
amigos[2] = "Luis";
document.write(amigos);

console.log(amigos.length);

// Elimina al final
amigos.pop();
// Agrega al final
amigos.push("Federica");
// elimina al inicio
amigos.shift();
// agrega al inicio
amigos.unshift("Walter");


