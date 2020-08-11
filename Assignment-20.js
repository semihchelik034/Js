//Question 1
//
// function people(fullName, mass, height){
//
//     this.fullName = fullName;
//     this.mass = mass;
//     this.height = height;
// }
//
// var mark = new people("Mark ass brownie", 88, 5.9);
// var john = new people("Jhonny bones", 95, 6);
//
// mark.bmi = function () {
//     return this.mass / (this.height * this.height);
// }
//
// john.bmi = function () {
//     return this.mass / (this.height * this.height);
// }
//
// if(mark.bmi() > john.bmi()){
//     console.log(mark.fullName + " " + mark.bmi());
// }
// else if(john.bmi() > mark.bmi()){
//     console.log(john.fullName + " " + john.bmi());
// }
// else{
//     console.log("Equal bmi: " + john.bmi());
// }

//Question 2

function Salary(firstName, lastName, gender, age, studyingHours) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.studyingHours = studyingHours;

    this.averageHoursCalcualor = function() {
        var sum = 0;
        for (var i = 0; i < this.studyingHours.length; i++) {
            sum += this.studyingHours[i];
        }

        var average = sum / this.studyingHours.length;
        return average;
    }

    this.salaryCalculate = function(baseSalary) {

        if(this.averageHoursCalcualor() >= 4 && this.averageHoursCalcualor() <= 6){
            return baseSalary = " salary is $"+ Math.floor(baseSalary*1.1);
        }
        else if(this.averageHoursCalcualor() >= 6 && this.averageHoursCalcualor() <= 8){
            return baseSalary=" salary is $"+ Math.floor(baseSalary*1.2);
        }
        else if(this.averageHoursCalcualor() >= 8 && this.averageHoursCalcualor() <= 10){
            return baseSalary=" salary is $"+ Math.floor(baseSalary*1.5);
        }
        else{
            return "Not eligible to go to market, and study more";
        }
    }

}

var hours=[];
for(var i=0;i<5;i++){
    hours[i]=parseInt(prompt("Enter your study hours for week-" + (i+1) + " between 0-10"));
}

var p1=new Salary("mike","smith","male",30,hours);
var x=p1.salaryCalculate(100000);
console.log(p1.firstName + x)







