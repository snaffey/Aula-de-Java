"use strict";

/*
Sintaxe:  n nome(){
    comandos
}
chamada da função
nome();
*/
function fSemRetorno() {
  document.write("Função sem return");
}

fSemRetorno(); //Função com return

function calculoSoma() {
  return 10 + 4;
}

var soma = calculoSoma(); //document.write("<br />Soma: "+soma);

imprime(soma); //Função com param.

function imprime(txt) {
  document.write("<br />" + txt + "<br />");
}

imprime("Ola, Tiago!");

function mult(x, y) {
  return x + y;
}

imprime(mult(12, 14));
var res = mult(12, 14);
imprime(res); //Criar uma função atraves de um construtor

var mult1 = new Function("v1,v2", "return v1*v2;");
imprime(mult1(12, 13)); //Criar atraves da forma literal 

var mult2 = function mult2(v1, v2) {
  return v1 * v2;
}; //imprime(mult2(1212,1212));


function onClick() {
  alert("Fui clicado");
}
/*
NOTA:
Esta é uma má pratica, uma vez que devemos definir os elementos em função da sua declaração(semântica), como tal,devemos ter um ficheiro html com apenas tags html, css apenas estilos, Js apenas com rotinas.
*/

/*Sintaxe:
document.getElementById() -> Associar o elemento através de identificação

document.getElementById(refJs).onclick = function(){
    ("Fui clicado (via JS)");
}
*/
//Erro porque o momento de interpretação acontece antes da leitura do código

/*
window.onload = function(){
    document.getElementById(refJs).onclick = function(){
        alert("Fui clicado (via JS)");
    }
}
*/

/*
BOM(Browser Object Model)
Objeto JS que descreve o browser, desta forma acedemos as prop. e funções do navegador.
*/


function atualizarPagina() {
  window.location.reload();
}

function retPagina() {
  window.history.back();
}

function irParaGoogle() {
  location.replace('https://google.com');
}
/*
************************************************************************************************
Objetos de manipulação temporal setTimeout() - executa um determinado código de x em x tempo, 
retorna um identificador dessa referencia clearTimeout(). cancela um evento laçado pelo settimeout.
*/


var c = 20;
var t;

function iContagem() {
  document.getElementById("txt").innerHTML = c;
  c = c - 1; // c -= 1; c--;

  t = setTimeout("iContagem()", 1000); //mls
}

var a;
var t1;

function iniciar() {
  a = prompt("Iniciar em quantos segundos?");
  contador();
}

function contador() {
  if (a > 0) {
    document.getElementById('txt').innerHTML = a;
    a = a - 1;
    t1 = setTimeout("contador()", 1000);
  } else alert("fim");
}

function cancelar() {
  clearTimeout(t1);
  alert("Cancelado!");
}

var t;
var b;
var S;

function Site() {
  S = prompt("Qual o site ?");
  b = prompt("Quantos segundos para ir para o site?");
  Time1();
}

function Time1() {
  if (b >= 0) {
    document.getElementById('txt').innerHTML = b;
    b--;
    t = setTimeout("Time1()", 1000);
  } else location.replace(S);
}

function cancelar1() {
  clearTimeout(t);
  alert("Cancelado!");
} // Carregamento total da pagina,todos os recursos internos e externos foram carregados


window.onload = function () {
  /*
  alert("appName:"+navigator.platform);
  alert("appVersion:"+navigator.appVersion);
  alert("appAgent:"+navigator.userAgent);
  confirm("Tem a certeza?");
  
  open("Aula1.html","Title Page","width=200,height=200","toolbar=no","location=no")
  document.write(location.href);
  document.write(location.protocol);
  */
  //setTimeout("relogio()",1000)
  //setInterval - definimos um intervalo de tempo entro requisições
  setInterval(relogio, 1000);
  var atualiza = 3000;
  var intervalControl = setInterval(rodarImagens, atualiza);
};

function verificarTime(j) {
  if (j < 10) j = "0" + j;
  return j;
}

function relogio() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  h = verificarTime(h);
  m = verificarTime(m);
  s = verificarTime(s);
  var time = h + ":" + m + ":" + s;
  document.getElementById("relogio").innerHTML = time;
} //Criação pelo literal

/*
var imagens = [];
imagens[0]="./imagens/1.jfif";
imagens[1]="./imagens/2.jfif";
imagens[2]="./imagens/3.jfif";
imagens[3]="./imagens/4.jfif";
imagens[4]="./imagens/5.jfif";
var IMagensalt
imagensalt =img 
*/


var imagens = [];
imagens[0] = {
  src: "./imagem/1.jpg",
  alt: "Img 1"
};
imagens[1] = {
  src: "./imagem/2.png",
  alt: "Img 2"
};
imagens[2] = {
  src: "./imagem/3.png",
  alt: "Img 3"
};
var posImagem = 0; // Variável que armazena e controla a referencia

function rodarImagens() {
  document.images["rodar"].style.width = "200px";
  document.images["rodar"].style.height = "200px";
  document.images["rodar"].src = imagens[posImagem]["src"];
  document.images["rodar"].title = imagens[posImagem++]["alt"];
  if (posImagem >= imagens.length) posImagem = 0;
}