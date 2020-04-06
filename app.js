/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying, previousRoll, topScore;
console.log(topScore);
init();
         
// .textContent - Changes text only
//.innerHTML - changes HTML elements

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//.textContent - Can be used to store content into a variable
//var x = document.querySelector('#score-0').textContent;

//.style - changes CSS style     .style.property
//document.querySelector('.dice').style.display = 'none';

//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';

//calls function on event click (callback)
// can also call anonymous function directly after event click ('click', function(){})
 document.querySelector('.btn-roll').addEventListener('click', function(){
     if(gamePlaying){
         
      
         //1. Random Number
         var dice = Math.floor(Math.random() * 6) + 1;
         //console.log(dice);


//2. Display result
         var diceDOM = document.querySelector('.dice');
         diceDOM.style.display = 'block';
         diceDOM.src = 'dice-' + dice + '.png';    

//3. Update the round score IF the rolled number was NOT a 1
         if (dice === 6 && previousRoll === 6) {scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();
        }
         if (dice === 6) {
             previousRoll = 6;
              roundScore += dice;
             document.querySelector('#current-' + activePlayer).textContent = roundScore;
         } else if (dice !== 1) {
    // Add score
        roundScore += dice;
        previousRoll = 0;
    // roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
              
    } else {        previousRoll = 0;
                    nextPlayer();
         }

       
     }


});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //Add current score to global score
    scores[activePlayer] += roundScore;
        
     var topScore = document.querySelector('#winning-score').value;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    // check if player won the game
    if (scores[activePlayer] >= topScore) { document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;
    }
     else {
    
    //next player
    nextPlayer();
    }
    }
});




function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousRoll = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    
    
    document.querySelector('.dice').style.display = 'none';
} 


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousRoll = 0;
 
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    
     document.querySelector('.player-0-panel').classList.add('active');
   
};

