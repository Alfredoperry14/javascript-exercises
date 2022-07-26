const removeFromArray = function(array, ...args) {
    let newArray = [];
    let counter = 0, flag = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < args.length;j++){
            flag = 0;
            if(array[i] === args[j]){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            newArray[counter] = array[i];
            counter++;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
