/*
$(function () {
    //request do txt
    $("#ajax").click(function(){
        $.ajax({
            type: "GET",
            url: "./file.xml",
            dataType:"xml",
            success: function(xml){
                var formando = xml.getElementsByTagName("formando");
                /*for(var i=0; i < formando.length; i++){
                    document.write(formando[i].lastChild.nodeValue);
                }*/
                /*
                $(xml).find('formando').each(function(){
                    var name = $(this).text();
                    document.write(name+"<br />");
                });
                document.write("<br />");
            }
        });
        return false;
    });
});
*/

$(function () {
    $("#ajax").click(function(){
        $.ajax({
            type: "GET",
            url: "./code.json",
            dataType:"json",
            success: function(json){
                //console.log(json)
                var cd = json["cd"];
                var output = "<table><thead><tr><th>Title</th><th>Artist</th><th>Year</th></tr></thead><tbody>";
                for(var i in cd){
                    output += "<tr><td>"+cd[i].title+"</td><td>"+cd[i].artist+"</td><td>"+cd[i].year+"</td</tr>";
                }
                output += "</tbody></table>"
                $("body").html(output);
            }
        });
        return false;
    });
});