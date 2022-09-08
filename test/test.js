let game = [
  [0, 5, 3, 5],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 0],
];
function moveLeft(game) {
  for (let i = 0; i < game.length; i++) {
    let zeroCount = 0;
    for (let y = 0; y < game.length; y++) {
      // if (y == 0 && game[i][y] != 0) {
      //   continue;
      // } else if (game[i][y] == 0) {
      //   //ignore if number is 0
      //   zeroCount += 1;
      // } else {
      //   let oldValue = game[i][y];
      //   game[i][y - zeroCount] = oldValue;
      //   if (zeroCount != 0) {
      //     game[i][y] = 0;
      //   }
      //   if (
      //     game[i][y - zeroCount] != 0 &&
      //     game[i][y - zeroCount] == game[i][y - zeroCount - 1]
      //   ) {
      //     game[i][y - zeroCount - 1] = oldValue * 2;
      //     game[i][y - zeroCount] = 0;
      //     zeroCount += 1;
      //   }
      // }
      if (game[i][y] == 0) {
        zeroCount += 1;
      } else if (zeroCount != 0) {
        needToAdd = false;
        for (let j = 0; j <= 4 - y; j++) {
          if (game[i][y + j] == game[i][y]) {
            game[i][y - zeroCount] = game[i][y] * 2;
            game[i][y] = 0;
            game[i][y + j] = 0;
            needToAdd = true;
            break;
          }
        }
        if (needToAdd == false) {
          game[i][y - zeroCount] = game[i][y];
          game[i][y] = 0;
        }
      }
    }
  }
  return game;
}

console.log(game);
console.log("left");
console.log(moveLeft(game));
