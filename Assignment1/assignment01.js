
/*****************************
 Task 1
*****************************/

var studentName = "Namra Fanse";

var noOfCourses = 5;

var programEnrolled = "CPA";

var partTimeJob = false;

console.log("My name is " + studentName + " and I'm in " + programEnrolled + " program." + " I'm taking " + noOfCourses + " courses this semester and"); (partTimeJob === true) ? console.log("I have a part-time job now.") : console.log(" I don't have a part-time job now.");                                                  


/*****************************
 Task 2
*****************************/
var Time = new Date();

var currentYear = Time.getFullYear();

var age = prompt("Please enter your age:", age);

var birthYear = (currentYear - age - 1);

console.log("You were born in the year of " +  birthYear + ".");

var studyTime = prompt("Enter the number of years you expect to study in college:", studyTime);

for (var i = 0; i <= studyTime ; i++){
var graduateYear = currentYear + i;
}

console.log("You will graduate from Seneca college in the year of " + graduateYear + ".");



/*****************************
 Task 3
*****************************/

var temperatureInCelsius = 18;

var fahrenheit = ((temperatureInCelsius * (9/5)) + 32);

console.log(temperatureInCelsius + "°C is " + fahrenheit + "°F.");

var temperatureInFahrenheit = 125;

var celsius = ((temperatureInFahrenheit - 32) * (5/9));

console.log(temperatureInFahrenheit + "°F is " + celsius + "°C.");



/*****************************
 Task 4
*****************************/

for ( i = 0; i <= 10 ; i++){

if((i % 2) == 0){
console.log(i + " is even");
}
else{
console.log(i + " is odd");
}
}

/*****************************
 Task 5
*****************************/

function largerNum(firstNo,secondNo){

var result = 0;

if(firstNo > secondNo){
result = firstNo;
}
else{
result = secondNo;
}
console.log("The larger number of " + firstNo + " and " + secondNo + " is " + result + "." );
}


largerNum(5,12) 
largerNum(447,64); 

var greaterNum = function(firstNo,secondNo){

var result = 0;

if(firstNo > secondNo){
result = firstNo;
}
else{
result = secondNo;
}
console.log("The larger number of " + firstNo + " and " + secondNo + " is " + result + "." );
}
greaterNum(225,652);
greaterNum(999,777);

/*****************************
 Task 6
*****************************/

function Evaluator (){

var average = 0;

var total = 0;

for ( var x = 0 ; x < arguments.length ; x++){

total += arguments[x];

}

average = total/arguments.length;

if ( average >= 50){

console.log("Average grater than or equal to 50: true");

}

else{

console.log("Average grater than or equal to 50: false");

}

}

Evaluator(25,26,89,42);
Evaluator(89,78,65,99,147);
Evaluator(66,87,225,88,1147);

/*****************************
 Task 7
*****************************/

var Grader = function(score){
var grade;

if ( score >= 80 && score <= 100){
grade = "A";
}
else if ( score >= 70 && score <= 79){
grade = "B";
}
else if ( score >= 60 && score <= 69){
grade = "C";
}
else if ( score >= 50 && score <= 59){
grade = "D";
}
else{
grade = "F";
}
console.log(grade);
}
Grader(88);
Grader(65);
Grader(47);



/*****************************
 Task 8
*****************************/

function showMultiples(num,numMultiples){

for ( i = 1; i <= numMultiples ; i++){

var result = num * i

console.log(num + " x " + i + " = " + result);
}


}


showMultiples(5,4);
showMultiples(10,6);
showMultiples(50,7);
