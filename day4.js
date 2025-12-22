//onjectbasic problem
let person ={
    name:"basha",
    age:20
};
console.log(person.name);
console.log(person.age);
//intermidiate problem
let arr = ["apple", "banana", "apple", "orange", "banana", "apple","orange"];

let result = {};   

for (let i = 0; i < arr.length; i++) {   
let item = arr[i];

if (result[item]) {                   
    result[item] = result[item] + 1;
} else {                              
    result[item] = 1;
}
}

console.log(result);

//3rd programme
let arr1 = ["python", "javascript","c"];

let result1 = {};   

for (let i = 0; i < arr.length; i++) {   
let item1 = arr1[i];

if (result1[item1]) {                   
    result1[item1] = result1[item1] + 1;
} else {                              
    result1[item1] = 1;
}
}