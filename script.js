// Score object
let score = {
  Red: 0,
  Blue: 0,
  Green: 0,
  Yellow: 0
};

// Opening Ceremony
function OpeningCeremony(callback) {
  console.log("🏁 Sports Day Opening Ceremony Started...");

  let count = 0;
  let interval = setInterval(() => {
    console.log("Get Ready... " + (count + 1));
    count++;

    if (count === 3) {
      clearInterval(interval);
      console.log("Let the games begin!\n");
      callback(score);
    }
  }, 1000);
}

// Race 100M
function Race100M(score, callback) {
  setTimeout(() => {
    console.log("🏃‍♂️ 100M Race Started...");

    let times = {
      Red: Math.random() * 5 + 10,
      Blue: Math.random() * 5 + 10,
      Green: Math.random() * 5 + 10,
      Yellow: Math.random() * 5 + 10
    };

    // Sort by time
    let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);

    // Assign scores
    score[sorted[0][0]] += 50;
    score[sorted[1][0]] += 25;

    console.log("Race Results:", sorted);

    callback(score);
  }, 3000);
}

// Long Jump
function LongJump(score, callback) {
  setTimeout(() => {
    console.log("\n🏃 Long Jump Event...");

    let colors = ["Red", "Blue", "Green", "Yellow"];
    let winner = colors[Math.floor(Math.random() * colors.length)];

    score[winner] += 150;

    console.log("Long Jump Winner:", winner);

    callback(score);
  }, 2000);
}

// High Jump
function HighJump(score, callback) {
  console.log("\n🏆 High Jump Event...");

  let userInput = prompt("Enter the color with highest jump (Red/Blue/Green/Yellow):");

  if (!userInput) {
    console.log("Event was cancelled due to no input");
    callback(score);
    return;
  }

  userInput = userInput.trim();

  if (score.hasOwnProperty(userInput)) {
    score[userInput] += 100;
    console.log(userInput + " won High Jump!");
  } else {
    console.log("Invalid input! No points awarded.");
  }

  callback(score);
}

// Award Ceremony
function AwardCeremony(score) {
  console.log("\n🎉 Final Scores:", score);

  let sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

  console.log("\n🥇 1st Place:", sorted[0][0]);
  console.log("🥈 2nd Place:", sorted[1][0]);
  console.log("🥉 3rd Place:", sorted[2][0]);
}

// Execution Chain
OpeningCeremony((score) => {
  Race100M(score, (score) => {
    LongJump(score, (score) => {
      HighJump(score, (score) => {
        AwardCeremony(score);
      });
    });
  });
});
