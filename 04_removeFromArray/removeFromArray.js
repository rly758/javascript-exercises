const removeFromArray = function(arr, ...args) {
    let index;

    for(let i=0;i<args.length;i++) {
        if (arr.indexOf(args[i]) > -1) { 
            index = arr.indexOf(args[i]);
            arr.splice(index,1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
