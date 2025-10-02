/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Items you start with
let hasTorch = true;
let hasMap = false;
let hasSword = true;
let hasCompass = false;

console.log("You wake up in a dark forest. You have a torch and a sword, but no map.");
console.log("You see two paths: one leads to the mountains, the other to the village.");

// First choice
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

// Mountains path
if (choice === "mountains") {
  if (hasTorch && hasCompass) {
    console.log("With your torch and compass, you find a hidden cave full of treasure!");
  } else if (hasTorch && !hasCompass) {
    console.log("You can see with your torch, but without a compass you get lost in the mountains.");
  } else {
    console.log("It’s too dark and dangerous to continue in the mountains.");
  }
}

// Village path
else if (choice === "village") {
  console.log("You arrive at a quiet village. A merchant offers you a map.");
  const buyMap = readline.question("Do you want to buy the map? (yes/no): ");

  if (buyMap === "yes") {
    hasMap = true;
    console.log("You now have a map!");
  } else {
    console.log("You decide not to buy the map.");
  }

  // Nested choice in the village
  const explore = readline.question("Do you explore the 'inn' or the 'forest' near the village? ");

  if (explore === "inn") {
    if (hasSword) {
      console.log("You fend off a thief at the inn using your sword. The villagers thank you!");
    } else {
      console.log("A thief steals your gold at the inn because you have no weapon.");
    }
  } else if (explore === "forest") {
    if (hasMap || hasCompass) {
      console.log("With your map or compass, you find a hidden temple in the forest!");
    } else {
      console.log("You get lost in the forest and wander until nightfall.");
    }
  } else {
    console.log("You stay in the village and rest. A simple but safe choice!");
  }
}

// If the player typed something else
else {
  console.log("You stand still, unable to decide, and night falls...");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
