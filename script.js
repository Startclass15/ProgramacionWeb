//Basicos de Javascript
//Variables
//1. VARIABLE SIMPLE (var) Ojo:Ya no utilizados en sitios web modernos
var nombre="Kevin Arroyo";
var numero=15.5;
var encender=true;

nombre="Juan";
//2. VARIABLE COMPLEJA (let)
let color="Rojo";
//3. VARIABLES CONSTANTES (const)
const usuario="Abc";

//usuario="123";

//Alertas o Notificaciones
alert(usuario)
//Obtencion de datos en Notificacion (prompt)
let nombreUsuario=prompt("Ingrese su nombre ")
alert(nombreUsuario)


//Manipulacion DOM - por ID (getElementById)
let titulo=document.getElementById("titulo")
// Modificacion de texto de elementos
titulo.textContent="JavaCript - DOM";
titulo.style.color="red";

//Manipulacion DOM - Elementos (querySelector)
const parrafos=document.querySelector("p");
parrafos.style.color="green";

//Manipulacion DOM - Crear Elementos (createElement)
const materia=document.createElement("h3");
materia.textContent="Este texto esta creado con JavaScript";
document.body.appendChild(materia)
