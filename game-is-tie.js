const {calculateWinner} = require('./calculate-winner.js');

function gameIsTie(board) {
  const boardIsFull = board => !board.some(row => row.some(item => item === null));
  const fillNullsWith = (board, newItem) => board.map(row => row.map(item => item === null ? newItem : item));

  // const filledWithOs = fillNullsWith(board, 'o');
  // const filledWithXs = fillNullsWith(board, 'x');
  // const OsCanWin = calculateWinner(fillNullsWith(board, 'o'));
  // const XsCanWin = calculateWinner(fillNullsWith(board, 'x'));
  //
  // console.log({board, filledWithOs, filledWithXs, OsCanWin, XsCanWin});

  if (boardIsFull) {
    return calculateWinner(board) === null;
  }

  return calculateWinner(fillNullsWith(board, 'o')) === null && calculateWinner(fillNullsWith(board, 'x')) === null;
}

module.exports = {gameIsTie};