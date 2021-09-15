const fibonacci = function(fib) {
    let sum = 0; 
    let x2 = 0;
    let x1 = 1;
    num = parseInt(fib);
    if(num < 0) {
        return "OOPS";
    } else if(num === 0) {
        return 0;
    } else if (num === 1 || num === 2) {
        return 1;
    } else {
        for(let i = 1; i < num; i++) {
            sum = x1 + x2;
            x2 = x1;
          	x1 = sum;
        }

        return sum;
    }
};

module.exports = fibonacci;
