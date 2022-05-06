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
    alert(_umH3);
    alert(_umH3.parentNode);
    alert(_umH3.childNodes);
}//windows.onload