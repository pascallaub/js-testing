const {addition, subtract} = require('./math');

describe('Addition Function', () => {
    test('should add two positive numbers', () => {
        expect(addition(1, 2)).toBe(3);
    });

    test('should add two negative numbers', () => {
        expect(addition(-1, -2)).toBe(-3);
    });

    test('should add a positive and a negative number', () => {
        expect(addition(5, -3)).toBe(2);
    });

    test('should handle adding zero', () => {
        expect(addition(0, 0)).toBe(0);
    });

    test('should handle non-integer numbers', () => {
        expect(addition(2.5, 3.5)).toBe(6);
    });
    test('should handle non-number inputs', () => {
        expect(addition('a', 2)).toBe(undefined);
    });
    test('should handle more than two inputs', () => {
        expect(addition(1, 2, 3)).toBe(undefined);
    });
    test('should handle only one input', () => {
        expect(addition(1)).toBe(undefined);
    });
    test('should handle no inputs', () => {
        expect(addition()).toBe(undefined);
    });
});

describe('Subtraction Function', () => {
    test('should subtract two positive numbers', () => {
        expect(subtract(2, 1)).toBe(1);
    });
    test('should subtract two negative numbers', () => {
        expect(subtract(-2, -1)).toBe(-1);
    });
    test('should subtract a positive and a negative number', () => {
        expect(subtract(5, -3)).toBe(8);
    });
    test('should handle subtracting zero', () => {
        expect(subtract(0, 0)).toBe(0);
    });
    test('should handle non-integer numbers', () => {
        expect(subtract(2.5, 3.5)).toBe(-1);
    });
    test('should handle non-number inputs', () => {
        expect(subtract('a', 2)).toBe(undefined);
    });
    test('should handle more than two inputs', () => {
        expect(subtract(1, 2, 3)).toBe(undefined);
    });
    test('should handle only one input', () => {
        expect(subtract(1)).toBe(undefined);
    });
    test('should handle no inputs', () => {
        expect(subtract()).toBe(undefined);
    });
});