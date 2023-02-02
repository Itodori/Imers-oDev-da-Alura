var numeroSecreto = Math.floor(Math.random()*1001);
if (numeroSecreto == 0) {
  numeroSecreto = (numeroSecreto+1)
} else {
}

function jogar() {
  var contador = 0;
  while (chute != numeroSecreto) {
    var tentativasRestantes = (11-contador);
    if (contador < 12) {
      contador++;
    } else if (contador == 12) {
      alert("Que pena! Suas tentativas acabaram, clique em jogar para tentar novamente.");
      break;
    }
    var chute = prompt("Digite um número entre 0 e 1000");
    if (chute == numeroSecreto) {
      alert("Parabéns, você acertou! O total de tentativas foram: " + contador);
    } else if (chute > numeroSecreto) {
      alert("Errou... o número secreto é menor, você já tentou " +contador +" vezes, restam " + tentativasRestantes +" tentativas" );
    } else if (chute < numeroSecreto) {
      alert("Errou... o número secreto é maior, você já tentou " +contador +" vezes, restam " + tentativasRestantes +" tentativas");
    }
  }
}
