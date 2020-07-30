//Question 1

for(var i = 1 ; i <= 10 ; i++){
    console.log(12 + " X " + i + " = " + 12*i);
}


//Question 2

var nth = prompt("Enter the nth term in fibonacci series");
nth = parseInt(nth);

var num1 = 0;
var num2 = 1;
var print = "";

for(var i = 0; i < nth ; i++){

    print = print + num1 + " ";

    var nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}
console.log(print);

//Question 3

for(var i = 1; i <= 100; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}


//Question 4

for(var i = 200; i >= 5 ; i -= 5){
    console.log(i);
}

