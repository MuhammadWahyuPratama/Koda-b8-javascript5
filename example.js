// 20 Built-in method 

//1 indexOf
// Metode `String` ini mencari substring yang ditentukan dan mengembalikan indeks kemunculan pertama substring tersebut. Metode ini menerima posisi awal yang bersifat opsional dan mengembalikan kemunculan pertama substring yang ditentukan pada indeks yang lebih besar dari atau sama dengan angka yang ditentukan.
// example :
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6

//2. lastIndexOf
// Metode `String` ini mencari substring yang ditentukan dan mengembalikan indeks kemunculan terakhir dari substring tersebut. Metode ini menerima posisi awal sebagai parameter opsional dan mengembalikan indeks kemunculan terakhir dari substring yang ditentukan, dengan indeks tersebut tidak melebihi angka yang ditentukan.
// example :
const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

//3. toString()
//Metode untuk nilai String mengembalikan nilai string ini.
// example :
const y = new String("Hello world");

console.log(y.toString()); // "Hello world"

//4.forEach
// Tidak membutuhkan parameter, dan kegunaannya menghapus array yang ada di paling belakang (last element)
array9 = [4, 3, 30, 20, "a"];
array9.forEach(function (index) {
    console.log(index)
})

//5.concat()
//  Metode ini menggabungkan argumen-argumen string ke dalam string ini dan mengembalikan string baru.
// example :
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"
console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

//6.endsWith
// Metode `isStringEndingWith` menentukan apakah sebuah string diakhiri dengan karakter-karakter tertentu, dan mengembalikan nilai `true` atau `false` sesuai dengan hasilnya.
//example :
const str3 = "Cats are the best!";

console.log(str3.endsWith("best!"));
// Expected output: true

console.log(str3.endsWith("best", 17));
// Expected output: true

const str4 = "Is this a question?";

console.log(str4.endsWith("question"));
// Expected output: false

//7. includes ()
// Metode untuk nilai String melakukan pencarian yang membedakan huruf besar-kecil untuk menentukan apakah string tertentu terdapat di dalam string ini, dan mengembalikan nilai true atau false sesuai dengan hasilnya.
// example :
const str5 = "To be, or not to be, that is the question.";

console.log(str5.includes("To be")); // true

console.log(str5.includes("nonexistent")); // false

//8.valueOf
//Metode untuk nilai String mengembalikan nilai string ini.
// example :
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'

//9.trim()
// Metode ini menghapus spasi kosong di kedua ujung string tersebut dan mengembalikan string baru, tanpa mengubah string aslinya.
// example :
const str6 = "   foo  ";
console.log(str6.trim()); // 'foo'

//10.trimend()
// Metode ini menghapus spasi kosong di bagian akhir string dan mengembalikan string baru, tanpa mengubah string aslinya. trimRight() adalah nama lain dari metode ini.
//example :
let str7 = "   foo  ";

console.log(str7.length); // 8

str7 = str7.trimEnd();
console.log(str7.length); // 6
console.log(str7); // '   foo'

//11.trimStart()
//Metode ini menghapus spasi kosong di bagian awal string dan mengembalikan string baru, tanpa mengubah string aslinya.
//example : 
let str8 = "   foo  ";

console.log(str8.length);

str8 = str8.trimStart();
console.log(str8.length);
console.log(str8);

//12.toUpperCase
// Metode untuk nilai String ini mengembalikan string tersebut yang telah diubah menjadi huruf besar.
// example :
const sentence = "hello world";

console.log(sentence.toUpperCase());

//13. toLowerCase()
//Metode untuk nilai String ini mengembalikan string tersebut yang telah diubah menjadi huruf kecil, kebalikan dari toUpperCase
// example : 
const sentence1 = "hello world";

console.log(sentence1.toLowerCase());

//14.promise()
//Objek ini mewakili penyelesaian (atau kegagalan) akhir dari suatu operasi asinkron beserta nilai hasilnya.
// example :
const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Success!");
    }, 250);
});

myFirstPromise.then((successMessage) => {
    console.log(`Yay! ${successMessage}`);
});

//15.push()
// memberikan atau menambahkan isi dalam array
// example : 
let angka = [2, 3, 4, 5, 6];

angka.push(7);

console.log(angka);

//16. then()
// Metode pada objek Promise menerima hingga dua argumen: fungsi callback untuk kasus Promise yang berhasil dan yang gagal. Metode ini menyimpan fungsi callback tersebut di dalam objek Promise yang dipanggil, lalu segera mengembalikan objek Promise lain, sehingga Anda dapat merangkai panggilan ke metode Promise lainnya.
// example : 
const p1 = new Promise((resolve, reject) => {
    resolve("Success!");
});

p1.then(
    (value) => {
        console.log("jek jek");
    },
    (reason) => {
        console.error(`error : ${reason}`);
    },
);

//17.find()
//Metode find pada objek Array mengembalikan elemen pertama dalam array yang diberikan yang memenuhi fungsi pengujian yang ditentukan. Jika tidak ada nilai yang memenuhi fungsi pengujian tersebut, maka `undefined` akan dikembalikan.
//example : 
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

//18.map ()
// Objek tersebut menyimpan pasangan kunci-nilai dan mengingat urutan penyisipan asli dari kunci-kunci tersebut. Nilai apa pun (baik objek maupun nilai primitif) dapat digunakan sebagai kunci maupun nilai.
// example :
array3 = [20, 20, 20, 20, 30];
array3.map((item) => {
    console.log(item);
});

//19.length 
//properti atau fungsi untuk mengetahui jumlah total elemen di dalam sebuah array.
// example : 
let arr = [1, 2, 3, 4]

console.log(arr.length)

//20.close()
//Metode ini menutup jendela saat ini, atau jendela tempat metode tersebut dipanggil.
//example : 
// Global variable to store a reference to the opened window
let openedWindow;

function openWindow() {
    openedWindow = window.open("hehhee");
}


function closeOpenedWindow() {
    openedWindow.close();
}

// 5 built in fuction

//1. parseInt
// Mengubah Tipe data lain menjadi Int
// example :
console.log(parseInt("2"));
//2. ParseFloat
// example :
console.log(parseFloat(2 / 9));
//3. isNaN 
//mengembalikan true / false
// example :
console.log(isNaN(NaN));
//4.math
// Objek Math berisi properti dan metode statis untuk konstanta dan fungsi matematika.
// example :
function cariMaksimum(a, b) {
    return Math.max(a, b);
}
function cariMinimum(a, b) {
    return Math.min(a, b);
}
console.log(cariMaksimum(10, 25)); // Output: 25
console.log(cariMinimum(10, 25));  // Output: 10

//5.setTimeOut
//antarmuka ini Window mengatur waktu(timer) yang akan mengeksekusi sebuah fungsi atau bagian kode tertentu setelah timer berakhir.
//example
setTimeout(() => {
    console.log("jek")
}, 1000)