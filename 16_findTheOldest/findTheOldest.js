const findTheOldest = function(people) {
    return people
            .map(person => ("yearOfDeath" in person) ? person : {...person , yearOfDeath: new Date().getFullYear()})
            .sort( (p1,p2) => (p2.yearOfDeath - p2.yearOfBirth) - (p1.yearOfDeath - p1.yearOfBirth))[0]
    // Can also sort without map first. Just check if object got yearOfDeath and if not use date instead.
    // Can add a helper function to get age.
    // reduce may be abetter fit, since the target is one object.
};

// Do not edit below this line
module.exports = findTheOldest;
