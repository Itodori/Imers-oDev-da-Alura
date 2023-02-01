function convertCelsius() {
    var valorEmCelsius = prompt("Insira a temperatura em Celsius.");
    var valorEmFarenheit = valorEmCelsius * 1.8 + 32;
    var valorEmKelvin = 273.15 + parseFloat(valorEmCelsius);
    alert(
      valorEmCelsius +
        "°C são equivalentes à " +
        valorEmFarenheit +
        "°F e à " +
        valorEmKelvin +
        "K."
    );
  }
  function convertFarenheit() {
    var valorDeFarenheit = prompt("Insira a temperatura em Farenheit.");
    var valorDeCelsius = (parseFloat(valorDeFarenheit) - 32) * (5 / 9);
    var valorDeKelvin = valorDeCelsius + 273.15;
  
    valorDeCelsius = valorDeCelsius.toFixed(2);
    valorDeKelvin = valorDeKelvin.toFixed(2);
  
    alert(
      valorDeFarenheit +
        "°F são equivalentes à " +
        valorDeCelsius +
        "°C e à " +
        valorDeKelvin +
        "K."
    );
  }
  function convertKelvin() {
    var valueOfKelvin = parseFloat(prompt("Insira a temperatura em Kelvin."));
    var valueOfCelsius = valueOfKelvin - 273.15;
    var valueOfFarenheit = valueOfCelsius * (9 / 5) + 32;
  
    valueOfFarenheit = valueOfFarenheit.toFixed(2);
    valueOfCelsius = valueOfCelsius.toFixed(2);
  
    alert(
      valueOfKelvin +
        " K são equivalentes à " +
        valueOfCelsius +
        "°C e à " +
        valueOfFarenheit +
        "°F."
    );
  }
  