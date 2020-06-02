function calculateWinner(board) {
  const calculateWinnerOfRow = row => row.reduce((winner, symbol) => winner === symbol ? symbol : null);
  const columnsIntoRows = arrOfArrs => [...Array(arrOfArrs.length).keys()].map(n => board.map(row => row[n]));
  const twoDiagonalsIntoRows = board => [board.map((row, n) => row[n]), board.map((row, n) => row[board.length-1-n])];
  const calculateWinnerOfBoard = arrOfWinners => arrOfWinners.reduce((winner, symbol) => typeof symbol === 'string' ? symbol : winner);
  const boardIncludingColumns = [...board, ...columnsIntoRows(board), ...twoDiagonalsIntoRows(board)];
  return calculateWinnerOfBoard(boardIncludingColumns.map(calculateWinnerOfRow));
}

module.exports = {calculateWinner};