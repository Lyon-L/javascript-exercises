const sumAll = function(num1, num2) {
    let dif = 0;
    let suma = 0;

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    } else {
        if(num1 > num2) {
            dif = (num1 - num2) + 1;
        } else {
            dif = (num2 - num1) + 1;
        }
        
        
        for(let i = 0; i <= dif; i++) {
            suma += i;
        }
    
        return suma;
    }
        
    };

module.exports = sumAll;
