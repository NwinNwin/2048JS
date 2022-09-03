let game = [
  [0, 1, 2, 3],
  [4, 9, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

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

console.log(checkGameOver(game));
