function calculateWinner(board) {
  const calculateWinnerOfRow = row => row.reduce((winner, symbol) => winner === symbol ? symbol : null);
  const calculateWinnerOfBoard = arrOfWinners => arrOfWinners.reduce((winner, symbol) => typeof symbol === 'string' ? symbol : winner);
  return calculateWinnerOfBoard(board.map(calculateWinnerOfRow));
}

module.exports = {calculateWinner};