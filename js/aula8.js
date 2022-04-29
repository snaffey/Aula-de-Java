window.onload = function(){
    var introP = document.getElementById("intro");
    //alert(introP);
    var intro2 = document.getElementsByClassName("intro2"); //coleção de nos
    //alert(intro2);
    var h3 = document.getElementsByTagName("h3");
    //alert(h3);
    //Manipulação do valor de um objeto
    introP.innerHTML = "Alterado via API DOM";
    introP.style.color = "#ddff34"
    //DOM CORE
    introP.setAttribute("style","color:#FF0000");

    var img = document.getElementsByTagName("img")[0]; //1ª imagem
    //alert(img);

    //DOM html
    img.style.width="120px";
    //DOM CORE
    img.setAttribute("border","4px solid #ffdd00")

    var imgs = document.images;
    for ( var i=0; i < imgs.length; i++){
        alert(imgs[i].alt);
        alert(imgs[i].src);
    }
}