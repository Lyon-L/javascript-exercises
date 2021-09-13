const removeFromArray = function(arr, ...Args) {
    let newArr = Array.from(arr);
    newArr.sort();
    Args.sort();
    for(let i = 0; i < newArr.length; i++) {

        for(let j = 0; j < Args.length; j++){

            if (newArr[i] === Args[j]) {

                newArr.splice(i, 1);
            } 
        } 
    }
    return newArr;
};

module.exports = removeFromArray;
