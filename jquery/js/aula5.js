$(document).ready(function(){
    $("#disJQ").click(function(){
        /*
        Elemento.addClass - adiciona uma class ao elemento
        Elemento.position() - devolve a pos do elemento
        Elemento.offset() - devolve a margem de impressão do elemento
        */
        var h = $("img").css("height");
        //alert(h);
        var w = $("img").css("width");
        //alert(w);
        var hImg = $("img").height();
        //alert(hImg);

        //Devolver a altura da imagem + o espaçamento aplicado
        var h2Img = $("img").innerHeight();
        //alert(h2Img);

        //Devolver a altura da imagem + o espaçamento aplicado + a borda do elemento
        var h3Img = $("img").outerHeight();
        //alert(h3Img);

        //Devolver a altura da imagem + o espaçamento aplicado + a borda do elemento + margem
        var h4Img = $("img").outerHeight(true);
        //alert(h4Img);

        var teste = $("img").hasClass();
        //alert(teste);
        var teste1 = $("img").hasClass("img");
        //alert(teste1);

        //$("img").removeClass("img");
        $("img").removeAttr("style");
        $("img").addClass("imgClass");
        /*
        A diferença entre o offset é relativo ao documento,
        o position é relativo ao ancentral sobre o qual o elemento posicionado.
        */
        /*
        var pt = $("img").position().top;
        var pl = $("img").position().left;
        alert(pt);
        alert(pl);

        var poft = $("img").offset().top;
        var pofl = $("img").offset().left;
        alert(poft);
        alert(pofl);
        */
        //fim do click

        $("#cab1").text("Fui clicado");

    }).dblclick(function(){
        $("#cab1").text("Fui clicado em dblclick");
    }).mouseover(function(){
        $("#cab1").text("Sai de cima animal").css("color","#ff00cd");
    }).mouseout(function(){
        $("#cab1").text("Saiste seu animal").css("color","#ff34ff");
    }).mousemove(function(posicao){
        //clientX, clientY -> posição do rato em px
        $("#cab1").text("PosX ->"+posicao.clientX+" PosY ->"+posicao.clientY).css("color","#000000");
    }).css("border","2px solid #ff00cd");
});