function processArray(numArray) {
    return numArray.map (num => 
        (num % 2 === 0 ? num * num : num * 3)
    );
}


function formatArrayStrings(strArray , numArray) {
    return strArray.map ((str, index) =>
        (numArray[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase())
    );

}

let selection = processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(selection);

let wordSelection = formatArrayStrings(['Tuvalu' , 'Timor-Leste' , 'Bhutan', 'Belize', 'Andorra', 'Kiribati', 'Vanuatu', 'Suriname', 'Palau', 'Guyana'] , [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(wordSelection);