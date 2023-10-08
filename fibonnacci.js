function fibonacci(numero) {
  if (numero <= 1) {
    return numero;
  } else {
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  }
}

function numeroPrimo(n) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(b); i++) {
    if (b % i === 0) {
      isPrime = false;
      break;
    }
  }
  
  return isPrime;
}