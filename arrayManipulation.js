function processArray(numArray) {
    return numArray.map (num => 
        (num % 2 === 0 ? num * num : num * 3)
    );
}

let selection = processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(selection);