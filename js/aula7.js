window.onload = function(){
    var nome = "Sergio";
    gravarCookie("nomeCookie", nome, 15);
    lerCookie("nomeCookie");
    var res = lerCookie("nomeCookie");
    alert(res);
    eliminarCookie("nomeCookie")
}