#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.bold.bgWhiteBright("Enter Your Sentence To Count The Word :"),
    },
]);
// const words = answers.Sentence.trim().split(" ");
// console.log(words);
// console.log(chalk.bold.green(`Your Sentence word count is ${words.length}`));
if (answers.Sentence === "") {
    console.log(chalk.bgRed("Please Enter A Sentence"));
}
else {
    const words = answers.Sentence.trim().split(" ");
    console.log(words);
    console.log(chalk.bold.green(`Your Sentence word count is ${words.length}`));
}
