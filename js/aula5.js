/*
No entanto possui o seu próprio tipo de herança baseado em protótipos.
Função construtora e atributos(prop.) - Classe e atributos, o nome da função é iniciado em Maius.
*/
/*
function Carro (velmax) {
    
    // Nota: A palavra reservada 'this':
    // responsável por iniciar o objeto.
    
    this.VelocidadeMax = velmax;
    this.ligado = false;
}
*/
/*
Nota: A palavra reservada 'new':
responsável por instanciar o objeto.
*/
/*
var carro = new Carro(230);
document.write(carro.VelocidadeMax+"<br />");
carro.cor = "azul";
document.write(carro.cor+"<br />");

var carroBMW = new Carro(125);
carroBMW.cor = "laranja";
document.write(carroBMW.VelocidadeMax+"<br />");
document.write(carroBMW.cor+"<br />");

//--------------------
//Pelo prototype
function liga(){
    this.ligado = true;
}
Carro.prototype.ligar = liga;
document.write("<br /> Carro Ligado ? "+carro.ligado+"<br />");
carro.ligar();
document.write("<br /> Carro Ligado ? "+carro.ligado+"<br />");

//Pelo método objeto
var carro2 = new Carro(1200);
carro2.ligar = liga;
document.write(carro2.ligado+"<br />");
carro2.ligar();
document.write(carro2.ligado+"<br />");

//********* Na estrutura da classe
function ligaEstruturaClasse(){
    this.ligado = true;
}
function Mota(nR){
    this.qtRodas = nR;
    this.ligado = false;
    this.ligarMota = ligaEstruturaClasse
}
var mota = new Mota(4);
document.write(mota.ligado+"<br />");
document.write(mota.qtRodas+"<br />");
mota.ligarMota();
document.write(mota.ligado+"<br />");

//Composição dos objetos
function Familia(n,v){
    this.nome = n;
    this.vencimento = v;
}
function Filho (n,i){
    this.nome = n;
    this.idade = i;
}
var fam = new Familia("Santos", 1000);
var filho1 = new Filho ("Manel", 55);
var filho2 = new Filho ("Manela", 27);
fam.f1 = filho1;
fam.f2 = filho2;
document.write("<br />"+fam.nome);
document.write("<br />"+fam.vencimento);
document.write("<br />"+fam.f1.nome);
document.write("<br />"+fam.f2.nome);

//************************************************************************************************************************************************************
//Encapsulamento

function Aquecedor(temp){
    // Var atribui em função do contexto, não pode ser usada fora dele
    // Var é usado para encapsular de forma privada
    var temperaturaMaximaPermitida = 40;
    var temperaturaMedia = 25;
    if(temp > 0 && temp <= temperaturaMaximaPermitida)
        this.temperatura = temp;
    else
        this.temperatura = temperaturaMedia;
    this.ligado = false;
    this.ligar = function(){
        this.ligado = true;
    }
}
var a = new Aquecedor(67);
document.write("<br />"+a.temperaturaMaximaPermitida);
document.write("<br />"+a.temperatura);

//*******************************
//Herança

function Pessoa(){
    this.nome = "Sem nome";
    this.temFilhos = false;
    this.criarFilhos = function(){
        this.temFilhos = true;
    }
    this.retirarFilhos = function(){
        this.temFilhos = false;
    }
}
function Aluno(nota){
    var notaMaxExame = 20;
    var notaMinExame = 7;
    var vaiExame = false;
    if(nota > notaMinExame && nota <= notaMaxExame){
        this.notaFinal = nota;
        this.teraExame = vaiExame;
    }else{
        this.notaFinal = nota;
        this.teraExame = true;
    }
}

Aluno.prototype = new Pessoa();
var aluno = Aluno(9);
document.write("<br />"+aluno.notaMinExame);
document.write("<br />"+aluno.vaiExame);
*/

// Exemplo 2
document.write("<br/>Exemplo 2<br/>");
/*var Pessoa = function(n,c){
    this.nome = n;
    if(c)
        this.contacto = c;
    this._toString = function(){
        document.write("Nome "+this.nome+" e o contato é "+this.contacto);
    }
}
*/

/*
var Pessoa1 = new Pessoa("Tiago",12312313);
//document.write(Pessoa1.nome);
Pessoa1._toString();
*/

var Pessoa = function(n,c){
    this.nome = n;
    if(c)
        this.contacto = c;
};
Pessoa.prototype = {
    constructor: Pessoa, _toString:function(){
        document.write("Nome "+this.nome+" e o contato é "+this.contacto);
    },
    imprimeNome: function(){
        document.write("Nome "+this.nome);
    }
};
var p1 = new Pessoa("Sergio Araujo","9124234324");
p1._toString();
p1.imprimeNome();

//Retorna o objeto literal, não é necessário operador new
var Pessoa2 = function(nm, cont){
    return{
        nome: nm,
        contacto: cont,
        imprimeNome: function(){
            document.write("<br/>Nome "+this.nome);
        }
    };
};

var pessoa2 = Pessoa2("Novo Sergio",1212);
pessoa2.imprimeNome();