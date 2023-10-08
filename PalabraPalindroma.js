function esPalindromo(palabra) {
    console.log('Funcionalidad extra Josuá Reyes - Carné 09062027370')
    console.log('Funcionalidad extra Julio Bautista - Carné 1290109647')
    console.log('Funcionalidad extra Rodney Rizo - Carné 13902028058')
    palabra = palabra.toLowerCase().replace(/\s/g, '');

    let i = 0;
    let j = palabra.length - 1;

    while (i < j) {
        if (palabra[i] !== palabra[j]) {
        }
        i++;
        j--;
    }
}