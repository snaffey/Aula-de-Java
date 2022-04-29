"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//Declaração e atribuição var
var num = "Tiago"; //alert("O resultado é = " + num);

num = 1; //alert("O resultado é = " + num);

document.write("<br />Tiago<br />");
document.write(num);
/*
OPERADORES
relação dos operadores
+;-;*;/;%

Operadores de incrementar e decrementar
variavel++ ou ++variavel
variael-- ou --variavel
*/

var x = 10;
var a = ++x;
document.write("<br /> x->" + x);
document.write("<br /> a->" + a);
document.write("<p>Sérgio</p>");
document.write("<p>Paragrafo inserido.</p>");
var y = 1;
alert(y >= 2 || y <= 1);
var x = "Tiago";
y = "Santos";
var z = x + " " + y;
document.write("<p>" + z + "</p>"); // OPERADORES TERNARIOS

var num = 2;
var test = num == 1 ? "Igual" : "Diferente";
document.write(test);
var test1 = num == 1 ? "Igual" : num == 2 ? "Igual a 2" : "Diferente";
document.write(test1); ///-----------------------

/*
Recebe mensagem via caixa de texto Input
*/

var recetor = prompr("Minha mensagem", "Meu Texto");
alert("O resultado é = " + recetor);
console.log("ola via consola"); //Verificação de tipo de var typeof

console.log(_typeof(recetor));
console.log(_typeof(2.34e4));