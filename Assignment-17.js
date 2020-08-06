var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."

//Question 1
console.log(strVar.split(".").length);

//Question 2
console.log(strVar.split(" ").length);

//Question 3
console.log(strVar.split("Today is")[1].split(".")[0]);

//Question 4
var far = parseInt(strVar.substr(strVar.indexOf(" F")-3,3));
var celcius = (far-32)/1.8;

console.log(celcius);

//Question 5

var word = "";
var num = "";
for (var i = 0; i < strVar.length; i++) {

        if(isNaN(strVar.charAt(i)) && strVar.charAt(i) != " "){
            word +=  "" + strVar.charAt(i);
        }
        else if(strVar.charAt(i) != " "){
            num += "" + strVar.charAt(i);
        }
}
console.log(word.concat(num));


//Question 6
console.log(strVar.replace('2 to 3 hours' , '3 to 4 hours'));

//Question 7
var strArr = strVar.split(".");
console.log(strArr[0].toUpperCase() + "." + strArr[1].toLowerCase() + "." + strArr[2].toLowerCase());


//Question 8
str = "";
for (var i = 0; i < strVar.length; i++) {
    if(strVar.charAt(i) == " "){
        strVar.charAt(i).replace(" ", "");
    }
    else{
        str = str + strVar.charAt(i);
    }
}
console.log(str);


//Question 9
var str = "";
for (var i = 0; i < strVar.length; i++) {
    if(strVar.charAt(i) == "," || strVar.charAt(i) == "."){
        strVar.charAt(i).replace("," , "");
        strVar.charAt(i).replace("." , "");
    }
    else{
        str  = str + strVar.charAt(i);
    }
}
var output = ""
var arr = str.split(" ");
for (var i = arr.length-1; i >= 0 ; i--) {
    output += arr[i] + " ";
}
console.log(output);



