//Question 1
var myArray=Array(8);

for(var i=0;i<myArray.length;i++){
    myArray[i]=Array(8);
}

var counter=1;
for(var i=0;i<myArray.length;i++){
    var str="";
    for(var j=0;j<myArray[i].length;j++){
        myArray[i][j]=counter++;
        str=str+myArray[i][j]+" ";
    }
    console.log(str);
}


//Question 2
var arr = Array(8);
for (var i = 0; i < 8; i++) {
    arr[i] = Array(8);
}

for(var i = 0 ; i < 8 ; i++){
    var str = "";
    for (var j = 0; j < arr[i].length; j++) {
        if((i+j) % 2 == 0){
            arr[i][j] = "W";
        }
        else{
            arr[i][j] = "B";
        }
        str += arr[i][j];
    }
    console.log(str);
}


//Question 3
var numbers = [
    [90, 10, 231],
    [-20, 80, 100, 23, 54],
    [45, 22],
    [87, 98, -100, 49, 73, 35, 19]
];

var max=numbers[0][0];
for(var i=0;i<numbers.length;i++){
    for(var j=1;j<numbers[i].length;j++){
        if(numbers[i][j]>max){
            max=numbers[i][j];
        }
    }
}
console.log(max);












