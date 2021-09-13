const reverseString = function(str) {
    let strArr = str.split("");
    let reversedArr = strArr.reverse();
    let reversedStr = '';
    /* for (let i = 0; i < reversedArr.length; i++) {
         reversedArr.push(i);
     }*/

    reversedStr = reversedArr.join('');
    return reversedStr;

};

module.exports = reverseString;
