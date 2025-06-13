const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/\W/g,'');

    // Can do a split, reverse, join and compare strings.
    
    for (let start = 0, end = newStr.length - 1; start < end; start++, end--) {
        if(newStr[start] !== newStr[end]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
