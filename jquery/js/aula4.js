$(document).ready(function(){

    /*
    Manipulação de atributos com recurso Jquery
    Devolver o valor (recuperar) de um determinado atributo: attr("atributo");
    */

    $("#disJQ").click(function(){
        /*var idP = $("p").attr("id");
        alert(idP);*/
        //$("p").attr("id","pSergio").attr("class","borda");
        //$("img").attr("src","../imagem/2.png").attr("title","foto2");

        //Atraves do array associativo
        /*$("img").attr({
            src:"../imagem/2.png",
            title:"foto2"
        })*/
        //mudar();
    }).css("border","2px solid #ff00cd")

    /*
    Manipulação do conteudo do elemento 
    Método .html() - retorna o conteudo html do elemento
    */
    alert($("p").html());

    /*function mudar(){
        $("img").attr({
            src:"../imagem/2.png",
            title:"foto2"
        })*/
    $("img").removeAttr("title").removeAttr("alt")

    var cont = 1;
    function mudar(){
        var str = "../imagens/";
            str += cont + ".png"
        $("img").attr({
            src:str,
            title:"foto2"
        });
        cont++
        if(cont == 4)
            cont=1;
    }
});
