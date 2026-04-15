// Initial score object
let scores = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0
};

// 🟢 Opening Ceremony
function OpeningCeremony(callback) {
  console.log("🏁 Opening Ceremony Started...");

  setTimeout(() => {
    console.log("Initial Scores:", scores);
    callback(scores);
  }, 1000);
}

// 🏃 Race 100M
function Race100M(scores, callback) {
  console.log("\n🏃 100M Race Started...");

  setTimeout(() => {
    // Generate random times
    let times = {
      red: Math.random() * 10 + 10,
      blue: Math.random() * 10 + 10,
      green: Math.random() * 10 + 10,
      yellow: Math.random() * 10 + 10
    };

    // Sort by time (lowest wins)
    let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);

    // Assign points
    scores[sorted[0][0]] += 50;
    scores[sorted[1][0]] += 25;

    console.log("Race Results:", sorted);
    console.log("Updated Scores:", scores);

    callback(scores);
  }, 3000);
}

// 🏅 Long Jump
function LongJump(scores, callback) {
  console.log("\n🏅 Long Jump Started...");

  setTimeout(() => {
    let colors = Object.keys(scores);
    let winner = colors[Math.floor(Math.random() * colors.length)];

    scores[winner] += 150;

    console.log("Long Jump Winner:", winner);
    console.log("Updated Scores:", scores);

    callback(scores);
  }, 2000);
}

// 🏆 High Jump
function HighJump(scores, callback) {
  console.log("\n🏆 High Jump Started...");

  setTimeout(() => {
    let userInput = prompt("Which color won High Jump?");

    if (scores.hasOwnProperty(userInput)) {
      scores[userInput] += 100;
    } else {
      console.log("Invalid input! No points awarded.");
    }

    console.log("Updated Scores:", scores);

    callback(scores);
  }, 2000);
}

// 🎉 Award Ceremony
function AwardCeremony(scores) {
  console.log("\n🎉 Award Ceremony");

  let sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  console.log("Final Scores:", scores);
  console.log(`🥇 1st Place: ${sorted[0][0]}`);
  console.log(`🥈 2nd Place: ${sorted[1][0]}`);
  console.log(`🥉 3rd Place: ${sorted[2][0]}`);
}

// 🔗 Callback Chain Execution
OpeningCeremony((scores) => {
  Race100M(scores, (scores) => {
    LongJump(scores, (scores) => {
      HighJump(scores, (scores) => {
        AwardCeremony(scores);
      });
    });
  });
});
