var anosLuzAlfaC = 4367;
var anosLuzBarnard = 5978;
var anosLuzSirius = 8611;
var anosLuzMetros = 9461e15;

var distanciaAlfaC = anosLuzAlfaC * anosLuzMetros;
var distanciaBarnard = anosLuzBarnard * anosLuzMetros;
var distanciaSirius = anosLuzSirius * anosLuzMetros;

document.getElementById("destino");
destino.addEventListener("change", function () {
  console.log(destino.value);
});

function viagem() {
  var destino = document.getElementById("destino").value;
  if (destino == "alfaC") {
    alert(
      "O seu destino está à " +
        distanciaAlfaC +
        "M de distância, tenha uma boa viagem!"
    );
  } else if (destino == "Sirius") {
    alert(
      "O seu destino está à " +
        distanciaSirius +
        "M de distância, tenha uma boa viagem!"
    );
  } else if (destino == "Barnard") {
    alert(
      "O seu destino está à " +
        distanciaBarnard +
        "M de distância, tenha uma boa viagem!"
    );
  }
}
