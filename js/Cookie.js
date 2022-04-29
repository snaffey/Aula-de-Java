function gravarCookie(nome, value, days){
    var expires = "";
    if(days){
        var date = new Date(); // data atual
        var dateMls = date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires="+ date.toUTCString();
    }
    if(value != null && value != "null"){
        document.cookie = nome + "=" + value + expires + "; path=/"
    }
}
function lerCookie(name){
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++){
        var c = cookies[i];//cookie atual
        alert(c);
    }
}