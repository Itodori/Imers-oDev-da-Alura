source.addEventListener('change', function () {
    console.log(source.value);
  });
  nomeFilme.addEventListener('change', function () {
    console.log(nomeFilme.value);
  });
  function adicionar() {
  
    var nomesFilmes = []
    var cartazes = []
    var nomeDoFilme = document.getElementById("nomeFilme").value;
    var linkImagem = document.getElementById("source").value;
    //verificador de png/jpeg
    var ext = linkImagem.substring(linkImagem.lastIndexOf('.') + 1);
    if(ext =="jpeg" || ext=="png" || ext=="jpg"){
        //Adição de valor
          cartazes.push(linkImagem);
          nomesFilmes.push(nomeDoFilme);
          console.log(nomesFilmes);
          console.log(cartazes);
       function adicionarCartaz() {
         for (var i = 0; i < cartazes.lenght; i++) {
          //Adição dos cartazes ao html        
       document.write("<div class= 'texto-imagem'><img src=" + cartazes[i] + ">" + nomesFilmes[i] + "</div>");
        }
       }
    } else{
          alert("Link inválido, por favor adicione apenas imagens jpeg, jpg ou png!");
    }  
  }  