#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.cyanBright `"WELCOME TO CURRENCY CONVERTER!"`);
const currency = {
    USD: 1,
    EUR: 0.91,
    PKR: 277.54,
    AUD: 1.52,
    INR: 74.57,
    NZD: 1.66,
    OMR: 0.38,
    SAR: 3.75,
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Select from currency",
        choices: ["USD", "EUR", "PKR", "AUD", "INR", "NZD", "OMR", "SAR"]
    },
    {
        name: "To",
        type: "list",
        message: "Select to currency",
        choices: ["USD", "EUR", "PKR", "AUD", "INR", "NZD", "OMR", "SAR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
let roundAnswer = Math.round(convertAmount);
console.log(chalk.underline.yellow("Your answer is " + roundAnswer));
