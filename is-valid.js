const symbols = [ 'x', 'o', null ];

function isValidBoard(board) {
  const isArrayOfThreeItems = array => Array.isArray(array) && array.length === 3;
  const allItemsAreSymbols = array => array.every(item => symbols.includes(item));
  return isArrayOfThreeItems(board) && board.every(array => isArrayOfThreeItems(array) && allItemsAreSymbols(array));
}

module.exports = {isValidBoard};