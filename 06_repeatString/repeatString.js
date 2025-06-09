const repeatString = function(str,times) {
    let repeatedString = (times < 0) ? "ERROR" : "";
    for (let repeated = 0; repeated < times; repeated++) {
        repeatedString += str
    }
    return repeatedString;    
};

// Do not edit below this line
module.exports = repeatString;
