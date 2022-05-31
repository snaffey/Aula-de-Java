/*
var num = 1;
if ( num > 1 ) {
	alert("Maior que 1");
}else	
	alert("Menor ou igual 1");
*/

// Verificar par ou impar de um numero

/*
var num = 20;
if((num % 2)==0)
	alert("par");
else
	alert("impar");

//Condição verificada

var verdade = true;
if(verdade)
	alert("Verdade!");
*/

// Mais que uma verificação 

/*
var num=3;
if (num==1)
	alert("1");
else if(num==2){
	alert("2");
	console.log("2");
	}
else if(num==3)
	alert("3");
else 
	alert("Maior que 3");
*/

// CONSTANTES


const SEMANA = 7;
document.write(SEMANA);
console.log(SEMANA);
var idade = prompt ("Idade?","Insira aqui a idade.");
if (idade <= 10)
	document.write(" <=10 ");
else if(idade <=20)
	document.write(" 11->20 ");
else if(idade <=30)
	document.write(" 21->30");
else 
	document.write(" >31 ");

//switch


var num = 1;
switch(num){
	case 1:
		alert("1");
		break;
	case 2:
		alert("2");
		break;
	case 3:
		alert("3");
		break;
	default:
		alert("Outro!");
}


// Estrutura de repetição

for(var i=0 ; i<10 ;i++)
	alert(i);

var par = "Par";
var impar = "Ímpar:";
for(var i = 0; i<=40 ; i++){
	if(i%2 == 0)
		par += i;
	else
		impar += i+" ";
}
document.write(par + "<br />");
document.write(impar);


/*	Repetição em ciclo de objetos for in (repetição em objetos)
	Instrução: 

	for(variável in objeto){
		código de execução(instrução) em objetos
	}
*/

/*
var Pessoa = {
	nome: "Tiago",
	idade: 16,
	morada: "FNC"
};
for(var atributos in Pessoa){
	document.write(atributos+"->"+Pessoa[atributos]+"<br />");
}
*/

// Mostra o tipo de return

/*
alert(typeof(Pessoa));
alert(typeof(Pessoa.nome));
*/

//while

/*
var i=0;
while(i<20){
	document.write(i);
	i++;
}
*/

// do...while();

/*
var i=0;
do{
	alert("Dentro->"+i);
	i++;
}while (i<4);
*/

// Estruturas de tratamento de excepções(erros).
/*
Alguns metodos/prop.
.message() - Retorna a msg de erro.
.name - Retorna o nome ou o tipo de erro
.toString - Retorna o tipo e a mensagem de erro.
*/

/*
var x = prompt("Numero maior que 10");
try{
	var x = y;
}catch(erro){
	alert(erro.toString());
}
*/

try{
	if(x<10 && x>=5)
		throw "Erro:(5-9)";
	if(x<5)
		throw "Erro:(<5)"
		document.write("Valor digitado foi: "+x);
}catch(erro){
	if(erro == "Erro:(<5)")
		alert("O numero inserido foi inferior a 5.");
	else if(erro == "Erro;(5-9)")
		alert("O numero inserido esta entre 5-9");
}finally{
	alert("Terminou a verificação de erro.");
}