const reverseString = function(str) {
    const arrStr = [];
    for(let i=0;i<str.length;i++) {
        arrStr[i] = str[str.length-1-i];
    }
    let revStr = arrStr.join("");

    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
