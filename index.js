#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const ans = await inquirer.prompt([
    { message: "please guess your num", name: "guessedNumber", type: "number" },
]);
if (ans.guessedNumber === randomNumber) {
    console.log("cong! You guessed right number");
}
else {
    console.log("unfortunately! you guessed wrong number");
}
