const {calculateWinner} = require('./calculate-winner.js');

function gameIsTie(board) {
  const boardIsFull = board => !board.some(row => row.some(item => item === null));
  const fillNullsWith = (board, newItem) => board.map(row => row.map(item => item === null ? newItem : item));

  if (boardIsFull(board)) {
    return calculateWinner(board) === null;
  }

  return calculateWinner(fillNullsWith(board, 'o')) === null && calculateWinner(fillNullsWith(board, 'x')) === null;
}

module.exports = {gameIsTie};