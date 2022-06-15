$(document).ready(function () {
    $("#seletudo").click(function(){
        $(":checkbox[name=casa]").prop("checked","checked");
    });
    $("#tirasele").click(function(){
        $(":checkbox[name=casa]").removeProp("checked");
    });
    /*$("#alterna").change(function(){
        if($("#alterna").prop("checked") == "checked")
            $(":checkbox[name=casa]").removeProp("checked",true);
        else
            $(":checkbox[name=casa]").prop("checked","checked");
    });*/
    $("#alterna").change(function(){
        $(":checkbox[name=casa]").removeProp("checked");
        $(":checkbox[name=casa]").prop('checked',true)
    });
});