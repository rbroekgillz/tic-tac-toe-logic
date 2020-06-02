const {calculateWinner} = require('./calculate-winner.js');

function gameIsTie(board) {
  const boardHasNoNulls = board => !board.some(row => row.some(item => item === null));
  return boardHasNoNulls(board) && calculateWinner(board) === null;
}

module.exports = {gameIsTie};