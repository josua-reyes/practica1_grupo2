function fibonacci(numero) {
  if (numero <= 1) {
    return numero;
  } else {
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  }
}
