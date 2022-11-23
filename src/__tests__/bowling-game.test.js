const BowlingGame = require("../bowling-game");
let game;

beforeEach(() => {
  game = new BowlingGame();
});

describe("Test bowling game", () => {
  test('should return only 0"s - Alpha', () => {
    rollMany(20, 0);
    expect(game.score).toEqual(0);
  });

  test("should return 20 for a game one ones - Beta", () => {
    rollMany(20, 1);
    expect(game.score).toEqual(20);
  });

  test("should handle a spare with bonus - Sigma", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);
    expect(game.score).toEqual(16);
  });

  test("should handle a strike with bonus - Omega", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(16, 0);
    expect(game.score).toEqual(14);
  });

  test("should have a score of 300 as 300 is the max score - Epsylon", () => {
    rollMany(100, 10);
    expect(game.score).toEqual(300);
  });
});

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i++) game.roll(pins);
}
