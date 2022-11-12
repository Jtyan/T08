let input = prompt(`input a word here to check if it is a palindrome.`).toLowerCase()

let i = 0
let j = input.length - 1
let isPalindrome = true

while (i <= j) {
    if (input[i] === input[j]) {
        i++;
        j--;
    } else if (input[i] !== input[j]) {
        isPalindrome = false
        break
    }
}
isPalindrome ? console.log(`Yes. ${input} is a palindrome`) : console.log(`${input} is not a palindrome`)

//Get an input
//Check first string and last string. 
//If they are the same, then move to second string and second to last string.
//If they are the same, then move to the next.
//Repeat until they reach the same position in the word or stop if they're different.
//Print out is palindrome or is not palindrome statement
