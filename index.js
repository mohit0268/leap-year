const readlinesync=require('readline-sync')
const chalk=require('chalk')

var username=readlinesync.question("May I have your name please?\n");
console.log(chalk.yellowBright.bold("Welcome "+ username ))

var userAge=readlinesync.question('Type a year to check wheather it is a leap year or not? \n')

function leapYear(){
 if(userAge%400==0 && userAge%100==0 && userAge%4==0){
   console.log(chalk.bold.greenBright("Yes "+ userAge+ " is a leap year." ))
 }
 else{
   console.log(chalk.red.bold('No Its not a leapyear'))
 }
 console.log(chalk.bgWhite.blackBright.bold('Thank you for playing!Have a nice day!!'))
}
var age=leapYear();
console.log(age)