// Solution
// Firstly, we map input array elements to their squares.
// Secondly, we sort the result of the mapping (our updated array) due to the possible negative 
// numbers which, when squared, become positive and break the ascending order of our input array.
const sortedSquaredArray = ( array: number[] ) => {
    return array.map(( el ) => el ** 2).sort(( a, b ) => a - b);
}

const sortedArray = [-10, -2, 0, 3, 15, 20];
console.log(`Input array: ${ sortedArray }`);
console.log(`Sorted squared array: ${ sortedSquaredArray(sortedArray) }`);