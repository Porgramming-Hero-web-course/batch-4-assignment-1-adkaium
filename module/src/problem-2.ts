// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(arr: number[]): number[] {
    
    const uniqueNumverSet: number[] = [];
    const uniquSet = new Set<number>();

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (!uniquSet.has(num)) {
            uniqueNumverSet.push(num);
            uniquSet.add(num);
        }
    }

    return uniqueNumverSet;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));