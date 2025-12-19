//reverse string
let str = "ajjok";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--)
    reversed += str[i]; 

console.log(reversed);
// palindrome string
let str1 = "wow";
let reversed1 = "";

// reverse the string
for (let i = str1.length - 1; i >= 0; i--) {
reversed1 += str1[i];
}

// check palindrome
if (str1 === reversed1) {
  console.log("puka");       // string should be in quotes
} else {
console.log("konderripuka");
}
//count Vowels in a string
let str2 = "arripuka";
let count = 0;

for (let i = 0; i <str2.length; i++) {
if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
) {
    count++;
}
}
console.log("lavada:", count,"ra");


//repeated string
let str3 = "lavada";
let repeated = "";

for (let i = 0; i < str3.length; i++) {
for (let j = i + 1; j < str3.length; j++) {
    if (str3[i] === str3[j]) {
    repeated = str3[i];
    break;
    }
}
if (repeated) break;
}

console.log("guddi puka:", repeated,"ra babu");

