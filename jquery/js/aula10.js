/*$(document).ready(function () {
    $("#data").datepicker();
});*/

//Total carregamento da pagina por seletor de omissão(anonimo)
$(function() {
    $("#data").datepicker();
    $("#accordion").accordion({
        collapsible:true
    });
    var fonte= ["Auto","Aveiro","Boca","Braga","Funchal","Faro","Coimbra","Porto","Dentro","Desta"];
    $("#auto").autocomplete({
        source: fonte
    })
    $("#abre").click(function(){
        modal()
    })
    $("#modal").dialog({
        width: 320,
        height: 220,
        modal: true,
        buttons: {
            "Confirme": function(){
                alert("confirmado")
                $(this).dialog("close");
            },
            Cancel: function(){
                alert("Cancel foi press.")
                $(this).dialog("close");
            }
        }
    });
});