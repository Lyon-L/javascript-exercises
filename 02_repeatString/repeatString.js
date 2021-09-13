const repeatString = function(text, num) {
    let finalString = '';
    if (num < 0){
        finalString = 'ERROR';
        return finalString;
    }

    for (let index = 0; index < num; index++) {
        
        finalString += text;
    }
    
    return finalString;
};

module.exports = repeatString;