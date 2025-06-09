const removeFromArray = function(arr, ...removeAll) {
    removeAll.forEach( (remove) => {
        while(arr.includes(remove)) {
            const indexOfRemove = arr.findIndex(item => item === remove);
            arr.splice(indexOfRemove,1);
        }
    });
    return arr;
};

/* Denne fra løsningen er bedre*/
// const removeFromArray = function(array, ...args) {
//     return array.filter(val => !args.includes(val))
// };


// Do not edit below this line
module.exports = removeFromArray;
