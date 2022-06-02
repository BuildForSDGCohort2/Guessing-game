let username;//Holds the username of the player
let range=2;
let quit=false;
let stage=1;//Holds the current stage of the player
let wrongGuess=false ;//tracks whether the player guessed right
let points=0;

//this function generates a random between 1 and  a range passed in as a parameter
const GenerateNumber= (range)=>{
  return Math.floor(Math.random()*range+1)
}


const RunGuessGame=()=>{
  while(!wrongGuess){
  const generatedNumber= GenerateNumber(range);//Generates a number
  //Ask the user to guess the number and store it
  const userGuess= parseInt(prompt(`Guess a number between 1 and ${range}`))

  //This checks if the user entered a valid number
  if(userGuess>=1 && userGuess <=range && !isNaN(userGuess)){
          if(generatedNumber===userGuess){//This checks if the user guessed right
          range+=1;//increase the range
          stage+=1;//move to the next stage
          points+=1;//gets some points
          console.log(`Congrats ${username},you won .You are unto Stage ${stage} .You now have ${points} points...`); 
        }
        else{//this works if the user guessed wrongly
          console.log(`Wrong ${username}, The correct number is ${generatedNumber}. Total points : ${points} points`);
          console.log("GAME OVER !!!")
          wrongGuess=!wrongGuess;//this stops the loop
        }
  }else{//this notify the user in case wrong input 
    console.log(`Invalid input`)
  }
  
}
//Resets the variables back to the default values
stage=1,range=2,wrongGuess=!wrongGuess,points=0;
}


const playGame= ()=>{
  while(!quit){
   const decision=  parseInt(prompt("Ready to play ?1.Yes 2.Exit"));
    if(decision===1){
      RunGuessGame();
    }
    else if(decision== 2){
      quit=!quit;
    }else{
      console.log("Enter a valid digit")
    }
  }
}


//Stores the username of the player
username= prompt("Enter a username");

//This function beginis starts the game
playGame();
