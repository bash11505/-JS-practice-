//promisses
let mypromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("promises completed successfully!");
    },2000);
});
mypromise.then(result=>{
    console.log(result);
});


//2nd programme
function checkEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Number is Even");
        } else {
            reject("Number is Odd");
        }
    });
}
checkEven(10)
checkEven(7)
    .then(result => console.log(result))
    .catch(error => console.log(error));
