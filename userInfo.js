function createUserProfiles(names , modifiedNames) {
    let userProfiles = [];
    let id = 1;
    names.forEach((originalName, index) => {
        userProfiles.push({
            id,
            originalName,
            modifiedName: modifiedNames[index]
        });
        id++;
    });
    return userProfiles;
}


let choice = createUserProfiles( ['Tuvalu' , 'Timor-Leste' , 'Bhutan', 'Belize', 'Andorra', 'Kiribati', 'Vanuatu', 'Suriname', 'Palau', 'Guyana'] , ['tuvalu' , 'TIMOR-LESTE' , 'bhutan', 'BELIZE', 'andorra', 'KIRIBATI', 'vanuatu', 'SURINAME', 'palau', 'GUYANA']);
console.log(choice);