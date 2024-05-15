let nome = prompt("Qual o seu nome ?");
let elemento = document.querySelector("#nome");
elemento.textContent = nome;

while (nome == "") {
    nome = prompt("Qual o seu nome");
}

if(nome == null){
    elemento.textContent = 'Seja muito bem - vindo.';
}else{
    elemento.textContent = nome;
}
