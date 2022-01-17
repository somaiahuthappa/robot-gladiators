
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {   
    while(playerHealth > 0 && enemyHealth > 0) {
                // ask a player if they want to fight
        var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

         // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //  confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
        
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
                    }
                }
    
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName+ " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
            //award player money for winning
            playerMoney = playerMoney + 20;
            // leave while () loop since enemy is dead
            break;
        }
        else {
            window.alert( enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in 'playerHealth'
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");            
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
    
// function to start a new game
var startGame = function () {
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

// fight each enemy robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyNames.length; i++) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyhealth before starting new fight
        enemyHealth = 50;
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the ebemyName parameter
        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game over"); 
        break;
    }
}
// after the loop ends, player is either dead or enemies are dead
endGame();
};

// function to end the entire game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score");
    }
    else{
        window.alert("The game has now ended. Let's see how you did!");
    }
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robopt Gladiators! Come back soon!");
    }
    };

    startGame();
    
     // start the game when the page loads

    // // start the game when the page loads