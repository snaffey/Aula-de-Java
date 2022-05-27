$(document).ready(function(){
	// Seletores
	/*
	Seletores Simples - usados para aceder o elemento
	Seletor Universal - * , todos recebem este comportamento
	*/
	// $("*").css("color","#0000ff");

	//Seletor identificador - #nome do identificador
	//$(#nome).css("color","#ff00ff");

	//Seletor grupo de class - .nome da classe
	//$(".p2").css("color","#cc001f");

	//Seletor elemento tag html
	//$("span").css("color","#0000ff")

	//Seletor grupo
	//$(".p2, span").css("color","#0000ff");

	//Seletores compostos (hierarquia)
	//$("p span").css("color","#0000ff");

	//Descendente filho direto
	//$("p > span").css("color","#0000ff")

	//Descendente irmão, aplicar apenas ao elemento seguinte.(+)
	//Leitura .p2 tens um irmão span ?
	//$(".p2 + span").css("border","1px solid #ff00ff")

	// elem id=nome tens um irmão p?
	//$("#nome + p").css("border","1px solid #ff00ff");

	//Aplicar a todos(~)
	//$("#nome ~ p").css("border","1px solid #ff00ff")

	//Filtrar apenas a ocorrencia de um determinado comportamento: apenas a 1ª
	//1 elem selecionado (first)
	//$("p span").css("background","#cd00cd")
	//$("p span:first").css("background","#cd00cd")
	
	//last -> Filtrar a apenas a ocorrencia de um determinado comportamento: apenas a ultima
	//$("p span:last").css("background","#cd00cd");

	//Filtar apenas de negação, aplicar a regra pela negação do elemento(not)
	//$("p span:first").css("background","#cd00cd");

	//$("p span:not(span:first)").css("background","#cd00cd")

	//Filtrar ocorrencia de elemento pares(inicia em 0)
	//$("p span:even").css("background","cd00cd");

	//Filtrar ocorrencia de elementos impares inicia em 0)
	//$("p span:odd").css("background","cd00cd");

	//Filtrar ocorrencia um indice especifico(inicia em 0)-eq(i)
	//$("p span:eq(2)").css("background","#cd00cd")

	//Filtrar ocorrencia um indice maiores que(inicia em 0)-gt(i)
	//$("p span:gt(0)").css("background","cd00cd");

	//Filtrar ocorrencia um indice menor que(inicia em 0)-lt
	//$("p span:lt(2)").css("background","cd00cd");

	//Seletores de conteudo - pesquisar elementos pelo ser conteudo - pesquisar elementos pelo ser conteudo(contains)
	//$("p:contains(p1)").css("background","cd00cd");

	// Alterar o core para sensitive
	/*
	jQuery.expr[':'].contains = function(a,i,m) {
		return jQuery(a).text().toUpperCase().idexOf(m[3].toUpperCase()) >= 0;
	};
	$("p:contains(P1)").css("background","#cd00cd");*/
	//empty -> Filtra elementos que nao contenham texto(vazias), muito usado em tabelas.
	//$("p:empty").css("background","#cd00cd")
	
	//Todos os que nao estas vazios
	//$("p:not(p:empty)").css("background","#cd00cd");

	//Filtrar todos os elementos que contenham outros elementos
	//$("p:has(span)").css("background","#cd00cd");

	//Filtar pelos atributos
	//$("a[id]").css("background","#cd00cd");

	//id com um determinado valor
	//$("a[id=escola]").css("background","#cd00cd");
	//contem
	//$("a[id*=m]").css("background","#cd00cd");

	//Aplicar ao elemento que o valor do atributo termine
	//$("a[href$=pt]").css("background","#cd00cd");

	//Aplicar ao elemento que o valor atributo iniciar
	//$("a[href^=http]").css("background","#cd00cd");
	//Diferente
	//$("a[id!=email]").css("background","#cd00cd");








});