window.onload = function(){
    /*
    A navegação pela nossa pagina: 
    Cada tag html representa um no da arvore.
    "Nos" principais:
    Documento - representa o documento
    Elemento - representa as tags(ex: body,div)
    Atributo - atributos dos elementos
    Texto: representa o texto contido nas nossas tags(ex: <h3> Texto do elemento</h3>);
    Pai = Parent;
    Filho = child;
    Irmao = sibling;
    */

    var h3 = document.getElementsByTagName("h3");
    //alert(h3);
    //Node.parentNode: Dá acesso ao no pai atual
    //alert(h3.parentNode);
    //Node.childNodes: Para aceder a todos os nos filhos
    //alert(h3.childNodes);
    var _umH3 = h3[0];
    /*
    alert(_umH3);
    alert(_umH3.parentNode);
    alert(_umH3.childNodes);
    */
    // item -> aceder ao elemento n filho
    var filhosh3 = _umH3.childNodes.item(0);
    alert(filhosh3);

    //Atributos dos nos
    // nome do no -> nodeName
    /*
    1- Elemento
    2- Atributo
    3- Texto
    */
    /*
    alert(filhosh3.nodeName);
    alert(filhosh3.nodeType);
    */
    var div = document.getElementsByTagName("div").item(0);
    //alert(div.childNodes.item(0));//Texto depois do div
    //alert(div.childNodes.item(1));//Lista ul
    var ul = div.childNodes.item(1);
    /*alert(ul);
    alert(ul.nodeName);
    alert(ul.nodeType);
    */
    /*
    Node.FirstChild-este é o mm que aceder ao primeiro item da 'ChildNodes'
    Node.LastChild-este é o mm que aceder ao último item da 'ChildNodes'
    */
    /*alert(ul.childNodes.length);
    alert(ul.childNodes.item(0));
    alert(ul.firstChild);
    alert(ul.lastChild);*/
    /*for(var i=0; i<ul.childNodes.length;i++)
        alert(ul.childNodes.item(i))*/
    /*alert(ul.firstChild.nodeValue);
    alert(ul.childNodes.item(1).nodeValue);//nao funciona pk ta a apontar para o <li>
    alert(ul.childNodes.item(0).nodeValue);*/
    //var ulli1= ul.childNodes.item(1);
    //alert(ulli1.firstChild.nodeValue);
    //var li= ul.childNodes.item(5);
    //alert(li.firstChild.nodeValue);
    //var liul= li.childNodes.item(1).childNodes[1];
    //alert(liul.firstChild.nodeValue);
    /* 
    ***************************manipulação e criação de nós***********************************
    */
    var div= document.getElementsByTagName("div").item(0);
    var h3New= document.createElement("h3")
    h3New.appendChild(document.createTextNode("H3-via DOM CORE"));
    div.appendChild(h3New)

    var liNew= document.createElement("li")
    liNew.appendChild(document.createTextNode("li-via DOM CORE"));
    //div.appendChild(liNew);
    div.firstElementChild.appendChild(liNew);
    
    //NOs do tipo atributo
    var atrib = document.createAttribute("style");
    atrib.value = "color:#ff10ff";
    h3New.setAttributeNode(atrib);
    //OU
    //h3New.setAttribute("style","color:#00ff00")

    var selecao = document.createElement("select");
    selecao.setAttribute("id","estado_civil");

    var opt = document.createElement("option");
    opt.setAttribute("value","Solteiro");
    opt.appendChild(document.createTextNode("Solteiro"));

    var opt1 = document.createElement("option");
    opt1.setAttribute("value","Casado");
    opt1.appendChild(document.createTextNode("Casado"));

    selecao.appendChild(opt);
    selecao.appendChild(opt1);
    div.appendChild(selecao);
}//windows.onload