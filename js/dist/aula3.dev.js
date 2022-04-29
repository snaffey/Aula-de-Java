/*
var idade = "20";
//alert(idade.length);
//alert(new  String(idade).length);
var nome = new String ("Tiago");
document.write(nome);
console.log(nome); 
alert(nome.valueOf());

var num1 = new Number(1.120);
alert(typeof(num1));
var n = 12;
alert(typeof(n));
var n1 = new Number("Teste");
document.write("<br />Valor de n1 "+n1);
var n2 = new Number("123")
document.write("<br />Valor de n2 "+n2);
alert(typeof(n2));
var n4 = new Number(false)
document.write("<br />Valor de n4 "+n4);
var n2 = new Number(true)
document.write("<br />Valor de n5 "+n5);
var n6 = new Number(1234)
var n7 = new Number(n6);
document.write("<br />Valor de n6 "+n6);
document.write("<br />Valor de n7 "+n7);
document.write("<br />Valor de MIN_VALUE "+Number.MIN_VALUE);
document.write("<br />Valor de MAX_VALUE "+Number.MAX_VALUE);
document.write("<br />Valor de NEGATIVE_INFINITY "+Number.NEGATIVE_INFINITY);
document.write("<br />Valor de POSITIVE_INFINITY "+Number.POSITIVE_INFINITY);

var numero = new Number("10.12345");
var nFixed = numero.toFixed();
document.write("<br />Valor do numero: "+nFixed);
document.write("<br />Valor do numero: "+numero.toFixed(3));
document.write("<br />Valor do numero: "+numero.toPrecision());
document.write("<br />Valor do numero: "+numero.toPrecision(2));
*/
//String

/*
var exemplo = "JavaScript";
document.write("Original->"+exemplo+"<br />")
*/

/*
var big = exemplo.big();
document.write("Texto método big ->"+big)
document.write("Texto método bold ->"+exemplo.bold)
document.write("Texto método italics ->"+exemplo.italics)
document.write("Texto metodo small ->"+exemplo.small)
document.write("Texto metodo strike ->"+exemplo.strike)
document.write("Texto metodo sup ->"+exemplo.sup)
document.write("Texto metodo sub ->"+exemplo.sub)
document.write("Texto metodo LowerCAse ->"+exemplo.toLocaleLowerCase)
document.write("Texto metodo UpperCase ->"+exemplo.toUpperCase)
*/

/*
var subString = exemplo.substring(0,4);
document.write("Texto metodo subString (0,4)->"+subString+"<br />")
document.write("Texto metodo subString (4)->"+exemplo.substring(4))
*/

/*
document.write("Texto metodo CharAt(str.length - 1)->"+exemplo.charAt(exemplo.length - 1)+"<br />")
//Codigo da tabela AscII
document.write("Texto metodo charAt(3)->"+exemplo.charAt(3)+"<br />")
document.write("Texto metodo charCodeAt(3)->"+exemplo.charCodeAt(3)+"<br />")
*/
//Array
//var numeros = new Array();
//Construção com atribuição de parametros
//var nivel = new Array("baixo","medio","alto");
//construção simples com dimensionamento

/*
var exemplo = new Array(5);
exemplo[0]=12;
exemplo[1]=1125;
exemplo[2]=12266;
exemplo[3]=12334;
exemplo[4]=1248999;
*/
// Forma literal 

/*
var nivel = ["baixo","medio","alto"];
console.log(nivel);
*/
// JOIN 

/*
str_1 = nivel.join();//baixo,medio,alto
str_1 = nivel.join(", ");//baixo, medio, alto
str_1 = nivel.join("* ");//baixo* medio *alto
str_1 = nivel.join("<br />");
//alert(str_1);
document.write(str_1);
*/
// Dimensionar para 2 elementos

/*
var nivel = ["baixo","medio","alto"];
nivel.length = 2 ;
console.log(nivel);
*/
//POP - remover no final, retorna o conteudo removido

/*
var nivel = ["baixo","medio","alto","muito alto"];
var eliminado = nivel.pop();
alert(eliminado);
console.log(nivel);
*/
// PUSH - inserir no final

/*
var nivel = ["baixo","medio"];
var novo = nivel.push("alto","muito alto");
console.log(nivel);
console.log(novo);
*/
//REVERSE - inverter o array

/*
var nivel = ["baixo", "medio", "alto", "muito alto"];
console.log(nivel);
nivel.reverse();
console.log(nivel);
//consome o primeiro elemento
var removido = nivel.shift();
//alert(removido);
var lp = new Array("XHTML", "PHP", "JAVA", "C", "MySQL");
document.write("<p> Este vetor possui " + lp.length + "elementos, sendo eles: </p>");
document.write("<ul>");
for (var i = 0; i < lp.length; i++)
    document.write("<li>" + lp[i] + "</li>");
document.write("<ul/>");
*/
//-----------------------------------------------------------------------------------------------

/*
var rof = new Array("a", "b", "c", "d");
var rof2 = new Array(rof.length);
var count = 0;
for (var i = rof.length; i > 0; i--)
    rof2[count++] = rof[i - 1];
document.write("<ul>");
for (var i = 0; i < rof.length; i++)
    document.write("<li>" + rof2[i] + "</li>");
document.write("</ul>")
*/
//------------------------------------------------------------------------------------------------

/*
var nome = "http://www.epcc.pt/?polo=funchal";
console.log(nome);
var copy = new Array(nome.length);
var cnt = 0;
for (var i = nome.length; i > 0; i--) {
    copy[cnt++] = nome[i - 1];
}
copy = copy.join("");
console.log(copy);
*/
//-------------
//Array Avançado - Multidimensional
//Sintaxe : var nomeArray = new Array(new Array,new Array);

/*
var vN = new Array("Sergio","Ana");
var vI = new Array(18,55);
vT = new Array(vN,vI);
*/
//OU

/*
var vT = new Array();
vT[0] = new Array("Sergio","Ana")
vT[1] = new Array(18,56);
*/

/*
document.write("<br/>"+vT[0][0]+"<br/>");
document.write("<br/>"+vT[0][1]+"<br/>");
document.write("<br/>"+vT[1][0]+"<br/>");
document.write("<br/>"+vT[1][1]+"<br/>");
*/
//atraves do literal

/*
var vT = [
    ["Sergio","Ana","Rui"],
    [18,55]
];
document.write("<br />"+vT[0][1]+"<br />");
console.log(vT[0].length);
console.log(vT[1].length);
*/
//--------------------------------------
// Array Associativo '{}'- existe uma associação de dados- ContentValues()- Chave, valor

/*
var vPessoa = {
    id:123,
    nome: "Sérgio",
    morada: "FNC"
};
document.write("<br />Pessoa->nome: "+vPessoa.nome);
var Escola = {
    escola:"EPCC",
    qtCursos: 4,
    prog21:{
        A1: "Rui",
        A2: "Ana"
    },
    saude:{
        a1: "Rui",
        a2: "Ana",
        a3: "Maria",
        a4: "Juliana"
    }
};
document.write("<br />"+Escola.escola+" tem "+Escola.qtCursos+" curso, o primeiro aluno do curso prog21 é "+Escola.prog21.A1);

//Date
var data = new Date();
document.write("<br />Data: "+data);
//em relação a 01/01/1970
var dataM = new Date(1000*60*60*24*365);
document.write("<br />Data: "+dataM);
var dataE = new DataCue(2012,02,11,12,12,14,1000);
document.write("<br />Data: "+dataE);
var hoje = new Date ();
var h = hoje.getHours();
var m = hoje.getMinutes();
var s = hoje.getSeconds();
document.write("<br />Data de hoje: "+h+":"+m+":"+s)
var dias_semana = ["domingo","segunda","terça","quarta","quinta","sexta","sabado"];
var dia_semana = dias_semana[hoje.getDay()];
document.write("<br />O dia da semana é: "+dia_semana);
document.write("<br /> Data no Formato DD/MM/AAAA: "+hoje.toLocaleString());
// Math-op. matematicas
var pi = Math.PI;
document.write("<br /> PI ->"+pi);
var teto = Math.ceil(1.4);
document.write("<br /> CEIL ->"+teto);
var chao = Math.floor(1.6);
document.write("<br /> FLOOR ->"+chao);
var pot = Math.pow(3,4);
document.write("<br /> POW ->"+pot);
var alr = Math.random ();
document.write("<br /> RANDOM ->"+alr);
var nmr = alr.toFixed(2);
document.write("<br /> alr ->"+nmr);
*/
"use strict";