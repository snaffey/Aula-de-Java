
$(document).ready(function(){
    $("span").css("border","2px solid #ff00cd");

    $("#esconde").click(function(){
        //slow, normal, fast, mms
        $("img").hide(3000);
    })

    $("#mostra").click(function(){
        //slow, normal, fast, mms
        $("img").show(3000);
    })

    $("#alterna").click(function(){
        //slow, normal, fast, mms
        $("img").toggle(3000);
    })

    $("#opacidadeS").click(function(){
        //slow, normal, fast, mms
        $("img").fadeIut(3000);
    })

    $("#opacidadeE").click(function(){
        //slow, normal, fast, mms
        $("img").fadeOut(3000);
    })

    $("#opacidade50").click(function(){
        //slow, normal, fast, mms
        $("img").fadeTo(3000);
    })

    $("#opacidadeA").click(function(){
        //slow, normal, fast, mms
        $("img").fadeIn(3000);
    })

    $("#deslocaC").click(function(){
        //slow, normal, fast, mms
        $("img").slideUp(3000);
    })

    $("#deslocaC").click(function(){
        //slow, normal, fast, mms
        $("img").slideDown(3000);
    })
    
    $("#deslocaC").click(function(){
        //slow, normal, fast, mms
        $("img").slideToggle(3000);
    })

});

/*
hide() - metodo responsavel por esconder um elemento
show() - metodo responsavel por mostrar um elemento
toggle() - metodo responsavel por alternar um elemento
*/

/*
Opacidade:
Fade()
fadeIn()
fadeOut()
fadeTo()
fadeToggle

Sliding(deslocamento do elemento)
slideUp() - desloca para cima
slideDown() - desloca para baixo
slideToggle() - fecha ou abro em relação ao centro
*/

