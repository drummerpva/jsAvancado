if(typeof localStorage.nome == "undefined"){
    localStorage.nome = prompt("Qual seu nome?");
}
document.getElementById("info").innerHTML = localStorage.nome;
//localStorage fica até ser removido
//sessionStorage removido quando fecha o navegador
