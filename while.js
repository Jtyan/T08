let input = 0
let numbers= []
let question = "Please enter a number. Once finish, enter -1 to stop and get the average. " 

while (input !== "-1"){ //if the input is not -1 string, keep popping the question
    input = prompt(question)
    let inputAsNum = Number(input) //change the input from string to number 
    if (!isNaN(inputAsNum)){ //if input is a number
        if (inputAsNum !== -1) {
            numbers.push(inputAsNum) // add every input into the array
            console.log(numbers)
            question = "Please enter a number. Once finish, enter -1 to stop and get the average. " 
        }
    } else{ //if input is not a number, rephrase the question 
        question = `${input} is not a number. Please enter a number`
    }
}
// after collecting all the input numbers, calculate the average using sum divided by the array's length
let average = (numbers.reduce((total, current) => total + current, 0)) / numbers.length
console.log(`The average is ${average}`)

//ask for a number input
// if input is not  -1 ask again, save the input
// if input is -1, stop. Calculate the total and average

