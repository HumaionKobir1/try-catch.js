function multiplay(a, b){
    return a * b;
}

function square(n){
    return multiplay(n, n);
    // console.log(h);
}

function printSquare(n){
    var squared = square(n);
    console.log(squared);
}
printSquare(5)