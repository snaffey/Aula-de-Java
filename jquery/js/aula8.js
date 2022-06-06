$(document).ready(function () {
    /*
    $("#curso tr:even").css("background","#00ff00")
    $("#curso tr:odd").css("background","#00ff00")
    */
    //aplicar no filho n
    //$("#curso tr:nth-child(2)").css("background","#0000ff");
    //$("#curso tr:nth-child(2n+1)").css("background","#0000ff");
    /*
    $("curso tbody tr").hover(sobre,fora)
    function sobre(){
        $(this).css("color","#dc00fd")
    }

    function fora(){
        $(this).css("color","#000000")
    }
    */

    /*
    $("curso tbody tr").hover(function(){
        $(this).addClass("sobre");
    },function(){
        $(this).removeClass("sobre");
    })
    */

    //each - Metodo que percorre e itera um determindao elemento.
    $("#curso thead tr th").each(function (index) {
        $(this).click(function () {
            console.log("indice: " + index);
            $("td").removeClass("sobre1");
            $(this).parents("thead").siblings("tbody").children("tr").each(function () {
                $(this).children("td:eq("+index+")").addClass("sobre1")
            });
        })
    })
});