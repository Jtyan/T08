let question = `What colour is the sky?
a. Purple
b. Pink
c. Blue
d. Yellow
Enter a, b, c, or d:`
let answer = ""
let retry = true
let answer2 =""

do{
    answer = prompt(question) //ask for an input, loop it until user stopped trying or guessed the right answer 
    if(answer !== "c"){ // if the answer is not "c", ask if they want to retry. If they don't, then break the loop
        do{ 
            answer2 = prompt(`That’s incorrect! Would you like to try again? y/n:`) 
            if(answer2 === "n"){ 
                console.log(`The correct answer is Blue`)
                retry = false
            }
        } while(answer2 !== "n" && answer2 !== "y") 
    } else { // if the answer is "c", end the loop
        retry = false 
        console.log(`That's correct!`)
    }
} while(retry);
