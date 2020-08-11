var birthDate = prompt("Enter your birth date");
var birth = new Date(birthDate);

var date = new Date();


if(birth.getMonth() == date.getMonth() && birth.getDate() == date.getDate()){
    console.log(date.getFullYear() - birth.getFullYear());
}
else{
    console.log((date.getFullYear() - 1) - birth.getFullYear());
}