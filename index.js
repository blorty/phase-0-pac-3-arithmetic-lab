function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(n){
    let number = 5;
    n++ ; //=> 5... hmmmm
    n; //=> 6 -- the number was incremented after it was evaluated
    return n;
}

function decrement(n){
    let number = 5;
    n--; //=> 4
    n; //=> 4
    return n;
}
function makeInt(n){
    let number = parseInt(n, 10);
        return number;

}

function preserveDecimal(n) {
    let number = parseFloat(n, "2.222");
    return number; 
}


