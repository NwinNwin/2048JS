let game = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let colors2048 = {
  0: "#cdc1b5",
  2: "#eee4da",
  4: "#ede0c8",
  8: "#f2b179",
  16: "#f59563",
  32: "#f67c60",
  64: "#f65e3b",
  128: "#edcf73",
  256: "#edcc62",
  512: "#edc850",
  1024: "#edc53f",
  2048: "#edc22d",
};

function updateGameUI(game) {
  gameCol = document.querySelectorAll(".game-col");
  colCount = 0;
  for (let i = 0; i < game.length; i++) {
    for (let y of game[i]) {
      if (y != 0) {
        gameCol[colCount].innerHTML = `<h2>${y}</h2>`;
        if (y == 2 || y == 4) {
          gameCol[colCount].style.color = "#786a6a";
        } else {
          gameCol[colCount].style.color = "#f8f9ee";
        }
      } else {
        gameCol[colCount].innerHTML = "";
      }
      gameCol[colCount].style.backgroundColor = colors2048[y];

      colCount += 1;
    }
  }
}

//NEWGAME
function startGame(game) {
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

function addNewBoxToGame(game) {
  gameOver = 0;
  while (gameOver != 16) {
    let row = Math.floor(Math.random() * 4);
    let column = Math.floor(Math.random() * 4);
    if (game[row][column] == 0) {
      game[row][column] = newBox();
      return game;
    } else {
      gameOver += 1;
    }
  }
  if (checkGameOver(game)) {
    console.log("Game Over");
    document.querySelector("h1").innerHTML = "GAME OVER";
  } else {
    return game;
  }
}

function checkGameOver(game) {
  for (let i = 0; i < game.length; i++) {
    for (let y = 0; y < game[i].length; y++) {
      //check left right
      if (i == 0) {
        if (y == 0) {
          if (game[0][0] == game[0][1] || game[0][0] == game[1][0]) {
            return false;
          }
        } else if (y == 3) {
          if (game[0][3] == game[0][2] || game[0][3] == game[1][3]) {
            return false;
          }
        } else {
          if (game[i][y] == game[i][y + 1] || game[i][y] == game[i][y - 1] || game[i][y] == game[i + 1][y]) {
            return false;
          }
        }
      } else if (i == 3) {
        if (y == 0) {
          if (game[3][0] == game[3][1] || game[3][0] == game[2][0]) {
            return false;
          }
        } else if (y == 3) {
          if (game[3][3] == game[3][2] || game[3][3] == game[2][3]) {
            return false;
          }
        } else {
          if (game[i][y] == game[i][y + 1] || game[i][y] == game[i][y - 1] || game[i][y] == game[i - 1][y]) {
            return false;
          }
        }
      } else if (y == 0 && (i == 1 || i == 2)) {
        if (game[i][y] == game[i][y + 1] || game[i][y] == game[i + 1][y] || game[i][y] == game[i - 1][y]) {
          return false;
        }
      } else if (y == 3 && (i == 1 || i == 2)) {
        if (game[i][y] == game[i][y - 1] || game[i][y] == game[i + 1][y] || game[i][y] == game[i - 1][y]) {
          return false;
        }
      } else {
        if (game[i][y] == game[i][y + 1] || game[i][y] == game[i][y - 1] || game[i][y] == game[i - 1][y] || game[i][y] == game[i + 1][y]) {
          return false;
        }
      }
    }
  }
  return true;
}
//Transpose ARRAY

function transpose(game) {
  let newGame = [];
  for (let i = 0; i < game.length; i++) {
    let newRow = [];
    for (let y = 3; y >= 0; y--) {
      newRow.push(game[y][i]);
    }
    newGame.push(newRow);
  }
  return newGame;
}

function reverseTranspose(game) {
  let newGame = [];
  for (let i = game.length - 1; i >= 0; i--) {
    let newRow = [];
    for (let y = 0; y < 4; y++) {
      newRow.push(game[y][i]);
    }
    newGame.push(newRow);
  }
  return newGame;
}
// D on keyboard
function moveRight(game) {
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
function moveLeft(game) {
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
function moveDown(game) {
  return reverseTranspose(moveLeft(transpose(game)));
}
// W on keyboard
function moveUp() {
  return reverseTranspose(moveRight(transpose(game)));
}

//EXECUTE
game = startGame(game);
updateGameUI(game);
console.log(game);

let kb = document.body.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key == "a") {
    console.log("left");
    game = moveLeft(game);
    game = addNewBoxToGame(game);
    updateGameUI(game);
    console.log(game);
  }
  if (e.key == "d") {
    console.log("right");
    game = moveRight(game);
    game = addNewBoxToGame(game);
    updateGameUI(game);
    console.log(game);
  }
  if (e.key == "w") {
    console.log("up");
    game = moveUp(game);
    game = addNewBoxToGame(game);
    updateGameUI(game);
    console.log(game);
  }
  if (e.key == "s") {
    console.log("down");
    game = moveDown(game);
    game = addNewBoxToGame(game);
    updateGameUI(game);
    console.log(game);
  }
});
