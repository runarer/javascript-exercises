const fibonacci = function(inputNumber) {
    const sequenceNr = parseInt(inputNumber);
        
    if (sequenceNr < 0) return "OOPS";
    
    let sequence = [0,1,1]
    while (sequence.length <= sequenceNr) {        
        sequence.push(sequence.at(-1) + sequence.at(-2) )
    }
    
    console.log(sequence)
    return sequence[inputNumber];
};

// Do not edit below this line
module.exports = fibonacci;
