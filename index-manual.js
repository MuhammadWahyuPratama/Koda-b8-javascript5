const number = [17, 29, 71, 36, 55, 44, 19, 23]

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        console.log(number[i] + " Angka Genap ")
    } else {
        console.log(number[i] + " Angka Ganjil ")
    }
}