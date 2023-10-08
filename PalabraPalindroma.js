function esPalindromo(palabra) {
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