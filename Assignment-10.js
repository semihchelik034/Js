//Question 1
var arr = [];
var str = "";

for(var i = 1 ; i <= 1000 ; i++){
    arr.push(i);
}

for(var j = 0 ; j < arr.length ; j++){
    if(arr[j] % 10 == 0){
        str += arr[j] + "\n";
    }
    else{
        str += arr[j] + " ";
    }
}

console.log(str);

//Question 2
var num = 19;
var arr = [];

for(var i = 1 ; i <= 10 ; i++){
    arr[i] = i;
}
for(var i = 1 ; i <= 10 ; i++){
    arr[i] *= num;
}
for(var i = 1 ; i <= 10 ; i++){
    console.log(arr[i]);
}


//Question 3
var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
var search = prompt("Enter the character");
found=false;

label1:
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] == search){
        found = true;
        break label1;
    }
}

if(found){
    console.log(search + " found!");
}
else{
    console.log(search + " Not found!");
}

//Question 4
var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];

var halfCenturies=0;
var centuries=0;
var doubleCenturies=0;


//for loop to iterate through all the array elements.
for(var i = 0; i < scores.length; i++) {
    //NOTE: Your logic may be different from mine but output should not differ.
    if(scores[i] >= 200) { //if score is greater than or equals to 200
        doubleCenturies++ //Same as results[2] = results[2] + 1;
    } else if (scores[i] >= 100) { //if score is greater than or equals to 100
        centuries++;
    } else if (scores[i] >= 50) { //if score is greater than or equals to 50
        halfCenturies++
    }
}

console.log("Half-centuries scored by the batsman: " + halfCenturies);
console.log("Centuries scored by the batsman: " + centuries);
console.log("Double-centuries scored by the batsman: " + doubleCenturies);


//Question 5
var arr = [0,1];
var str = "";
var n = prompt("Enter nth fibonacci");
n = parseInt(n);

for(var i = 2 ; i < n ; i++){
    arr[i] = arr[i-1] + arr[i-2];
}

for(var i = 0 ; i < arr.length ; i++){
    if(i == arr.length-1){
        str += arr[i];
    }
    else{
        str += arr[i] + ",";
    }
}

console.log(str);













