/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function () {
    "use strict";

    let n = document.getElementById("Num").value
    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    let answer = document.getElementById("Answer");

    var i, sequence = [];
    for (let i = 2; i < n+1; i++) {
        if(isPrime(i) === true && n % i == 0) {
            sequence.push(i)
        }
    }
    //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime
    answer.innerHTML = sequence
    console.log(sequence)
    return sequence;
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]