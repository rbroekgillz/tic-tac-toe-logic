const {calculateWinner} = require('./calculate-winner');

test('Horizontal winner X on line 1 should work', () => {
  const board = [
    ['x', 'x', 'x'],
    ['o', null, 'o'],
    [null, 'x', 'o']
  ];
  expect(calculateWinner(board)).toBe('x');
});
test('Horizontal winner O on line 3 should work', () => {
  const board = [
    [null, null, null],
    [null, 'x', 'o'],
    ['o', 'o', 'o']
  ];
  expect(calculateWinner(board)).toBe('o');
});
test('No horizontal winner should return null', () => {
  const board = [
    [null, 'x', 'x'],
    [null, 'x', 'o'],
    ['o', null, 'o']
  ];
  expect(calculateWinner(board)).toBeNull();
});