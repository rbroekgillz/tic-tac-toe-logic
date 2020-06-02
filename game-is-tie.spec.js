const { gameIsTie } = require('./game-is-tie');

test('Game #1 should be a tie', () => {
  const board = [
    ['x', 'o', 'x'],
    ['x', 'x', 'o'],
    ['o', 'x', 'o']
  ];

  expect(gameIsTie(board)).toBe(true);
});

test('Game #2 should be a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['x', 'o', 'o'],
    ['o', 'x', 'x']
  ];

  expect(gameIsTie(board)).toBe(true);
});

test('Game #3 should NOT be a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['x', 'o', 'o'],
    ['x', 'x', 'o']
  ];

  expect(gameIsTie(board)).toBe(false);
});

test('Game #4 should NOT be a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'x', 'x']
  ];
  expect(gameIsTie(board)).toBe(false);
});

test('Unfinished game #1 should be a tie', () => {
  const board = [
    ['x', 'o', 'x'],
    ['x', 'o', null],
    ['o', 'x', 'o']
  ]
  expect(gameIsTie(board)).toBe(true);
});

test('Unfinished game #2 should be a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['x', 'x', 'o'],
    ['o', null, 'x']
  ]
  expect(gameIsTie(board)).toBe(true);
});

test('Unfinished game #3 should NOT be a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['x', null, null],
    ['x', 'x', null]
  ];

  expect(gameIsTie(board)).toBe(false);
});

test('Unfinished game #4 should NOT be a tie', () => {
  const board = [
    ['o', null, 'x'],
    ['o', 'x', 'o'],
    [null, null, 'x']
  ];
  expect(gameIsTie(board)).toBe(false);
});