const mult = (a,b) => {
    return a * b;
}

const div = (a,b) => {
    if(b == 0){
        return 'No se puede dividir entre cero'
    } else if(b != 0){
        return a/b;
    }
}