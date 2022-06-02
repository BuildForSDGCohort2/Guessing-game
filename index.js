let username;//Holds the username 
let stage=1;
let wrongGuess=false ;
let range=2;
let points=0;
const GenerateNumber= (range)=>{
  return Math.floor(Math.random()*range+1)
}
  username= prompt("Enter a username");
while(!wrongGuess){
  const generatedNumber= GenerateNumber(range);
  const userGuess= parseInt(prompt(`Guess a number between 1 and ${range}`))
  if(userGuess>=1 && userGuess <=range && !isNaN(userGuess)){
          if(generatedNumber===userGuess){
          range+=1;
          stage+=1;
          points+=1;
          console.log(`Congrats ${username},you won .You are unto Stage ${stage} .You now have ${points} points...`);
          
        }
        else{
          console.log(`Wrong ${username}, The correct number is ${generatedNumber}. Total points : ${points} points`);
          console.log("GAME OVER !!!")
          wrongGuess=!wrongGuess;
        }
  }else{
    console.log(`Invalid input`)
  }
  
  
}