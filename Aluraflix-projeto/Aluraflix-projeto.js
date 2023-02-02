var cartazes = [];
var nomesFilmes = [];
var nome = document.getElementById("nomeFilme");
var cartaz = document.getElementById("source");
source.addEventListener('change', function (){
  console.log(source.value)
});
nomeFilme.addEventListener('change', function(){
  console.log(source.value)
})
function adicionarCartaz(){
  var ext = cartaz.substring(cartaz.lastIndexOf('.') + 1);
  if (ext =="jpeg" || ext=="png" || ext=="jpg") {
    Array.cartazes.push(cartaz);
    Array.nomesFilmes.push(nome);
    console.log(cartazes);
    console.log(nomesFilmes);
  } else {
    alert("Link inválido, por favor adicione apenas imagens jpeg, jpg ou png!")
  }
}
for (var i = 0; i < cartazes.length; i++) {
  document.writeln("<div class='texto-imagem'><img src=" + cartazes[1] + "><p>" + nomesFilmes[i] + "</p></div>" )
}
export function adicionarCartaz();