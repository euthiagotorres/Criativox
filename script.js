const desafios = [
    "Escreva um conto curto baseado na última conversa que teve com um amigo.",
    "Desenhe um objeto cotidiano como se fosse um personagem de desenho animado.",
    "Crie um código que transforme um texto comum em uma versão estilizada e divertida.",
    "Tire uma foto que represente a palavra 'nostalgia' e compartilhe com alguém.",
    "Desenvolva um pequeno jogo interativo usando apenas HTML, CSS e JavaScript."
];
function gerarDesafio(){
    const indiceAleatorio = Math.floor(Math.random() * desafios.length);
    document.getElementById("desafio").innerText = desafios[indiceAleatorio];
}