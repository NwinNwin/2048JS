let game = [
  [2, 0, 2, 0],
  [2, 0, 0, 2],
  [0, 0, 2, 0],
  [0, 2, 0, 0],
];

//NEWGAME
function newGame(game) {
  let row = Math.floor(Math.random() * 4);
  let column = Math.floor(Math.random() * 4);
  let row2 = Math.floor(Math.random() * 4);
  let column2 = Math.floor(Math.random() * 4);
  game[row][column] = 2;
  game[row2][column2] = 2;
  return game;
}

function newBox() {
  let box = Math.floor(Math.random() * 2);
  if (box == 1) {
    return 2;
  } else {
    return 4;
  }
}

// game = newGame(game);
// console.log(game);

// D on keyboard
function moveRight(game) {
  console.log("right");
  for (let i = 0; i < game.length; i++) {
    let zeroCount = 0;
    for (let y = game[i].length - 1; y >= 0; y--) {
      if (y == 3 && game[i][y] != 0) {
        continue;
        //ignore if number is 0
      } else if (game[i][y] == 0) {
        zeroCount += 1;
      } else {
        let oldValue = game[i][y];
        game[i][y + zeroCount] = oldValue;
        game[i][y] = 0;
      }
    }
  }

  return game;
}

// A on keyboard
function moveLeft() {
  console.log("left");
  for (let i = 0; i < game.length; i++) {
    let zeroCount = 0;
    for (let y = 0; y < game.length; y++) {
      if (y == 0 && game[i][y] != 0) {
        continue;
      } else if (game[i][y] == 0) {
        //ignore if number is 0
        zeroCount += 1;
      } else {
        let oldValue = game[i][y];
        game[i][y - zeroCount] = oldValue;
        game[i][y] = 0;
      }
    }
  }

  return game;
}
// S on keyboard
function moveDown() {
  console.log("down");
}
// W on keyboard
function moveUp() {
  console.log("up");
}

//EXECUTE
// game = moveRight(game);
// console.log(game);

console.log(game);

let kb = document.body.addEventListener("keypress", (e) => {
  if (e.key == "a") {
    game = moveLeft(game);
    console.log(game);
  }
  if (e.key == "d") {
    game = moveRight(game);
    console.log(game);
  }
  if (e.key == "w") {
    game = moveDown(game);
    console.log(game);
  }
  if (e.key == "s") {
    game = moveUp(game);
    console.log(game);
  }
});
