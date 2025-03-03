//definition of the array with possible moves
const moves = ["rock", "paper", "scissors"];
//definition what the players move can  be - it should be the 3rd node argument, no1 and no2 are the path and the file 
//process argument at index 2 what is the third argument beecause the index is counting from 0
// in other words taking the 3rd (Index=2) CLI Parameter as move 
const playerMove = process.argv[2];

//best way to read is from the end in line 11, it says: if const playerMove doesnt include a value from the array(moves) than execute
// line 12 within curly paranthesese which says: display an error in the console which says the strings written in following
// round paranthesese within quatation marks- line 13 is the response to the if argument in line 11...
if (!moves.includes(playerMove)) {
    console.error("Please choose rock, paper, or scissors.");
    return;
}
//here we define the machine move = we enter/acces the array where the possible moves are defined[] first we acces the moves array
//in the square paranthesese we define which element of the arry we want to choose - math.floor takes down decimal places
//  math.random() choses a random number between 0 and 1 (Index) but gets multiplicated with arrays lenght with the operator * moves.length
// what makes the method choose randomly from all 3 possible array elements by Index.
const computerMove = moves[Math.floor(Math.random() * moves.length)];

//defining output after running the command
//24 displaying the const playerMove
//25 diplaying the definded const computerMove
console.log(`You chose: ${playerMove}`);
console.log(`Computer chose: ${computerMove}`);

// here the rules are defined 
//if players and machines move is the same display: "Its a draw"
//else if  playerMove equals "rock" and computerMove equals "scissors"and 2 other winning situation for the player
// display: "You win"
// all other moves let the machine win,means we use else method/function to let the terminal display: "You loose"
if (playerMove === computerMove) {
    console.log("It's a draw!")
} else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
) {
    console.log("You win!");
} else {
    console.log("You lose!");
}