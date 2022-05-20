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
	$("p > span").css("color","#0000ff")
});