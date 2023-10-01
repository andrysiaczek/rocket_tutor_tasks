// Solution
// We go through each element of an input array and compare it with the elements on its right side 
// (the left side is omitted so we don't compare the same pair of elements twice). 
// Once we find two elements that add up to the expected number, we return them. 
// Otherwise, if we went through the whole array without success, we return an empty array.
const twoNumberSum = ( array: number[], targetSum: number ) => {
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = i + 1; j < array.length; j++ ) {
             if ( array[i] + array[j] === targetSum ) return [array[i], array[j]]               
        };
    };
    return [];
}
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
console.log(`Input array: ${ array }`);
console.log(`Target sum: ${ targetSum }`);
console.log(`Result: ${ twoNumberSum(array, targetSum) }`)