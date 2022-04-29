/*
var str = "tiago é meu nome";
var regex = new RegExp("tiago");
alert(regex.test(str));
*/

// Atraves do literal
/*
var str = "sergio é o meu nome";
var regex = /sergio/;
alert(regex.test(str));
*/

// Modificadores de pesquisa
// i- ignora case sensivity
/*var str = "sergio é o meu nome";
var regex = /sErgio/i;
alert(regex.test(str));*/

//Aninhar a expressão
//var redex = /seRgIo/i.test("sergio é o teu nome");

/*
exec() - executa um padrão numa determinada string, retorna um array com a info obtida
*/

/*
var str = "sergio é o meu nome";
document.write(/seRgIo/i.exec(str)+"<br />");
*/

/*
g -> pesquisa global (g) ignora case sen. (i) e retorna todas as ocorrências

var str = "sergio é o meu nome, e tambem é o primeiro nome sErgio";
document.write(/seRgIo/i.exec(str)+"<br />");

match() - executa um padrão numa determinada string, retorna um array ou nulo se nada for encontrado

document.write(str.match(/sergio/ig)+"<br />");

document.write("<b>Classe de chars</b><br />");
//.-> encontra a ocorrência de qlq carácter(exceto novas linhas)
document.write(/./.test("Programador")+"<br />");
//\w -> encontra a ocorrencia de qlq caracter(alfanumerico: a-z;A-Z;0-9;_)
document.write(/\w/.test("Programador")+"<br />");
document.write(/\w/.test("*-*-*-**-")+"<br />");

// \s -> encontra a ocorrencia de qlq carater(espaço: \t\r\n\v\f)
document.write(/\s/.test("Programador")+"<br />")

// \d -> encontra a ocorrencia de qlq carater-digito-(numerico: 0-9)
document.write(/\d/.test("Prog21")+"<br />")

// ^ -> encontra a ocorrencia de qlq caracter no incio de pesquisa
document.write(/^f/.test("Programador21")+"<br />")
document.write(/^P/.test("Programador21")+"<br />")
document.write(/^p/.test("Programador21")+"<br />")
document.write(/^p/i.test("Programador21")+"<br />")

// $ -> encontra a  ocorrencia de qlq carater no final da pesquisa
document.write(/er12$/.test("Programador12")+"<br />");
document.write(/r12$/.test("Programador12")+"<br />");

document.write(/\d$/.test("Programador21")+"<br />");
document.write(/\d\d\d$/.test("Programador21")+"<br />");

//verificar um numero tel. Ex: 291-112233
document.write(/^\d\d\d-\d\d\d\d\d\d$/.test("291-112233")+"<br />");
document.write(/^\d\d\d-\d\d\d\d\d\d$/.test("2913-112233")+"<br />");

// Quantificadores de repetição
// ? -> Encontra zero ou uma ocorrencia, equivalente a {0,1}
document.write(/\d?/.test("291-112233")+"<br />");
*/

// * -> Encontra zero ou mais ocorencia, equivalente a {0,muitos}
//document.write(/\d*/.test("291-112233")+"<br />")
/*
// + -> encontra uma ou mais ocorrencia,equivalente a {1,}
//document.write(/\d+/.test("291-112233")+"<br />")

// '{x}'- Encontra x ocorrencia.
document.write(/\d{6}/.test("291-112233")+"<br />");
document.write(/\d{6}$/.test("291-112233")+"<br />");
document.write(/\d{3}/.test("291-112233")+"<br />");
document.write(/\d{3}-\d{6}$/.test("291-112233")+"<br />");

//(291)121-2423
document.write(/\(?\d{3}\)?\d{3}-\d{4}/.test("(291)121-2423")+"<br />");

//datas- "12-12-2009"
document.write(/^\d{2}-\d{2}-\d{4}$/.test("12-12-2009")+"<br />");

//variaçãp no final da data: podemos er 2ou 4 digitos : 09 ou 2009
document.write(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12-12-2009")+"<br />");
document.write(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12-12-09")+"<br />");
*/

//Validação de email
/*
    Etapas:
    1- Todo o email começa com caracteres : \w
    2- localizar a existencia de @: +@\w
    3- Localizar o ponto(.) Nota: Não poemos colocar diretamente o ponto na expressão (padrao), uma vez que é uma classe de caracterers, de modo a contar esta limitação usamos a barra invertida(caracter de saida(escape) )


document.write(/\w+@\w+\.\w{2,3}$/.test("al2021023@epcc.pt")+"<br />");

//Agrupar carateres
//[xyz]- Encontra qlq carater que pertença ao grupo
document.write(/[er]/.test("Abertamente")+"<br />");
document.write(/[er]t/.test("Abertamente")+"<br />");
document.write(/[er]et/.test("Abertamente")+"<br />");
document.write(/[er]t/.test("Sergio")+"<br />");

//replace()- executa uma padrão numa determinada string, substitui o padrão por um valor

var str = "sergio é o nome, e tambem nome do prof";
alert(str.match(/sergio/ig));
alert(str.replace(/sergio/ig,"filipe"));

var str = "Perto de braga, o porto é a maior cidade de portugal"
alert(str.match(/p[f-z]/ig))
alert(str.replace(/p[f-z]/ig,"grande"));

alert(str.replace(/p[f-z]+\wo/ig,"grande"));
*/
/*
var str_URL = "www.epcc.pt/index.php/formacao-de-formadores.html";
var regex = /www.epcc.pt\/\w{5,}\.\w{3}\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,}/;
document.write(regex.test(str_URL));

// '()' - Agrupar caracteres numa determinada cláusula, aceder á clausula criada através da expressão '$' valor da expressão
var regex = /(www.epcc.pt\/\w{5,}\.\w{3})(\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,})/;
document.write(str_URL.replace(regex,"http://$1:sergio.html"));
*/

//----------------
/*
var LINK0 =[
    "www.atola.pt/index.pt",
    "www.atola.pt/index.php",
    "www.atola.pt/noticias.php",
    "www.atola.pt/home.php",
]

vallinks(LINK0)
regex = /(\w{3}\.\w{5}\.\w{2,})\/(\w{4,}\.\w{2,})/
function validar(str){
    return regex.test(str)
}
function vallinks(LINK){
    var novoLinks = new Array();
    for(var i=0; i < a.length; i++){
        if(LINK[i].length >10){
            var finalL = a[i].match(/\w+\.\w{2,3}$/);
            novoLinks.push("www.atola.pt/")+inverte(finalL);
        }
    }
}

function inverte(finalL){
    var txtInvert = new String(finalL);
    var txtReturn="";
    for (var i = txtinvert.lenght; i > 0; i--)
    txtReturn+=(txtInvert[i-1]);
    return txtReturn
}
*/
//---------------
v1 = new Array ("JOÃO", "ANA", "CARLA","MARIA","ANTÃNIO","RUI");
ulList(v1);

var nv = new Array();
var cont = 0;
for (var i=v1.length-1;i >= 0;i--){
	var itemCurrent = v1[i];
	var testC = itemCurrent[itemCurrent.length-1];
	if(testC == 'A' || testC == 'I')
		nv[cont++] = v1[i];
}
ulList(nv);

function ulList(nv){
	document.write ("<ul>");
	for (var j=0;j < nv.length;j++)
		document.write ("<li>" + nv[j] + "</li>");
	document.write ("</ul>");
}

// OU REG EXP
var regExp = /[O,I]$/i;
var nvRegExp = new Array();
var cont = 0;
for (var i = v1.length-1; i >= 0; i--)
	if (regExp.test(v1[i]))
		nvRegExp[cont++] = v1[i];
	//(regExp.test(v1[i]))?nvRegExp[cont++] = v1[i]:null;
		
ulList(nvRegExp);