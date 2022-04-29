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
        //alert(c);
        //alert(c.charAt(0));
        while (c.charAt(0) == ' ')
            c= c.substring(1, c.length);
        alert(c);
        return c.substring(searchName.length,c.length);
    }
    return null;
}

function eliminarCookie(name){
    gravarCookie(name, '', -1);
    alert(name + "DELETE");
}