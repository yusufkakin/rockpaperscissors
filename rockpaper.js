const hands = ["rock", "paper", "scissors"];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = { name: "Yusuf", hand: getHand() };
let player2 = { name: "Melike", hand: getHand() };

function playRound(player1, player2) {

    player1.hand = getHand(hands);
    player2.hand = getHand(hands);

  {
    if (player1.hand === "rock") {
      if (player2.hand === "paper") {
        return player2;
      } else {
        if (player2.hand === "scissors") {
          return player1;
        } else {
          if (player2.hand === "rock") {
            return "it's a tie";
          }
        }
      }
    }

    if (player1.hand === "paper") {
      if (player2.hand === "rock") {
        return player1;
      } else {
        if (player2.hand === "scissors") {
          return player2;
        } else {
          if (player2.hand === "paper") {
            return "it's a tie";
          }
        }
      }
    }

    if (player1.hand === "scissors") {
      if (player2.hand === "rock") {
        return player2;
      } else {
        if (player2.hand === "paper") {
          return player1;
        } else {
          if (player1.hand === "scissors") {
            return "it's a tie";
          }
        }
      }
    }
  }
}

function playGame(player1, player2, playUntil){
    let player1Count = 0;
    let player2Count = 0;
    let winneris;

    while (player1Count < playUntil || player2Count < playUntil) {
        winneris = playRound(player1, player2);
        if (winneris == player1) {
            player1Count++;
        } else if (winneris == player2){
            player2Count++;
    }

console.log(winneris)

}

console.log(winneris.name + " is the winner!!!")
return winneris;

}

playGame(player1, player2, 5)


// I TRIED TO HOLD SCORE, PLEASE IGNORE

// let GameResults = []
// function playGame(player1, player2, playUntil){
//     for(let g=0; g < playUntil; g++){
//         let rss = {};
//         rss.GameResults = playRound(player1, player2)
//         GameResults.push(rss)
// }
// }
// playGame(player1, player2, 5)
// console.log(GameResults)
// let counts = {}
// GameResults.forEach(function (x) {counts[x] = (counts[x] || 0) + 1; })
// console.log(counts)
