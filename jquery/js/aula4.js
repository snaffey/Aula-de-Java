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

        //$("h2").html($(":input").val());
        /*
        Metodo replaceWith() - troca o elemento por outro elemento
        */
        //$("h2").replaceWith("<div>Sergio</div>");

        //Js Puro
        /*var p = document.createElement("p");
            p.appendChild(document.createTextNode("Paragrafo inserido !!"));
            document.body.appendChild(p);
        $("h2").replaceWith(p);*/

        //Criação de elem 
        //$(nome do elemento com indicaçao de tipo)
        /*
        var imgNew = $("<img >",{src: "../imagem/1.png", style: "width:120px" })
        $("body").append(imgNew)*/

        /*
        var newBr = $("<br />");
        var imgNew = $("<img />", {
            src:"../imagem/2.png",
            style:"width:120px",
            title:"Titula a imagem",
            click: function(){
                alert("Elem. Criado via JQ clicado !!!");
            }
        });
        $("body").append(newBr).append(imgNew);
        */
        var listaNaoOrdenada = $("<ul/>").append($("<li/>")).append($("Dados inseridos pelo JQ"));
        //listaNaoOrdenada.append($("<li/>"))

        /*
        Tipos de inserção:
        append() - Insere na ultima pos do elemento invocador
        prepend() - Insere no inicio pos do elemento invocador
        after() - Insere apos o elemento
        before() - Insere antes do elemento
        wrap() - Envolve o elemento
        clone() - Duplica o elemento
        ---------------
        Tipos de eliminação na arvore
        remove - remove um determinado elemento
        empty - limpa um determinado elemento
        unwrap - remove o elemento que o envolve
        */

        var listaNaoOrdenada = $("<ul/>");
        var dado1LNO = $("<li/>").append("Dado inserido pelo Jquery 1");

        var dado2LNO = $("<li/>").append("Dado inserido pelo Jquery 2");
        var span = $("<span>");
        listaNaoOrdenada.append(dado1LNO).append(dado2LNO).append(span);
        $("body").append(listaNaoOrdenada).append(span)
        listaNaoOrdenada.append("<li>Dentro Ul, mas no fim<li/>");
        listaNaoOrdenada.prepend("<li>Dentro Ul, mas no inicio<li/>");
        listaNaoOrdenada.before("<p>Antes da UL<p/>")
        listaNaoOrdenada.after("<p>Depois da UL<p/>")

        var p = $("<p/>");
        span.wrap(p);

        $("ul").append($("li").clone());
    }).css("border","2px solid #ff00cd")

    /*
    Manipulação do conteudo do elemento 
    Método .html() - retorna o conteudo html do elemento
    */
    //alert($("p").html());

    /*
    Metodo .text() - semelhante ao .html(), mas nestecaso restorna apenas texto puro
    */
    //$("h2").text("Texto...");

    /*
    Metodo val() - recuperar o valor dos componentes de um formulario
    */
    alert($(":input").val());
    $("h2").html($(":input").val());

    /*function mudar(){
        $("img").attr({
            src:"../imagem/2.png",
            title:"foto2"
        })*/
    //$("img").removeAttr("title").removeAttr("alt")
    
    var cont = 1;
    function mudar(){
        var str = "../imagem/";
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
