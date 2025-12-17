//loops
for(let i=0;i<=10;i++){
    console.log(i);
}
//2nd question
for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }else{
        console.log("odd gang");
    }
}
//functions
function bajji(a,b){
    return a-b;
}
console.log(bajji(15,3));
//2nd problem
function square(num){
    return num*num;
}
console.log(square(6));
//arrow functions
const iseven= (num) => {
if (num % 2 === 0) {
    return "Even";
} else {
    return "Odd";
}
};
console.log(iseven(10));
//arrays
let numbers = [10,25,45,90,44];
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[0]);
//2nd programme
let fruits = ["apple","banana","mango","grapes"];
fruits.push("orange");
console.log(fruits[2]);
fruits = fruits.filter(fruit => fruit !== "apple"); 
console.log(fruits);
