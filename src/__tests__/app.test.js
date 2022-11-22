const { getCurrentMonth } = require('../app');

describe('app tests suites - getCurrentMonth', () => {
    test('should return the current month', () => {
        const result = getCurrentMonth();
        expect(result).toBe('November');
    });
});