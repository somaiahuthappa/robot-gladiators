/*// window.alert("This is an alert! JavaScript is running!")

// This creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");

console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this does math
console.log(10 + 10);
// what is this?
console.log("Our robot name is " + playerName)

function fight () {
    window.alert("The fight has bugun!")
}

// fight ();*/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log (i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight

    if (promptFight === "fight" || promptFight === "FIGHT") {

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName+ " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died.");
    }
    else {
        window.alert( enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in 'playerHealth'
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )
// check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}

// if player choses to skip
 else if (promptFight === "skip" || promptFight === "SKIP") {
    //  confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
            }

            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
    
}
else {
    window.alert("You need to choose a valid option. Try again!");
}
}
// fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
} 