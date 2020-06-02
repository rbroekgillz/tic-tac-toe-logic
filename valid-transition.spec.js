const {isValidTransition} = require('./is-valid');

test("Add X to null should be valid", () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
    const to = [
        [null, 'o', 'x'],
        [null, 'x', 'x'],
        ['x', 'o', 'o']
    ]
    expect(isValidTransition('x', from, to)).toBe(true);
});

test("Replace X with O should be invalid", () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
    const to = [
        [null, 'x', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]

    expect(isValidTransition('o', from, to)).toBe(false);
});

test("Overwrite O with null should be invalid", () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
    const to = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', null, 'o']
    ]

    // TODO: how should the api work? Should the first argument be null?
    expect(isValidTransition(null, from, to)).toBe(false);
});

test("Multiple moves at once should be invalid", () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
    const to = [
        [null, 'o', 'x'],
        ['x', 'x', 'x'],
        ['x', 'o', 'o']
    ];

    expect(isValidTransition('x', from, to)).toBe(false);
});
