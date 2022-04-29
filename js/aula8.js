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
}