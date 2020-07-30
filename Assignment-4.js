//Question 1

var num = prompt("Enter a number");
num = parseInt(num);

switch (num % 2) {
    case 0:
        console.log("Even");
        break;
    case 1:
        console.log("Odd");
        break;
    default:
        console.log("Error!");
        break;
}


//Question 2

var num = prompt("Enter a number");

switch(num){
    case "0":
    case "1":
    case "2":
        console.log("Low number");
        break;
    case "3":
    case "4":
    case "5":
        console.log("Medium number");
        break;
    default:
        console.log("Other number");
        break;
}


//Question 3

var num = prompt("Enter your total cost");
num = parseInt(num);

switch (num) {
    case 1000:
        num *= 0.95;
        break;
    case 10000:
        num *= 0.92;
        break;
}

console.log("You have to pay " + num + " dollars");


//Question 4

var color = prompt("Enter your color");

switch (color) {
    case "R":
    case "r":
        console.log("Red");
        break;
    case "O":
    case "o":
        console.log("Orange");
        break;
    case "G":
    case "g":
        console.log("Green");
        break;
}
