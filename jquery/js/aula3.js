$(document).ready(function(){

    //Seletores de controlo de formularios
    //Sintaxe :input - recupera qualquer tipo de elemento que seja input
    //$(":input").css("background","#cd00cd");
    //$(":input").css("display","block");
    //$(":text").css("background","#cd00cd")

    /*
    chackboxm radio ->
    Este tipo de input tem metodos atrelados, que permitem percorrer os elementos next(), prev(), parent()
    */

    $(":button").click(function(){
        //$(":text").css("background","#cd00cd");
        //$(":password").css("background","#cd00cd");
        $(":radio").parent().css("background","#cd00cd")
    }).css("border","2px solid #ff00cd",);
});