import { loveVowel } from "../loveVowel";

describe("loveModulo", () => {
  it("case 1", () => {
    const value = loveVowel({ name: "Jaani" });
    expect(value).toBe(60);
  });

  it("case 2", () => {
    const value = loveVowel({ name: "Robert" });
    expect(value).toBe(63);
  });
});
