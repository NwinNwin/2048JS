let game = [
  [2, 4, 4, 2],
  [2, 0, 0, 2],
  [0, 0, 2, 2],
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

//Transpose ARRAY

function transpose(game) {
  let newGame = [];
  for (let i = 0; i < game.length; i++) {
    let newRow = [];
    for (let y = game[i].length - 1; y >= 0; y--) {
      newRow.push(game[y][i]);
    }
    newGame.push(newRow);
  }
  return newGame;
}

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
        if (zeroCount != 0) {
          game[i][y] = 0;
        }
        if (game[i][y + zeroCount] != 0 && game[i][y + zeroCount] == game[i][y + zeroCount + 1]) {
          game[i][y + zeroCount + 1] = oldValue * 2;
          game[i][y + zeroCount] = 0;
          zeroCount += 1;
        }
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
        if (zeroCount != 0) {
          game[i][y] = 0;
        }
        if (game[i][y - zeroCount] != 0 && game[i][y - zeroCount] == game[i][y - zeroCount - 1]) {
          game[i][y - zeroCount - 1] = oldValue * 2;
          game[i][y - zeroCount] = 0;
          zeroCount += 1;
        }
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

// console.log(game);

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

let testTranspose = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

let new3 = transpose(testTranspose);

console.log(testTranspose);
console.log(new3);

let new4 = transpose(new3);
console.log(new4);
