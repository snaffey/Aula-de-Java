/*
$(document).ready(function(){
    $("#disJQ").click(function(){
        $(":text").keyup(function(){
            $("#cab1").text($(this).val());
        });
    }).css("border","2px solid #ff00cd");
});
*/
/*
Eventos do teclado com uso jQuery.
Elemento.keyup() - ocorre qd uma tecla é clicada
bind() - permite registrar apenas os elementos que encontram no DOM(arvore html) inicialmente,
         ou seja, se criar elementos usando jQuery, ajax ou JS puro nao ira funcionar
*/
/*
$(document).ready(function(){
    $(":text").bind("keyup",atributo).bind("focus",mudarCor).bind("blur",mudarCor2);
    function atributo(){
        $("#cab1").text($(this).val())
    }
    function mudarCor(){
        $("#cab1").css("background","#00ff00")
    }
    function mudarCor2(){
        $("#cab1").css("background","#ffffff")
    }
});
*/

$(document).ready(function(){
    $("#disJQ").bind("click",funclick).css("border","2px solid #ff00cd");

    function funclick() {
        $(":text").keyup(function(){
            $("#cab1").text($(this).val());
        });
    }
});