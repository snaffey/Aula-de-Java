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
    /*for(var i=0; i <imgs.length;i++)
        alert(imgs[i].alt);
        alert(imgs[i].src)*/
    /*var imgs = document.links;
    alert(document.links.length);
    alert(document.links[0].text);
    alert(document.links[0].href);*/
   /* var forms= document.forms
    for(var i =0;i<forms.length;i++){
        alert(document.forms[i].method);
        alert(document.forms[i].action);
    }*/
    /*var formElem= document.forms[0];
    var formTam= formElem.elements.length;
    alert(formElem.elements.length);
    for(var i =0; i<formTam.length; i++){
        //tipo de elemento
        alert(formElem.elements[i]);
        alert(formElem.elements[i].value);
    }*/
    /*var t= document.forms[0].elements.irmaos;
    alert(t[0].value);*/
    var t= document.forms[0].elements.irmaos;
    for(var j=0;j<t;j++){
        elemItem=t[j];
        for(var i=0;i<elemItem.attributes.length;i++){
            if(elemItem.attributes[i].name=="selected")
                elemItem.removeAttribute("selected");    
        }
    }
    //dados da tabela
    var tabela = document.getElementById("tabela");
    //inserir linha(insertRow) cria um tr
    // 0 na 1; -1 na ultima pos
    var linha = tabela.insertRow(-1);
    //inserir o dado (insertCell)
    var cel1 = linha.insertCell(0);
    var cel2 = linha.insertCell(1);
    //Add conteudo á celula criada
    cel1.innerHTML= "Criado via JS";
    // Add atraves do metodo XML do DOM CORE
    // appendChild -> criar um filho dentro de um parent
    // Cria um no de tipo texto
    cel2.appendChild(document.createTextNode("Criado via JS-DOM CORE"));
    function novaLinha(contl1,contl2,nivel){
        var tabela = document.getElementById("tabela");
        var linha = tabela.insertRow(nivel);
        var cel1 = linha.insertCell(0);
        var cel2 = linha.insertCell(1);
        cel1.innerHTML = contl1;
        cel2.appendChild(document.createTextNode(contl2));
    }
    novaLinha("Sergio","55", -1);
    novaLinha("Ana","25", 0);
    novaLinha("Rui","15", 2);

    var btn_Insert = document.getElementById("btn_new");
    btn_Insert.onclick = function(){
        novaLinha("JS1","JS2", 0);
    }

    var btn_Del = document.getElementById("btn_del");
    btn_Del.onclick = function(){
        tabela.deleteRow(-1);
    }
}