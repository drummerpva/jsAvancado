function acao(){
    document.write("Executou...<br/>");
}
//executa intermitente
//setInterval(acao, 2000);
//com variavel consigo parar usando o clearInterval(var) ou clearTimeout(var)
var timer = setInterval(acao, 2000);
//executa uma vez
//setTimeout(acao, 2000);