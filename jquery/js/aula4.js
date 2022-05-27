$(document).ready(function(){

    /*
    Manipulação de atributos com recurso Jquery
    Devolver o valor (recuperar) de um determinado atributo: attr("atributo");
    */

    $("#disJQ").click(function(){
        /*var idP = $("p").attr("id");
        alert(idP);*/
        $("p").attr("id","pSergio").attr("class","borda")
    }).css("border","2px solid #ff00cd")
});