function calcular(operacion) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    resultado = "Error: ingresa valores válidos.";
  } else {
    switch (operacion) {
      case 'suma':
        resultado = num1 + num2;
        break;
      case 'resta':
        resultado = num1 - num2;
        break;
      case 'multiplicacion':
        resultado = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          resultado = "Error: no se puede dividir por 0.";
        } else {
          resultado = num1 / num2;
        }
        break;
    }
  }

  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

