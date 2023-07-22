const leftNumber = +prompt("Enter first number :");
const operator = prompt(" operator?");
const rightNumber = +prompt("Enter second number :")


if(isNaN(leftNumber) || isNaN(rightNumber)){
    console.log("leftNumber or rightNumber is not a number!")
}


if(operator === "+"){
    console.log(leftNumber + rightNumber)
}else if(operator === "-"){
    console.log(leftNumber - rightNumber)
}else if(operator === "*"){
    console.log(leftNumber * rightNumber)
}else if(operator === "/"){
    console.log(leftNumber / rightNumber)
}else{
    console.log("the operator is not correct!")
}