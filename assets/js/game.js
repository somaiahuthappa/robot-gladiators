var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 50;

// You can also log multiple values at once like this

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    // // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    while(playerHealth > 0 && enemyHealth > 0) {
        
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
        
                    // // if no (false), ask question again by running fight() again
                    // else {
                    //     fight();
                    // }
            
        }

        // if player choses to fight
    
        // if (promptFight === "fight" || promptFight === "FIGHT") {
    
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
        )
    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!"); 
            window.alert("You have lost your robot in battle! Game over"); 
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
    
   
//     else {
//         window.alert("You need to choose a valid option. Try again!");
//     }
//     }
// }
for(var i = 0; i < enemyNames.length; i++) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
    }
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames [i];
    // reset enemyhealth before starting new fight
    enemyHealth = 50;
    // use debugger to pause script from running and check what's going on at the moment in the code
    debugger;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the ebemyName parameter
    fight(pickedEnemyName);
} 
    fight();
    