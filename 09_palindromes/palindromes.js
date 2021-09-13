const palindromes = function (str) {
    str = str.toUpperCase();
    let strWithNoSpec = str.replace(/[^0-9a-z]/gi, ''); //regex to remove non alphanumeric characters
    let arrStr = strWithNoSpec.split(''); //takes the original argument.
  	let origStr = arrStr.join(''); 
    let reverse = strWithNoSpec.split('').reverse(); //takes the argument and reverses it.
  	let revStr = reverse.join('');

    return origStr === revStr;
};

module.exports = palindromes;
