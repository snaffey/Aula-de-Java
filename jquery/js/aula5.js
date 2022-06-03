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

        $("img").removeClass("img");
        $("img").removeAttr("style");
        $("img").addClass("imgClass");
    }).css("border","2px solid #ff00cd");
});