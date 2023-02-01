function converterBitcoin() {
    var cotacaoDoBitcoin = 116552.52; //30/01/2023 16:18
    var valorEmBitcoin = prompt("Digite o valor a ser convertido.");
  
    var valorEmReal = cotacaoDoBitcoin * valorEmBitcoin;
  
    valorEmReal = valorEmReal.toFixed(2);
  
    alert(
      "O valor de BTC " +
        valorEmBitcoin +
        " em Real na cotação de BTC " +
        cotacaoDoBitcoin +
        " é igual a R$ " +
        valorEmReal
    );
  }
  