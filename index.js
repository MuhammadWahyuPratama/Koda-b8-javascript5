const number = [17, 29, 71, 36, 55, 44, 19, 23]

number.forEach(function (item) {
    if (item % 2 === 0) {
        console.log(item + " Angka Genap")
    } else {
        console.log(item + " Angka Ganjil")
    }
})

