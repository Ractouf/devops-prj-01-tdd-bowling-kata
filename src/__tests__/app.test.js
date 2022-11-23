const BowlingGame = require("../bowling-game");
let game;

beforeEach(() => {
  game = new BowlingGame();
});

describe("Test bowling game", () => {
  test('should return only 0"s', () => {
    rollMany(20, 0);
    expect(game.score).toEqual(0);
  });

  test("should return 20 for a game one ones", () => {
    rollMany(20, 1);
    expect(game.score).toEqual(20);
  });

  test("should handle a spare with bonus", () => {
    game.roll(8);
    game.roll(2);
    game.roll(1);
    rollMany(17, 0);
    expect(game.score).toEqual(12);
  });
});

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i++) game.roll(pins);
}
