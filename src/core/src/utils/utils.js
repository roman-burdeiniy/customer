const add = function(a , b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}


const subsAbs = function(a, b) {
    return Math.abs(a - b);
}

module.exports = {add : add, multiply: multiply, subsAbs : subsAbs};