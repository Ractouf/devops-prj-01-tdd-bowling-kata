const BowlingGame = require('../bowling-game');
let game;

beforeEach(() => {
    game = new BowlingGame();
});

describe('Test bowling game', () => {
    test('should return only 0"s', () => {
        for (let i = 0; i < 20; i++)
            game.roll(0);

        expect(game.score).toEqual(0);
    });
});