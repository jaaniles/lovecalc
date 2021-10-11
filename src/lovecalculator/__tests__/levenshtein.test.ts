import { calculateLove } from "../levenshtein";

describe("levenshtein", () => {
  it("case 1", () => {
    const loveRatio = calculateLove("Jaani", "Fraktio");
    expect(loveRatio).toBe(88);
  });

  it("case 2", () => {
    const loveRatio = calculateLove("Robert", "Fraktio");
    expect(loveRatio).toBe(83);
  });

  it("case 3", () => {
    const loveRatio = calculateLove("Aleksi", "Fraktio");
    expect(loveRatio).toBe(89);
  });

  it("case 4, empty string", () => {
    const loveRatio = calculateLove("", "Fraktio");
    expect(loveRatio).toBe(0);
  });

  it("case 5, equal strings", () => {
    const loveRatio = calculateLove("Fraktio", "Fraktio");
    expect(loveRatio).toBe(100);
  });
});
